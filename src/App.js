import React, { useContext } from "react";
import MonitorList from "./components/MonitorList";
import VoteForm from "./components/VoteForm";
import VoteContext from "./store/VoteContext";

function App() {
  const { isModalOpen, openModal, totalVotes } = useContext(VoteContext);

  return (
    <div className="App">
      <h1>Class Monitor Votes</h1>
      <p>Total Votes: {totalVotes}</p>
      <button onClick={openModal}>Add New Vote</button>
      {isModalOpen && <VoteForm />}
      <MonitorList />
    </div>
  );
}

export default App;
