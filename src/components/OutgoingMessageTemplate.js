import styles from "../styles/ChatExplorer.module.css";

function OutgoingMessageTemplate({ conversation }) {
  return (
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
  );
}

export default OutgoingMessageTemplate;
