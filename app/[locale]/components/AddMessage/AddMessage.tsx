// components/AddMessage.js
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

const AddMessage = () => {

  const [text, setText] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (text.trim()) {
      await addDoc(collection(db, "posts"), { text });
      setText("");
    }
  };



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default AddMessage;