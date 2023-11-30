import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "../src/components";
import { ChatConversationInfoWrapper } from "./providers/ConversationsChatProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChatConversationInfoWrapper>
      <App />
    </ChatConversationInfoWrapper>
  </React.StrictMode>
);
