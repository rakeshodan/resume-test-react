import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (username.trim().length > 0) {
      navigate(`/${username.trim()}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="section_not_found">
      <div className="inner_section_not_found">
        <h1 className="error">404</h1>
        <div className="section_not_found_serch_wrappper">
          <input
            type="text"
            placeholder="Search user name..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
            className="not_found_serach_bar"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
}
