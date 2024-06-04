# Kafka Producer and Consumer NodeJS Example

This repository contains examples of using Kafka Producer and Consumer via NodeJS.

## Usage

First, create Kafka Topic then install nodejs module. Copy `.env.example` file into `.env` and fill value for each environment variable.

Then, execute file `bin/consumer.js` to listen new message from topic based `.env` configuration. Open new terminal, execute file `bin/producer.js` to send single message into your topic and watch first terminal to check if message has been received.

## Authenticate with SASL 

Apache Kafka® brokers support client authentication using SASL. SASL authentication can be enabled concurrently with TLS/SSL encryption. Currently this example only support SASL/Plain.
