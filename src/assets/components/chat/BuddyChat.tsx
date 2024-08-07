// BuddyChat.tsx
import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai'; // Import user icon from react-icons
import "../../../App.css"
const defaultMessages = [
  { text: 'Hello! How can I help you today?', user: 'bot' },
  { text: 'I have a question about your services.', user: 'user' },
  { text: 'Hello! How can I help you today?', user: 'bot' },
  { text: 'I have a question about your services.', user: 'user' },
];

const BuddyChat = () => {
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col w-full  mx-auto p-4 border rounded-lg shadow-lg bg-white ">
      <h1 className='text-gray-600 text-xl pb-2'>Buddy Chat</h1>
      <div className="flex-1 overflow-auto mb-4 p-2 border rounded-lg bg-gray-100">
        <div className="space-y-2 overflow-hidden overflow-y-auto h-[160px] 2xl:h-[204px] chatscrollbar">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-2 ${msg.user === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.user === 'user' ? null : (
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 ">
                  <AiOutlineUser size={20} />
                </div>
              )}
              <div
                className={`p-2 rounded-lg max-w-xs ${
                  msg.user === 'user'
                    ? 'bg-blue-100 text-blue-800 ml-2'
                    : 'bg-gray-200 text-gray-800 mr-2'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" p-2 border rounded-lg w-[75%]"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg w-[20%]"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default BuddyChat;
