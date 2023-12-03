import styles from "../styles/AddConversation.module.css";
import SelectContacts from "./SelectContact";

function AddConversationModal({ showModal, handleClose }) {
  if (!showModal) {
    return null;
  } else {
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          {/* modal content */}
          <div className={styles.modalContent}>
            {/* modal header */}
            <div className={styles.modalHeader}>
              <h4 className={styles.modalTitle}>Add Conversation</h4>

              <div>
                <span className="closeButton" onClick={handleClose}>
                  x
                </span>
              </div>
            </div>

            <SelectContacts handleClose={handleClose}/>

            {/* modal footer */}
            <div className={styles.modalFooter}>
              <button className="secondary-button" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddConversationModal;
