import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/Chat.css";

function Chat() {
  return (
    <div className="dashboard">
      <Navbar />

      <div className="main-content">
        <Sidebar />

        <div className="content">
          <div className="chat-container">
            <h1>🤖 AI Assistant</h1>
            <p>Ask questions about your business and analytics.</p>

            <div className="chat-box">
              <div className="message ai">
                👋 Hello! I'm your AI Business Assistant.
              </div>

              <div className="message user">
                Show me this month's sales.
              </div>

              <div className="message ai">
                📈 Your sales increased by 18% compared to last month.
              </div>
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
              />

              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;