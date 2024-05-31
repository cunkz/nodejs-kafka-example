require('dotenv').config();

const config = {
  kafkaHost: process.env.KAFKA_HOST_URL,
  topic: {
    default: process.env.KAFKA_TOPIC_DEFAULT,
  },
};

module.exports = config;
