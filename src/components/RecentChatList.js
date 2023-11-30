import styles from "../styles/RecentChatList.module.css";
import RecentChatPreviewCard from "../components/RecentChatPreviewCard";
import { useChatConversations } from "../hooks";

function RecentChatList() {
  const chatConversationsImpl = useChatConversations();
  const conversationDatas = chatConversationsImpl.chatConversations;

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
        {conversationDatas.map((data) => {
          return (
            <>
              <li>
                <RecentChatPreviewCard
                  receipentName={data.to}
                  profilePic={data.profilePic}
                  lastConversation={data.conversation[0]}
                />
              </li>
              <li>
                <RecentChatPreviewCard
                  receipentName={data.to}
                  profilePic={data.profilePic}
                  lastConversation={data.conversation[0]}
                />
              </li>
              <li>
                <RecentChatPreviewCard
                  receipentName={data.to}
                  profilePic={data.profilePic}
                  lastConversation={data.conversation[0]}
                />
              </li>
              <li>
                <RecentChatPreviewCard
                  receipentName={data.to}
                  profilePic={data.profilePic}
                  lastConversation={data.conversation[0]}
                />
              </li>
              <li>
                <RecentChatPreviewCard
                  receipentName={data.to}
                  profilePic={data.profilePic}
                  lastConversation={data.conversation[0]}
                />
              </li>
              <li>
                <RecentChatPreviewCard
                  receipentName={data.to}
                  profilePic={data.profilePic}
                  lastConversation={data.conversation[0]}
                />
              </li>
              <li>
                <RecentChatPreviewCard
                  receipentName={data.to}
                  profilePic={data.profilePic}
                  lastConversation={data.conversation[0]}
                />
              </li>
              <li>
                <RecentChatPreviewCard
                  receipentName={data.to}
                  profilePic={data.profilePic}
                  lastConversation={data.conversation[0]}
                />
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default RecentChatList;
