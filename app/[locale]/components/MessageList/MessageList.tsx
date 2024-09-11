// components/MessageList.js
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { analytics, db } from "../../lib/firebase";
import { logEvent } from "firebase/analytics";

const MessageList = () => {
  const [messages, setMessages]: any = useState([]);

  useEffect(() => {
    
    logEvent(analytics, "notification_received", {
      item_id: "12345",
      item_name: "Test Notification",
    });
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((message: any) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
