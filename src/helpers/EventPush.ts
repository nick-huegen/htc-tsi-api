import { EventHubProducerClient } from '@azure/event-hubs';
import * as dotenv from 'dotenv';
import { MessageModel } from '../model/MessageModel';
dotenv.config();

const connectionString = process.env['EVENTHUB_CONNECTION_STRING'] || '';
const eventHubName = process.env['EVENTHUB_NAME'] || '';

export async function EventPush(messageList: MessageModel[]): Promise<void> {
  console.log(`Running send event`);

  const producer = new EventHubProducerClient(connectionString, eventHubName);

  console.log('Sending events');

  const eventsToSend = messageList;

  try {
    const batchOptions = {};
    let batch = await producer.createBatch(batchOptions);
    let numEventsSent = 0;

    let i = 0;

    while (i < eventsToSend.length) {
      // If message exists add it to a batch to send.
      const isAdded = batch.tryAdd({ body: eventsToSend[i] });
      if (isAdded) {
        console.log(`Added eventsToSend[${i}] to the batch`);
        ++i;
        continue;
      }
      // Skips on faulty and big messages
      if (batch.count === 0) {
        console.log(
          `Message was too large and can't be sent until it's made smaller. Skipping...`,
        );
        ++i;
        continue;
      }
      console.log(
        `Batch is full - sending ${batch.count} messages as a single batch.`,
      );
      await producer.sendBatch(batch);
      numEventsSent += batch.count;
      batch = await producer.createBatch(batchOptions);
      if (batch.count > 0) {
        console.log(
          `Sending remaining ${batch.count} messages as a single batch.`,
        );
        await producer.sendBatch(batch);
        numEventsSent += batch.count;
      }

      console.log(`Sent ${numEventsSent} events`);

      if (numEventsSent !== eventsToSend.length) {
        throw new Error(
          `Not all messages were sent (${numEventsSent}/${eventsToSend.length})`,
        );
      }
    }
  } catch (err: any) {
    console.log('Error when creating & sending a batch of events: ', err);
  }
  await producer.close();
  console.log(`Exiting sendEvents sample`);
}

const messageModel: MessageModel[] = [];
EventPush(messageModel).catch((error) => {
  console.error('Error running sample:', error);
});
