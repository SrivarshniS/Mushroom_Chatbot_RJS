import React, { useState } from "react";
import { fetchGeminiResponse } from "./geminiApi";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  const handleSubmit = async () => {
    const result = await fetchGeminiResponse(input);
    setReply(result);
  };

  return (
    <div className="p-4">
      <h1>Gemini AI Chat</h1>
      <textarea
        rows="4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        className="w-full p-2 border rounded"
      />
      <button onClick={handleSubmit} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
        Send
      </button>
      {reply && (
        <div className="mt-4 p-3 bg-gray-100 border rounded">
          <strong>Gemini:</strong> {reply}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
