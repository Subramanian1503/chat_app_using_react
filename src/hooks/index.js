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
  const [chatConversations, setChatConversations] = useState(
    data.conversations
  );
  const [selectedChat, setSelectedChat] = useState(0);

  // Define the implementations required for this provider
  const addConversation = (chatCoversationRequest) => {
    let isAlreadyExistingConversation = false;
    let selectedChatForProcessing = selectedChat;

    // Find if the chat conversation with requested name already exists

    console.log(chatCoversationRequest);
    chatConversations.map((chatConversation, index) => {
      if (
        chatConversation.to.length === 1 &&
        chatConversation.to[0].name === chatCoversationRequest.to[0].name
      ) {
        console.log(chatConversation.to[0].name);
        console.log(chatCoversationRequest.to[0].name);
        isAlreadyExistingConversation = true;
        selectedChatForProcessing = index;
      }
    });

    console.log(isAlreadyExistingConversation);
    console.log(selectedChatForProcessing);

    if (!isAlreadyExistingConversation) {
      selectedChatForProcessing = 0;
      const newConversations = [chatCoversationRequest, ...chatConversations];
      // Check if converation with user name already exists
      setChatConversations(newConversations);
    }

    setSelectedChat(selectedChatForProcessing);
  };

  // This method is used to search the conversation with the name
  const searchConversation = (name) => {
    // Iterate the chat conversations
    const exisitingConversationIndex = chatConversations.findIndex(
      (conversation) => conversation.to[0].name === name
    );

    if (exisitingConversationIndex == -1) {
      console.log("no users found with given name");
    }

    //If index present set that as selected contact
    setSelectedChat(exisitingConversationIndex);
  };

  // This method is used to add a chat to the conversation requested
  const addChatToConversation = (chatRequest, conversationId) => {
    // Iterate the conversation
    // Find the conversation with requested Id
    const updatedChatConversation = chatConversations.map(
      (chatConversation) => {
        if (chatConversation.id === conversationId) {
          // Add the chat to that conversation
          chatConversation.conversationList = [
            ...chatConversation.conversationList,
            chatRequest,
          ];
        }
        return chatConversation;
      }
    );
    // Set it to the state
    setChatConversations(updatedChatConversation);
  };

  const setSelectedChatInPreview = (index) => {
    if (index >= 0 && index < chatConversations.length) {
      setSelectedChat(index);
    }
  };

  return {
    selectedChat: selectedChat,
    chatConversations: chatConversations,
    addConversation: addConversation,
    setSelectedChatInPreview: setSelectedChatInPreview,
    addChatToConversation: addChatToConversation,
    searchConversation: searchConversation,
  };
};
