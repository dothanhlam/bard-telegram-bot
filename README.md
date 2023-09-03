# bard-telegram-bot

## Introduction
See full article on my [Medium](https://medium.com/@dothanhlam/building-your-own-ai-telegram-botchat-with-google-bard-and-aws-lambda-function-deployment-in-5-546710a3941b)

## Steps to make the bot work
1. Create your own telegram bot with Botfather
2. Grab the BOT API key
3. Create the lambda funtion and public it to via API gateway. You can deploy this source code as well.
4. Grab the Google Bard session key, you need to login with your google account, go to [GoogleBard] (bard.goole.com). Under your Chrome browser developer tool, open the Application and check the cookie, find the key __Secure-1PSID
5. Link the bot and your lambda via the URL webhook configure
```
https://api.telegram.org/bot{my_bot_token}/setWebhook?url={url_to_send_updates_to}

```