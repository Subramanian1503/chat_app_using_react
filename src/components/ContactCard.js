import { useChatConversations } from "../hooks";
import styles from "../styles/ContactCard.module.css";
import { useState } from "react";

function ContactCard({ contact, handleClose }) {
  const ChatConversationImpl = useChatConversations();

  const handleClick = () => {
    // Call create conversation method with info

    // create the request
    const conversationCreateRequest = {
      id: ChatConversationImpl.chatConversations.length + 1,
      to: [
        {
          name: contact.name,
          profilePic: contact.profilePic,
        },
      ],
      conversationList: [],
    };

    // Call the emthod with the request
    ChatConversationImpl.addConversation(conversationCreateRequest);

    // Close the modal
    handleClose();
  };
  return (
    <div className={styles.contactCardContainer} onClick={handleClick}>
      <div className={styles.contactProfilePic}>
        <img
          src={contact.profilePic}
          alt="profileImage"
          className={styles.contactProfileImage}
        ></img>
      </div>

      {/* contact name */}
      <div className={styles.contactName}>{contact.name}</div>
    </div>
  );
}

export default ContactCard;
