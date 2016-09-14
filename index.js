/*jshint esversion: 6 */

var config = require('./config');
var express = require('express');
var bodyParser = require('body-parser');
var TelegramBot = require('telegrambot');
var Google = require('google');

// TELEGRAM SETUP
var api = new TelegramBot(config.TELEGRAM_TOKEN);
api.setWebhook({url: config.WEBHOOK_BASE_URL+config.WEBHOOK_PATH}, function(err, message) {
  if (err) {
    console.log(err);
  } else {
    console.log('Telegram webhook set');
  }
});

// SERVER SETUP
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function status(req, res, next) {
  res.json({ status: 'UP' });
});
app.post(config.WEBHOOK_PATH, function(req, res) {
  if (!req.hasOwnProperty('body')) {
    return res.send();
  }
  var body = req.body;
  if (body.hasOwnProperty('message')) {
    readCommand(body.message);
  }
  res.send();
});

// Start server
var server = app.listen(config.SERVER_PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});

var readCommand = function(message) {
  console.log('Reading command...');
  if (message) {
    if (message.text !== undefined) {
      if (message.text === '/start') {
        api.sendMessage({ chat_id: message.chat.id, text: config.START_MESSAGE }, function (err, message) {
          if (err) {
            console.log(err);
          }
        });
      } else if (message.text.startsWith('/search')) {
        var query = message.text.replace('/search', '');
        if (query.length > 0) {

        } else {
          api.sendMessage({ chat_id: message.chat.id, text: config.ERROR_MESSAGE_EMPTY }, function (err, message) {
            if (err) {
              console.log(err);
            }
          });
        }
        Google(query + ' site:scaruffi.com', function (err, res){
          if (err) {
            console.error(err);
            // TODO: SEND ERROR MESSGE
          }
          var link = res.link[0];
          console.log(link);
          if (!link) {
            api.sendMessage({ chat_id: message.chat.id, text: config.ERROR_MESSAGE_EMPTY_RESP }, function (err, message) {
              if (err) {
                console.log(err);
              }
            });
            return;
          } else {
            api.sendMessage({ chat_id: message.chat.id, text: link }, function (err, message) {
              if (err) {
                console.log(err);
              }
            });
          }
        });
      }
    } else {
      console.log('Message text missing');
    }
  } else {
    console.log('Message missing');
  }
};
