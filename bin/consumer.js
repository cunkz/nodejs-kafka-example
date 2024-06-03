const kafka = require('kafka-node');
const Consumer = kafka.ConsumerGroup;
const config = require('../config');
class ConsumerKafka {
  constructor(data) {
    let options = {
      kafkaHost: data.host || config.kafkaHost,
      autoCommit: (data.autoCommit === false ? false : true),
      fetchMaxBytes: 10 * 1024 * 1024,
      groupId: data.groupId,
      sessionTimeout: 15000,
      protocol: ['roundrobin'],
      fromOffset: (data.fromOffset ? data.fromOffset : 'latest'),
      encoding: 'utf8',
      keyEncoding: 'utf8',
    };
    if(config.isEnable.sasl) options.sasl = config.sasl;
    if(config.isEnable.sslOptions) options.sslOptions = config.sslOptions;
    return new Consumer(options,data.topic);
  }
}

(async () => {
  const dataConsumer = {
    topic: config.topic.default,
    groupId: config.groupId.default,
    fromOffset: 'earliest',
  };

  const consumer = new ConsumerKafka(dataConsumer);
  consumer.on('message', (message) => {
    console.log(message);
  });
})();
