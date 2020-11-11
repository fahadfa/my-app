import React, { useState } from "react";
function SearchBar() {
  const [userName, setUsername] = useState("");
  const fixedURL = "https://qa.jazeerapaints.com/en/search?query=";
  const [mySearch, setUrl] = useState(fixedURL);
  const handleUserNameInput = (e) => {
    setUsername(e.target.value);
    setUrl(fixedURL + e.target.value);
  };
  const onEnter = (e) => {
    if (e.key === "Enter") {
      setNewUrl();
    }
  };
  const setNewUrl = (e) => {
    window.open(mySearch, "_blank");
    setUsername("");
    setUrl();
  };
  return (
    <div>
      <h3>This is a Functional Component</h3>
      <input
        type="text"
        onKeyPress={onEnter}
        onChange={handleUserNameInput}
        value={userName}
        placeholder="Your Username"
      />
      <button onClick={setNewUrl}>clickhere</button>
    </div>
  );
}
export default SearchBar;
