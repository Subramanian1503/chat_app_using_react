import styles from "../styles/ChatExplorer.module.css";
import { useChatConversations } from "../hooks";
import { useState } from "react";

function ChatExplorer() {
  // get the conversation information
  const chatConversationsImpl = useChatConversations();
  const [messageRequest, setMessageRequest] = useState();

  // console.log("Chat conversation impl", chatConversationsImpl);
  const conversationDatas = chatConversationsImpl.chatConversations;
  const selectedChat = chatConversationsImpl.selectedChat;
  // // get current selected chat conversation
  const selectedConversation = conversationDatas[selectedChat];

  // console.log("Selected conversation", selectedConversation);

  // destructure the object with required variables
  const { to, conversationList } = selectedConversation;

  const handleSendMessageRequest = () => {
    // Get the message request
    // Construct the JSON request with the available data
    // Get the id of the conversation
    // Call the method to add the conversation in the conversation list
  };

  return (
    <div className={styles.chatExplorerContainer}>
      {/* chat header */}
      <div className={styles.headerContainer}>
        {/* profile pic container */}
        <div className={styles.profilePicContainer}>
          <ul className={styles.profilePictureList}>
            {to.map((receipient) => (
              <li className={styles.profilePictureContent}>
                <img
                  src={receipient.profilePic}
                  alt="profile_img"
                  className={styles.profilePic}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* profileNameContainers */}
        <div className={styles.profileNamesContainer}>
          <span className={styles.profileName}>
            {to.map((receipient) => receipient.name + ",")}
          </span>
        </div>

        {/* add participants */}
        <div className={styles.addParticipantContainer}>Add participants</div>
      </div>

      {/* conversation container */}
      <div className={styles.conversationContainer}>
        <ul className={styles.conversationList}>
          {conversationList.map((conversation) => {
            return (
              <li className={styles.conversations}>
                {/* incoming message */}
                {conversation.person.name == "me" ? (
                  <div className={styles.outgoingChatMessageContainer}>
                    {/* outgoing chat message */}
                    {conversation.chat.map((chatInfo) => {
                      return (
                        <div className={styles.receivedMessage}>
                          <span className={styles.message}>{chatInfo}</span>
                        </div>
                      );
                    })}

                    {/* outgoing chat profile image */}
                    <div className={styles.chatInfoContainer}>
                      <div className={styles.outgoingMessageChatAvatar}>
                        <img
                          src={conversation.person.profilePic}
                          alt="profile_img"
                          className={styles.outgoing_messg_profilePic}
                        />
                      </div>

                      <div className="chat_time">
                        <span>{conversation.time}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={styles.receivedChatMessageContainer}>
                    {/* received chat message */}
                    {conversation.chat.map((chatInfo) => {
                      return (
                        <div className={styles.receivedMessage}>
                          <span className={styles.message}>{chatInfo}</span>
                        </div>
                      );
                    })}

                    <div className={styles.chatInfoContainer}>
                      {/* received chat profile image */}
                      <div className={styles.receivedChatAvatar}>
                        <img
                          src={conversation.person.profilePic}
                          alt="profile_img"
                          className={styles.received_messg_profilePic}
                        />
                      </div>

                      <div className="chat_time">
                        <span>{conversation.time}</span>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* options container */}
      <div className={styles.optionsContainer}>
        {/* attach option */}
        <div className={styles.attchmentContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2356/2356589.png"
            alt="attach_img"
            className={styles.attchImage}
          ></img>
        </div>

        {/* message text */}
        <div className={styles.messageInputContainer}>
          <input
            type="text"
            placeholder="Type your message here"
            value={messageRequest}
            onChange={(event) => {
              setMessageRequest(event.target.value);
            }}
          ></input>
          {/* send button */}
          <div
            className={styles.sendMessageContainer}
            onClick={handleSendMessageRequest}
          >
            <img
              className={styles.sendMessageButton}
              src="https://cdn-icons-png.flaticon.com/128/3682/3682321.png"
              alt="send_message_button"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatExplorer;
