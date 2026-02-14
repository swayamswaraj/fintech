"use client";
import { useState } from "react";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{role: string, parts: {text: string}[]}[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);

    // 1. Prepare the new history entry for the UI
    const userMessage = { role: "user", parts: [{ text: message }] };
    
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            history: chatHistory, // Send previous messages
            message: message      // Send current message
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      // 2. Update history with BOTH the user message and the AI response
      const botMessage = { role: "model", parts: [{ text: data.reply }] };
      setChatHistory((prev) => [...prev, userMessage, botMessage]);
      setMessage(""); 
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setChatHistory([]);
    setMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col h-[500px] border rounded shadow">
      {/* Chat Display */}
      <div className="flex-1 overflow-y-auto mb-4 p-2 bg-gray-50 rounded">
        {chatHistory.length === 0 && <p className="text-gray-400">No messages yet...</p>}
        {chatHistory.map((chat, i) => (
          <div key={i} className={`mb-2 p-2 rounded ${chat.role === 'user' ? 'bg-blue-100 text-right' : 'bg-green-100'}`}>
            <strong>{chat.role === 'user' ? 'You' : 'AI'}:</strong> {chat.parts[0].text}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex gap-2">
        <input 
          className="flex-1 border p-2 rounded text-black"
          value={message}
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          disabled={loading}
        />
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          onClick={sendMessage} 
          disabled={loading}
        >
          {loading ? "..." : "Send"}
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={clearChat}
        >
          Clear
        </button>
      </div>
    </div>
  );
}