import React, { useReducer, useState } from "react";
import VoteContext from "./VoteContext";

const defaultVoteState = {
  votes: [],

  totalVotes: 0,
};

const VoteProvider = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const voteReducer = (state, action) => {
    if (action.type === "ADD") {
      let updatedVotes;

      const updatedTotalVotes = state.totalVotes + 1;
      const existingVoteIndex = state.votes.findIndex(
        (vote) => vote.id === action.payload.id
      );
      const existingVote = state.votes[existingVoteIndex];
      if (existingVote) {
        const updatedStudents = existingVote.students.concat(
          action.payload.student
        );

        const updatedVote = {
          ...existingVote,
          count: existingVote.count + 1,
          students: updatedStudents,
        };
        console.log("updatedVote:", updatedVote);
        updatedVotes = [...state.votes];
        updatedVotes[existingVoteIndex] = updatedVote;
      } else {
        updatedVotes = state.votes.concat({
          ...action.payload,
          students: [action.payload.student],
        });
      }
      return {
        votes: updatedVotes,

        totalVotes: updatedTotalVotes,
      };
    }
    if (action.type === "REMOVE") {
      let updatedVotes;
      let updatedTotalVotes = state.totalVotes - 1;
      let existingVoteIndex = state.votes.findIndex(
        (vote) => vote.id === action.payload.id
      );
      let existingVote = state.votes[existingVoteIndex];
      if (existingVote.count === 1) {
        let updatedStudents = existingVote.students.filter(
          (student) => student !== action.payload.student
        );
        let updatedVote = {
          ...existingVote,
          count: existingVote.count - 1,
          students: updatedStudents,
        };
        updatedVotes = [...state.votes];
        updatedVotes[existingVoteIndex] = updatedVote;
      } else {
        let updatedStudents = existingVote.students.filter(
          (student) => student !== action.payload.student
        );
        existingVote = {
          ...existingVote,
          count: existingVote.count - 1,
          students: updatedStudents,
        };
        updatedVotes = [...state.votes];
        updatedVotes[existingVoteIndex] = existingVote;
      }
      return {
        votes: updatedVotes,
        totalVotes: updatedTotalVotes,
      };
    }
    return defaultVoteState;
  };

  const [voteState, dispatchVoteAction] = useReducer(
    voteReducer,
    defaultVoteState
  );

  const addVoteToMonitor = (vote) => {
    dispatchVoteAction({ type: "ADD", payload: vote });
  };
  const removeVoteFromMonitor = (id, student) => {
    dispatchVoteAction({
      type: "REMOVE",
      payload: { id: id, student: student },
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const contextValue = {
    votes: voteState.votes,
    totalVotes: voteState.totalVotes,
    addVote: addVoteToMonitor,
    removeVote: removeVoteFromMonitor,

    isModalOpen,
    openModal,
    closeModal,
  };

  return (
    <VoteContext.Provider value={contextValue}>
      {props.children}
    </VoteContext.Provider>
  );
};

export default VoteProvider;
