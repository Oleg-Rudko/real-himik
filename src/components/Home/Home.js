import React from "react";
import Header from "../Header";

const Home = () => {
  const token = "5103842565:AAEs2lbfH0Hb4zsPAY637lbgOqy5py6y1ac";
  const chatId = 455282113;
  // const currentdate = new Date();
  // const datetime =
  //   "Дата: " +
  //   currentdate.getDate() +
  //   "/" +
  //   (currentdate.getMonth() + 1) +
  //   "/" +
  //   currentdate.getFullYear() +
  //   " время: " +
  //   currentdate.getHours() +
  //   ":" +
  //   currentdate.getMinutes() +
  //   ":" +
  //   currentdate.getSeconds();

  const send = (text) => {
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: `text`,
        parse_mode: "HTML",
        disable_web_page_preview: false,
        disable_notification: false,
        reply_to_message_id: 0,
      }),
    })
      .then((response) => response.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Header />
      <p>Категории:</p>
      <button onClick={() => send()}>Send message</button>
    </div>
  );
};

export default Home;
