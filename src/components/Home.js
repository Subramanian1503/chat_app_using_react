import styles from "../styles/Home.module.css";
import RecentChatList from "./RecentChatList";
import SearchChat from "./SearchChat";
import ChatExplorer from "./ChatExplorer";

// This Home is the main page of the application which will contain recentChats, searchContacts and ChatExplorer components

function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* left partition */}
      <div className={styles.leftPartition}>
        {/* search conversation component */}
        <SearchChat />

        {/* recent chat preview */}
        <RecentChatList />
      </div>

      {/* right partition */}
      <div className={styles.rightPartition}>
        {/* Chat explorer */}
        <ChatExplorer />
      </div>
    </div>
  );
}
export default Home;
