import React, { useContext } from "react";
import VoteContext from "../store/VoteContext";
import classes from "./MonitorList.module.css";

const MonitorList = () => {
  const { votes, removeVote } = useContext(VoteContext);

  const handleRemoveVote = (id, studentName) => {
    removeVote(id, studentName);
  };

  return (
    <div className={classes["monitor-list"]}>
      <h2>Monitor Voting Results</h2>
      {votes.length === 0 ? (
        <p>No monitors found.</p>
      ) : (
        votes.map((vote) => (
          <div key={vote.monitor} className={classes["monitor-item"]}>
            <h3>{vote.monitor}</h3>
            <p>Total Votes: {vote.count}</p>
            <ul>
              {vote.students.map((student, index) => (
                <li key={index}>
                  {student}
                  <button
                    onClick={() => handleRemoveVote(vote.id, student)}
                    className={classes["delete-button"]}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default MonitorList;
