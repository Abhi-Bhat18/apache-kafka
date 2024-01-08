import kafka from "./kafka.js";


export const createTopic = async (topic) => {
  try {
    const admin = kafka.admin();
    await admin.connect();
    console.log("Admin connected successfully");

    console.log("Creating the topic");

    await admin.createTopics({
      topics: [
        {
          topic: topic,
          numPartitions: 1,
          replicationFactor: 1,
        },
      ],
    });
    console.log("Notification topic created successfully");
  } catch (error) {
    console.log(error);
  }
};
