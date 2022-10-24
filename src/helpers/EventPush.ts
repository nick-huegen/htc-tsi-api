import { EventHubProducerClient } from '@azure/event-hubs';
import * as dotenv from 'dotenv';
import { MessageModel } from '../model/MessageModel';
dotenv.config();

const connectionString = process.env['EVENTHUB_CONNECTION_STRING'] || '';
const eventHubName = process.env['EVENTHUB_NAME'] || '';

export async function EventPush(
  messageList: Array<MessageModel>,
): Promise<void> {
  console.log(`Running send event`);

  const producer = new EventHubProducerClient(connectionString, eventHubName);

  console.log('Sending events');

  const eventsToSend = messageList;

  try {
    const batchOptions = {};
    const batch = await producer.createBatch(batchOptions);
    let numEventsSent = 0;

    for (const event of eventsToSend) {
      // If message exists add it to a batch to send.
      const isAdded = batch.tryAdd({ body: event });
      if (isAdded) {
        console.log(`Added eventsToSend[${event}] to the batch`);
        continue;
      }
      console.log(
        `Batch is full - sending ${batch.count} messages as a single batch.`,
      );
    }
    await producer.sendBatch(batch);
    numEventsSent += batch.count;
    if (numEventsSent !== eventsToSend.length) {
      throw new Error(
        `Not all messages were sent (${numEventsSent}/${eventsToSend.length})`,
      );
    }
  } catch (err: any) {
    console.log('Error when creating & sending a batch of events: ', err);
  }
  await producer.close();
  console.log(`Exiting sendEvents sample`);
}
