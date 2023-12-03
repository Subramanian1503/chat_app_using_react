import styles from "../styles/RecentChatList.module.css";
import { useState } from "react";
import Modal from "react-overlays/Modal";
import AddConversationModal from "./AddConversationModal";
import data from "../resources/Conversation-data.json";

function RecentChatHeader() {
  const [showModal, setShowModal] = useState(false);

  const handleAddConversation = () => {
    // Should open a popup which will show all the contacts
    setShowModal(true);
    // on selecting the contact should check if the conversation is already there with the contact
  };

  const handleClose = () => {
    console.log("Close modal");
    setShowModal(false);
    // console.log(showModal);
  };

  const handleSuccess = () => {
    console.log("success");
  };

  const renderBackdrop = (props) => (
    <div className={styles.backdrop} {...props} />
  );

  return (
    <div className={styles.recentChatListHeaderContainer}>
      {/* left partition */}
      <div className={styles.recentChatListHeaderContent}>
        <span className={styles.conversationHeader}>Conversation</span>
      </div>

      {/* right partition */}
      <div
        className={styles.addChatButtonContainer}
        onClick={handleAddConversation}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/148/148764.png"
          alt="add_participant"
          className={styles.addParticipant}
        />
      </div>
      <AddConversationModal showModal={showModal} handleClose={handleClose} />
    </div>
  );
}

export default RecentChatHeader;
