import { useEffect } from "react";
import styles from "./MainPage.module.css";




function MainPage() {
  return ( 
    <div className={styles["main"]}>
      <header >
        <a className={styles["chat"]}>
          <Chat />
        </a>
      </header>
    </div>
  );
}

const Chat: React.FC = () => {
  // const ws = new WebSocket('ws://91.191.236.14:1600/')
  // useEffect(( ) => {
  //   ws.addEventListener('message', (e) => {
  //     console.log(e)
  //   })
  // })



  return (
    <div>
      <Messages />
      <AddMessageForm />
    </div>
  );
};

const Messages: React.FC = () => {
  const messages = [1, 2, 3, 4];
  return <div>
    {messages.map((m: any) => <Message/>)}
  </div>;
};

const Message: React.FC = () => {
  const message = {
    author: 'danil',
    text: 'hello'
  }

  return <div>
      <b>{message.author}</b>
      <br/>
      {message.text}
      <hr/>
    </div>
};

const AddMessageForm: React.FC = () => {
  return (
    <div>
      <div className={styles["main"]}>
        <textarea></textarea>
      </div>
      <div>
        <button>Send</button>
      </div>
    </div>
  );
};

export default MainPage;
