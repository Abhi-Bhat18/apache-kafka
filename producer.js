import kafka from "./kafka.js";

const producer = kafka.producer();

const produceMessage = async (topic, message) => {
  await producer.connect();
  console.log("Producer connected successfully");
  try {
    const result = await producer.send({
      topic,
      messages: [{ value: message }],
    });

    console.log("message sent successfully");

  } catch (error) {
    console.log("Error producing the message", error);
  } finally {
    await producer.disconnect();
  }
};

export default produceMessage;