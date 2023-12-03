import styles from "../styles/ChatExplorer.module.css";

function ChatExplorerOptions({
  messageRequest,
  setMessageRequest,
  handleSendMessageRequest,
}) {
  return (
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
  );
}

export default ChatExplorerOptions;
