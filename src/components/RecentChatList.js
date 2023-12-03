import styles from "../styles/RecentChatList.module.css";
import RecentChatPreviewCard from "../components/RecentChatPreviewCard";
import { useChatConversations } from "../hooks";
import RecentChatHeader from "./RecentChatHeader";

function RecentChatList() {
  const chatConversationsImpl = useChatConversations();
  const conversationDatas = chatConversationsImpl.chatConversations;
  const selectedChat = chatConversationsImpl.selectedChat;
  return (
    <div className={styles.recentChatListContainer}>
      {/* header for conversation */}
      <RecentChatHeader />

      {/* List of recent chat previews */}
      <ul className={styles.recentChatList}>
        {conversationDatas.map((data, index) => {
          return (
            <li id={conversationDatas.id}>
              <RecentChatPreviewCard
                receipentInfo={data.to}
                lastConversation={
                  data.conversationList.length == 1
                    ? data.conversationList[0]
                    : data.conversationList[data.conversationList.length - 1]
                }
                selected={index === selectedChat}
                index={index}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecentChatList;
