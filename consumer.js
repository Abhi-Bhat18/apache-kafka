import { copyFileSync } from "fs";
import kafka from "./kafka.js";

const createConsumer = async () => {
  const consumer = kafka.consumer({ groupId: "notification" });
  await consumer.connect();
  console.log("Consumer connected successfully");

  await consumer.subscribe({ topic: "notification", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log('Received Message',{
        topic: topic,
        value: message.value.toString(),
        partition,
        offset: message.offset,
      });
    },
  });
};


export default createConsumer;
