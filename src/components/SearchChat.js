import styles from "../styles/SearchChat.module.css";
import SearchConversation from "../components/SearchConversation";

function SearchChat() {
  return (
    <div className={styles.searchChatContainer}>
      <SearchConversation />
    </div>
  );
}

export default SearchChat;
