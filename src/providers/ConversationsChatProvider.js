import { createContext } from "react";
import { useChatConversationsProvider } from "../hooks";
import data from "../resources/Conversation-data.json";

// Define the initial state for the chat conversation context
const initialState = {
  selectedChat: 0,
  chatConversations: data.conversations,
  addConversation: () => {},
  setSelectedChatInPreview: () => {},
  addChatToConversation: () => {},
};

// Create context to save the chat conversations
export const ConversationChatContext = createContext(initialState);

// Create a Wrapper which will wrap the child with the value required by the child from the context
export const ChatConversationInfoWrapper = ({ children }) => {
  // Get the required information from the hook
  const chatConversationImpl = useChatConversationsProvider();

  // return the children with informations binded with the provider
  return (
    <ConversationChatContext.Provider value={chatConversationImpl}>
      {children}
    </ConversationChatContext.Provider>
  );
};
