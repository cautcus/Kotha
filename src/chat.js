// src/Chat.js
import React, { useEffect, useState } from "react";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db, auth } from "./firebase";
import { signOut } from "firebase/auth";

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesArray = [];
      querySnapshot.forEach((doc) => {
        messagesArray.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messagesArray);
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    await addDoc(collection(db, "messages"), {
      text: input,
      uid: user.uid,
      timestamp: serverTimestamp()
    });
    setInput("");
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-2 bg-blue-500 text-white">
        <h1 className="text-xl font-semibold">Chat App</h1>
        <button onClick={handleSignOut} className="p-2 bg-red-500 hover:bg-red-600 rounded">
          Sign Out
        </button>
      </header>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex my-2 ${message.uid === user.uid ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-lg shadow-md p-2 max-w-xs ${message.uid === user.uid ? "bg-blue-200 self-end" : "bg-white self-start"}`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <form onSubmit={sendMessage} className="flex items-center px-4 py-2 bg-gray-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-3 py-2 mr-2 bg-white rounded-md outline-none"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
