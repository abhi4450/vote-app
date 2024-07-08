import React, { useState, useContext } from "react";
import Modal from "./Modal";
import VoteContext from "../store/VoteContext";
import classes from "./VoteForm.module.css";

function VoteForm() {
  const { addVote, closeModal } = useContext(VoteContext);
  const [studentName, setStudentName] = useState("");
  const [monitorName, setMonitorName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentName && monitorName) {
      addVote({ studentName, monitorName });
      closeModal();
    }
  };

  return (
    <Modal onClose={closeModal}>
      <div className={classes["vote-form"]}>
        <h2>Add Vote</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Student Name:
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </label>
          <label>
            Choose Monitor:
            <select
              value={monitorName}
              onChange={(e) => setMonitorName(e.target.value)}
              required
            >
              <option value="">Select a Monitor</option>
              <option value="Monitor 1">Monitor 1</option>
              <option value="Monitor 2">Monitor 2</option>
              <option value="Monitor 3">Monitor 3</option>
            </select>
          </label>
          <button type="submit">Vote</button>
          <button type="button" onClick={closeModal}>
            Close
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default VoteForm;
