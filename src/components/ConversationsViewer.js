import styles from "../styles/ChatExplorer.module.css";
import OutgoingMessageTemplate from "./OutgoingMessageTemplate";
import RecievedMessageTemplate from "./RecievedMessageTemplate";

function ConversationsViewer({ conversationList }) {
  return (
    <div className={styles.conversationContainer}>
      <ul className={styles.conversationList}>
        {conversationList.map((conversation) => {
          return (
            <li className={styles.conversations}>
              {/* incoming message */}
              {conversation.person.name == "me" ? (
                <OutgoingMessageTemplate conversation={conversation} />
              ) : (
                <RecievedMessageTemplate conversation={conversation} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ConversationsViewer;
