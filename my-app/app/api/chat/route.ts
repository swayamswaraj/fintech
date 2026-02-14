import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { history, message } = await req.json();
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    
    // Using the current 2026 stable alias
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    // Initialize chat with the history received from frontend
    const chat = model.startChat({
      history: history, // Array of { role: "user" | "model", parts: [{ text: string }] }
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    
    return Response.json({ reply: response.text() });
  } catch (error: any) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}