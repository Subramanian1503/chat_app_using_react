import styles from "../styles/ChatExplorer.module.css";
import { useChatConversations } from "../hooks";

function ChatExplorer() {
  // get the conversation information
  const chatConversationsImpl = useChatConversations();

  // console.log("Chat conversation impl", chatConversationsImpl);
  const conversationDatas = chatConversationsImpl.chatConversations;
  const selectedChat = chatConversationsImpl.selectedChat;
  // // get current selected chat conversation
  const selectedConversation = conversationDatas[selectedChat];

  // console.log("Selected conversation", selectedConversation);

  // destructure the object with required variables
  const { profilePic, to } = selectedConversation;
  const toName = to[0];

  return (
    <div className={styles.chatExplorerContainer}>
      {/* chat header */}
      <div className={styles.headerContainer}>
        {/* profile pic container */}
        <div className={styles.profilePicContainer}>
          <ul className={styles.profilePictureList}>
            <li className={styles.profilePictureContent}>
              <img
                src={profilePic}
                alt="profile_img"
                className={styles.profilePic}
              />
            </li>
            <li className={styles.profilePictureContent}>
              <img
                src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
                alt="profile_img"
                className={styles.profilePic}
              />
            </li>
          </ul>
        </div>

        {/* profileNameContainers */}
        <div className={styles.profileNamesContainer}>
          <span className={styles.profileName}>{toName}</span>
        </div>

        {/* add participants */}
        <div className={styles.addParticipantContainer}>Add participants</div>
      </div>

      {/* conversation container */}
      <div className={styles.conversationContainer}>
        <ul className={styles.conversationList}>
          <li className={styles.conversations}>
            {/* incoming message */}
            <div className={styles.receivedChatMessageContainer}>
              {/* received chat message */}
              <div className={styles.receivedMessage}>
                <span className={styles.message}>Hi</span>
              </div>

              <div className={styles.receivedMessage}>
                <span className={styles.message}>Hi</span>
              </div>

              {/* received chat profile image */}
              <div className={styles.receivedChatAvatar}>
                <img
                  src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
                  alt="profile_img"
                  className={styles.received_messg_profilePic}
                />
              </div>
            </div>
          </li>
          <li>
            <div className={styles.outgoingChatMessageContainer}>
              {/* received chat message */}
              <div className={styles.outgoingMessage}>
                <span className={styles.message}>Hi</span>
              </div>

              {/* received chat profile image */}
              <div className={styles.receivedChatAvatar}>
                <img
                  src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
                  alt="profile_img"
                  className={styles.outgoing_messg_profilePic}
                />
              </div>
            </div>
          </li>
          <li className={styles.conversations}>
            {/* incoming message */}
            <div className={styles.receivedChatMessageContainer}>
              {/* received chat message */}
              <div className={styles.receivedMessage}>
                <span className={styles.message}>Hi</span>
              </div>

              <div className={styles.receivedMessage}>
                <span className={styles.message}>Hi</span>
              </div>

              {/* received chat profile image */}
              <div className={styles.receivedChatAvatar}>
                <img
                  src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
                  alt="profile_img"
                  className={styles.received_messg_profilePic}
                />
              </div>
            </div>
          </li>
          <li>
            <div className={styles.outgoingChatMessageContainer}>
              {/* received chat message */}
              <div className={styles.outgoingMessage}>
                <span className={styles.message}>Hi</span>
              </div>

              {/* received chat profile image */}
              <div className={styles.receivedChatAvatar}>
                <img
                  src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
                  alt="profile_img"
                  className={styles.outgoing_messg_profilePic}
                />
              </div>
            </div>
          </li>
          <li className={styles.conversations}>
            {/* incoming message */}
            <div className={styles.receivedChatMessageContainer}>
              {/* received chat message */}
              <div className={styles.receivedMessage}>
                <span className={styles.message}>Hi</span>
              </div>

              <div className={styles.receivedMessage}>
                <span className={styles.message}>Hi</span>
              </div>

              {/* received chat profile image */}
              <div className={styles.receivedChatAvatar}>
                <img
                  src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
                  alt="profile_img"
                  className={styles.received_messg_profilePic}
                />
              </div>
            </div>
          </li>
          <li>
            <div className={styles.outgoingChatMessageContainer}>
              {/* received chat message */}
              <div className={styles.outgoingMessage}>
                <span className={styles.message}>Hi</span>
              </div>

              {/* received chat profile image */}
              <div className={styles.receivedChatAvatar}>
                <img
                  src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"
                  alt="profile_img"
                  className={styles.outgoing_messg_profilePic}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* options container */}
    </div>
  );
}

export default ChatExplorer;
