import React, { useState } from "react";
import VoteContext from "./VoteContext";

const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addVote = (vote) => {
    setVotes([...votes, vote]);
    setTotalVotes(totalVotes + 1);
  };

  const removeVote = (index) => {
    const newVotes = [...votes];
    newVotes.splice(index, 1);
    setVotes(newVotes);
    setTotalVotes(totalVotes - 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const contextValue = {
    votes,
    totalVotes,
    addVote,
    removeVote,
    isModalOpen,
    openModal,
    closeModal,
  };

  return (
    <VoteContext.Provider value={contextValue}>{children}</VoteContext.Provider>
  );
};

export default VoteProvider;
