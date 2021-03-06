var config = {};

config.SERVER_PORT = process.env.PORT || 3000;
config.WEBHOOK_BASE_URL = process.env.WEBHOOK_BASE_URL;
config.WEBHOOK_PATH = process.env.WEBHOOK_PATH || '/telegramBot';
config.TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
config.START_MESSAGE = "Use the /search command to search anything in scaruffi.com. The search query must be separated from the command (e.g. '/search Karl Marx'). Use the /quote command to post a random quote by Piero. You can use the inline bot by writing the bot username (@scaruffibot) and then a search query. If you write 'quote' as search query a random quote will be gathered. Since the bot is running in a Heroku free server it goes to sleep when it's not being used and you can experience some delay before receiving a response for your command. This bot is open source and it's been developed by github.com/membersheep.";
config.ERROR_MESSAGE_EMPTY_QUERY = "Please write a non empty search query after the command. Read /start for further instructions.";
config.ERROR_MESSAGE_EMPTY_RESP = "Sorry, nothing found.";

module.exports = config;
