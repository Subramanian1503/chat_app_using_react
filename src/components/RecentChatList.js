import styles from "../styles/RecentChatList.module.css";
import RecentChatPreviewCard from "../components/RecentChatPreviewCard";

function RecentChatList() {
  return (
    <div className={styles.recentChatListContainer}>
      {/* header for conversation */}
      <div className={styles.recentChatListHeaderContainer}>
        {/* left partition */}
        <div className={styles.recentChatListHeader}>Conversation heading</div>

        {/* right partition */}
        <div className={styles.addChatButtonContainer}>Add</div>
      </div>

      {/* List of recent chat previews */}
      <ul className={styles.recentChatList}>
        <li>
          <RecentChatPreviewCard />
        </li>
        <li>
          <RecentChatPreviewCard />
        </li>
        <li>
          <RecentChatPreviewCard />
        </li>
        <li>
          <RecentChatPreviewCard />
        </li>
        <li>
          <RecentChatPreviewCard />
        </li>
        <li>
          <RecentChatPreviewCard />
        </li>
        <li>
          <RecentChatPreviewCard />
        </li>
        <li>
          <RecentChatPreviewCard />
        </li>
        <li>
          <RecentChatPreviewCard />
        </li>
        <li>
          <RecentChatPreviewCard />
        </li>
        <li>
          <RecentChatPreviewCard />
        </li>
      </ul>
    </div>
  );
}

export default RecentChatList;
