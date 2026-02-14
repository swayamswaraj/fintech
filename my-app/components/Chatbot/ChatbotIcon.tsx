"use client";

import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";

export default function ChatbotIcon() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/chatbot")}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 
                 text-white p-4 rounded-full shadow-lg 
                 cursor-pointer transition-all duration-300 
                 hover:scale-110 z-50"
    >
      <MessageCircle size={28} />
    </div>
  );
}
