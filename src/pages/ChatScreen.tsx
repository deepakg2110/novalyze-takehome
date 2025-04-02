import React from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const dummyMessages: Message[] = [
  {
    id: 1,
    text: "Hello! How can I assist you today?",
    sender: "bot",
    timestamp: "10:30 AM"
  },
  {
    id: 2,
    text: "Hi there! I have a question about React.",
    sender: "user",
    timestamp: "10:31 AM"
  },
  {
    id: 3,
    text: "Of course! What's your question about React?",
    sender: "bot",
    timestamp: "10:32 AM"
  }
];

const ChatScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Chat Header */}
      <div className="p-4 bg-white border-b border-gray-200 flex-shrink-0">
        <h2 className="text-lg font-semibold text-gray-800">Chat Assistant</h2>
        <p className="text-sm text-gray-500">Online</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {dummyMessages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800'
              }`}
            >
              <p>{message.text}</p>
              <span
                className={`text-xs mt-1 block ${
                  message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}
              >
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-200 flex-shrink-0 sticky bottom-0">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
            disabled
          >
            Send
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          This is a demo chat - messages cannot be sent
        </p>
      </div>
    </div>
  );
};

export default ChatScreen;
