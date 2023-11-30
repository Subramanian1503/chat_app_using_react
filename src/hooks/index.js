import { useContext, useState, useEffect } from "react";
import { ConversationChatContext } from "../providers/ConversationsChatProvider";
import data from "../resources/Conversation-data.json";

// Create a use context method which will be invoked to get the context informations stored into it
export const useChatConversations = () => {
  return useContext(ConversationChatContext);
};

// Create a provider hook which will handle all the chat coversations related operations
export const useChatConversationsProvider = () => {
  // Define the state required for this provider
  const [chatCoversations, setChatCoversations] = useState([]);
  const [selectedChat, setSelectedChat] = useState(0);

  // Define the use effect method to load information from the source
  useEffect(() => {
    // Read the required informations from data file
    const getRequiredConversationInformation = data.conversations;

    setChatCoversations(getRequiredConversationInformation);
  }, []);

  // Define the implementations required for this provider
  const addChatConversation = (chatCoversation) => {
    setChatCoversations(chatCoversation, ...chatCoversations);
  };

  // Chang the selector value based on cursor moving
  // Up
  const moveCursorUpOnChat = () => {
    if (selectedChat > 0) {
      setSelectedChat(selectedChat - 1);
    }
  };

  // Down
  const moveCursorDownOnChat = () => {
    if (selectedChat < chatCoversations.length - 1) {
      setSelectedChat(selectedChat + 1);
    }
  };

  return {
    selectedChat: selectedChat,
    chatConversations: chatCoversations,
    addChatConversation: addChatConversation,
    moveCursorUpOnChat: moveCursorUpOnChat,
    moveCursorDownOnChat: moveCursorDownOnChat,
  };
};
