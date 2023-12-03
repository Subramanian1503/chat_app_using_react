import styles from "../styles/ChatExplorer.module.css";

function ChatExplorerHeader({ to }) {
  return (
    <div className={styles.headerContainer}>
      {/* profile pic container */}
      <div className={styles.profilePicContainer}>
        <ul className={styles.profilePictureList}>
          {to.map((receipient) => (
            <li className={styles.profilePictureContent}>
              <img
                src={receipient.profilePic}
                alt="profile_img"
                className={styles.profilePic}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* profileNameContainers */}
      <div className={styles.profileNamesContainer}>
        <span className={styles.profileName}>
          {to.map((receipient) => receipient.name + ",")}
        </span>
      </div>

      {/* add participants */}
      <div className={styles.addParticipantContainer}>Add participants</div>
    </div>
  );
}

export default ChatExplorerHeader;
