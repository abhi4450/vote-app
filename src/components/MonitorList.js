import React, { useContext } from "react";
import VoteContext from "../store/VoteContext";
import classes from "./MonitorList.module.css";

function MonitorList() {
  const { votes, removeVote } = useContext(VoteContext);

  const monitors = votes.reduce((acc, vote, index) => {
    if (!acc[vote.monitorName]) {
      acc[vote.monitorName] = { count: 0, voters: [] };
    }
    acc[vote.monitorName].count++;
    acc[vote.monitorName].voters.push({ name: vote.studentName, index });
    return acc;
  }, {});

  return (
    <div className={classes["monitor-list"]}>
      {Object.keys(monitors).map((monitorName, idx) => (
        <div key={idx} className={classes.monitor}>
          <h3>{monitorName}</h3>
          <p>Votes: {monitors[monitorName].count}</p>
          <ul>
            {monitors[monitorName].voters.map((voter, voterIdx) => (
              <li key={voterIdx}>
                {voter.name}
                <button onClick={() => removeVote(voter.index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MonitorList;
