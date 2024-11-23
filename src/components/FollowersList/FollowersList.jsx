import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FollowersList.css";

export default function FollowersList() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=5");

    setFollowers(data.results);
  };

  return (
    <div className="followerslist-container" data-testid="parent-container">
      <div>
        {followers?.map((follower, i) => (
          <div
            className="follower-item"
            key={follower.email}
            data-testid={`follower-item-${i}`}
          >
            <img src={follower.picture.large} />
            <div className="followers-details">
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
