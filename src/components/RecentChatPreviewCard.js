import styles from "../styles/RecentChatPreviewCard.module.css";

function RecentChatPreviewCard({
  receipentName,
  profilePic,
  lastConversation,
}) {
  return (
    <div className={styles.recentChatPreviewCardContainer}>
      {/* left partition */}
      <div className={styles.leftPartition}>
        {/* profile picture */}
        <div className={styles.profilePictureContainer}>
          <img
            src={profilePic}
            alt="profile_img"
            className={styles.profilePic}
          />
        </div>

        {/* profile name and last message */}
        <div className={styles.profileInfoContainer}>
          {/* profileName */}
          <div className={styles.profileNameContainer}>
            <div className={styles.profileName}>
              {receipentName.length > 1
                ? receipentName.map((name) => name + ",")
                : receipentName[0]}
            </div>
          </div>

          {/* lastMessage */}
          <div className={styles.lastMessageContainer}>
            <div className={styles.lastMessage}>{lastConversation.chat}</div>
          </div>
        </div>
      </div>

      {/* right partition */}
      <div className={styles.rightPartition}>
        <div className={styles.timeContainer}>{lastConversation.time}</div>
      </div>
    </div>
  );
}

export default RecentChatPreviewCard;
