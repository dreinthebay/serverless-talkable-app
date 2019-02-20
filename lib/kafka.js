//https://www.npmjs.com/package/kafka-node#producer
const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({kafkaHost: 'analytics-kafka01.lumoslabs.com:9092,analytics-kafka02.lumoslabs.com:9092,analytics-kafka03.lumoslabs.com:9092,analytics-kafka04.lumoslabs.com:9092'});
const producer = new Producer(client);

producer.on('ready', function () {
	const payloads = [{ topic: 'talkable-development', messages: 'Kafka is initialized...', partition: 0 }];
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
});
 
producer.on('error', function (err) {})

module.exports = producer

// To access console Kafka consumer run:
// $ bin/kafka-console-consumer.sh --bootstrap-server analytics-kafka01.lumoslabs.com:9092,analytics-kafka02.lumoslabs.com:9092,analytics-kafka03.lumoslabs.com:9092,analytics-kafka04.lumoslabs.com:9092 --topic talkable-development --from-beginning 