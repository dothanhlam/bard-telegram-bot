import axios from 'axios';
import Bard from "bard-ai";

const myBard = new Bard({"__Secure-1PSID":process.env.COOKIE});

export const handler = async (event) => {
  
  if (event == null || event == undefined) {
    return {
      statusCode: 500
    }
  }
  
  const body = await JSON.parse(event.body);
  
  if (body == null || body == undefined) {
    return {
      statusCode: 500
    }
  }
  
  const { message } = body;
  const { chat, text } = message;
  let msg = "...";
  
  if (text && text.split(" ")[0] === "/a") {
    msg = await myBard.ask(text);
  } 
  else if (text && text.split(" ")[0] === "/h") {
    msg = "GoogleBard platform, deployed on AWS lambda";
  }
  else {
    return {
      statusCode: 200
    }
  } 

  await axios({
    method: 'post',
    url: `https://api.telegram.org/bot${process.env.TELEGRAM_API_KEY}/sendMessage`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({
      chat_id: chat.id,
      text: `${msg}`
    })
  }); 

  
 return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};


