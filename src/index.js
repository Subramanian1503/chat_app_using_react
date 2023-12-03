import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "../src/components";
import { ChatConversationInfoWrapper } from "./providers/ConversationsChatProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <ChatConversationInfoWrapper>
      <App />
    </ChatConversationInfoWrapper>
  </React.StrictMode>
);
