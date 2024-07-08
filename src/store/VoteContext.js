import React from "react";

const VoteContext = React.createContext({
  votes: [],
  totalVotes: 0,
  addVote: () => {},
  removeVote: () => {},
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export default VoteContext;
