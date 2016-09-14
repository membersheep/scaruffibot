# scaruffibot
![Heroku](https://heroku-badge.herokuapp.com/?app=scaruffi-bot&style=flat)
![Dependencies](https://david-dm.org/membersheep/scaruffibot.svg)

Telegram bot to search scaruffi.com.
## Usage
Add the bot by following this link [ScaruffiBot](http://telegram.me/scaruffibot) .
Use the /search command to search anything in scaruffi.com. The search query must be separated from the command (e.g. '/search Karl Marx'). Since the bot is deployed in a Heroku free server it goes to sleep when it's not being used and you can experience some delay before receiving a response for your command.
## Deployment
You can deploy your own bot to heroku by following these steps:

1. Create a new heroku app.
2. Select GitHub as deployment method and connect it to this repository.
3. Create a new bot account with [BotFather](https://telegram.me/BotFather).
4. Go to your heroku app settings page and create the following config variables:
  - TELEGRAM_TOKEN: the token you received from the BotFather.
  - WEBHOOK_BASE_URL: your heroku app url *https://your-heroku-app-name.herokuapp.com*
