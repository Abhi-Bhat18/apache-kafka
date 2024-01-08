import createConsumer from "./consumer.js";
import { createTopic } from "./kafkaAdmin.js";
import produceMessage from "./producer.js";

const topic = "notification";

// create the topic
// await createTopic(topic);

await createConsumer();

await produceMessage(topic, "This is the test message");
