var config = {};

config.SERVER_PORT = process.env.PORT || 3000;
config.WEBHOOK_BASE_URL = process.env.WEBHOOK_BASE_URL;
config.WEBHOOK_PATH = process.env.WEBHOOK_PATH || '/telegramBot';
config.TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
config.TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
config.START_MESSAGE = "Use the /search command to search anything in scaruffi.com. The search query must be separated from the command (e.g. '/search Karl Marx'). Since the bot is running in a Heroku free server it goes to sleep when it's not being used and you can experience some delay before receiving a response for your command. This bot is open source and it's been developed by github.com/membersheep.";
config.ERROR_MESSAGE_EMPTY = "Please write a non empty search query after the command. Read /start for further instructions.";
config.ERROR_MESSAGE_EMPTY_RESP = "Sorry, nothing found.";

module.exports = config;
