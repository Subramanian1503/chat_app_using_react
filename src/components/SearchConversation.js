import { useChatConversations } from "../hooks";
import styles from "../styles/SearchConversation.module.css";
import { useState } from "react";

function SearchConversation() {
  const [searchValue, setSearchValue] = useState();
  const chatConversationImpl = useChatConversations();

  const handleSearch = () => {
    chatConversationImpl.searchConversation(searchValue);
  };

  return (
    <div className={styles.searchContactContainer}>
      {/* search input field */}
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.searchInput}
          placeholder="Type here to search"
        />
      </div>

      {/* button to search input fields */}
      <button className={styles.SearchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchConversation;
