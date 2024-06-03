const kafka = require('kafka-node');
const config = require('./config');
if(!config.isEnable.sasl) delete config['sasl'];
if(!config.isEnable.sslOptions) delete config['sslOptions'];
const client = new kafka.KafkaClient(config);
const producer = new kafka.HighLevelProducer(client);

producer.on('ready', () => {
  console.log('Kafka Producer is ready');
});

const kafkaSendProducer = (data) => {
  const buffer = new Buffer.from(JSON.stringify(data.body));
  const record = [
    {
      topic: data.topic,
      messages: buffer,
      attributes: data.attributes,
      partitionerType: data.partition
    }
  ];
  producer.send(record, (err, data) => {
    if (err) console.error(err);
    console.log(`Send data to ${data.topic}`);
  });
};

producer.on('error', async (error) => {
  console.error('Kafka Producer Error', error);
});

(async () => {
  const kafkaMsg = {
    'content': 'sample',
    'timestamp': new Date(),
  };
  const kafkaData = {
    topic: config.topic.default,
    attributes: 1,
    body: kafkaMsg,
    partition: 1
  };
  kafkaSendProducer(kafkaData)
})();
