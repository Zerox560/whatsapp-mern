import { useState, useEffect } from "react";
import { Sidebar, Chat } from "./components";
import Pusher from "pusher-js";
import axios from "./axios";

import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages").then(response => setMessages(response.data.messages))
  }, []);

  useEffect(() => {
    const pusher = new Pusher('456026843c8c2d4fb7fa', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe("message");
    channel.bind("inserted", newMessage => {
      setMessages([...messages, newMessage])
    });

    return () => {
      pusher.unbind_all();
      pusher.unsubscribe();
    }

  }, [messages])

  return (
    <div className="app">
      <div className="app_container">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
