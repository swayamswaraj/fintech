import "./globals.css";
import Providers from "./providers";
import ChatbotIcon from "@/components/Chatbot/ChatbotIcon";

export const metadata = {
  title: "My App",
  description: "Fintech landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <ChatbotIcon />
      </body>
    </html>
  );
}
