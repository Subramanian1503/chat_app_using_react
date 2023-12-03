import styles from "../styles/ChatExplorer.module.css";
import { useChatConversations } from "../hooks";
import { useState } from "react";
import ChatExplorerHeader from "./ChatExplorerHeader";
import ConversationsViewer from "./ConversationsViewer";
import ChatExplorerOptions from "./ChatExplorerOptions";

function ChatExplorer() {
  // get the conversation information
  const chatConversationsImpl = useChatConversations();
  const [messageRequest, setMessageRequest] = useState("");

  // console.log("Chat conversation impl", chatConversationsImpl);
  const conversationDatas = chatConversationsImpl.chatConversations;
  const selectedChat = chatConversationsImpl.selectedChat;

  // get current selected chat conversation
  const selectedConversation = conversationDatas[selectedChat];

  // destructure the object with required variables
  const { to, conversationList } = selectedConversation;

  const handleSendMessageRequest = () => {
    // Get the message request
    // Construct the JSON request with the available data
    const chatRequest = {
      chat: [messageRequest],
      time: "8:57",
      person: {
        name: "me",
        profilePic:
          "https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png",
      },
    };
    // Get the id of the conversation
    const conversationId = selectedConversation.id;
    // Call the method to add the conversation in the conversation list
    chatConversationsImpl.addChatToConversation(chatRequest, conversationId);

    // Set the text box to empty
    setMessageRequest("");
  };

  return (
    <div className={styles.chatExplorerContainer}>
      {/* chat header */}
      <ChatExplorerHeader to={to} />

      {/* Chat conversation viewer */}
      <ConversationsViewer conversationList={conversationList} />

      {/* options container */}
      <ChatExplorerOptions
        setMessageRequest={setMessageRequest}
        messageRequest={messageRequest}
        handleSendMessageRequest={handleSendMessageRequest}
      />
    </div>
  );
}

export default ChatExplorer;
