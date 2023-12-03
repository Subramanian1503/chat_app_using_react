import styles from "../styles/ChatExplorer.module.css";

function RecievedMessageTemplate({ conversation }) {
  return (
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
  );
}

export default RecievedMessageTemplate;
