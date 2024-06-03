require('dotenv').config();

const config = {
  isEnable: {
    sasl: process.env.IS_ENABLE_SASL === 'true',
    sslOptions: process.env.IS_ENABLE_SSL_OPTIONS === 'true',
  },
  kafkaHost: process.env.KAFKA_HOST_URL,
  topic: {
    default: process.env.KAFKA_TOPIC_DEFAULT,
  },
  sasl: { 
      mechanism: 'plain', 
      username: process.env.KAFKA_SASL_USERNAME,
      password: process.env.KAFKA_SASL_PASSWORD,
  },
  sslOptions: {
      rejectUnauthorized: false,
      cert: Buffer.from(process.env.KAFKA_SSL_CERTIFICATE, "base64").toString(),
  },
};

module.exports = config;
