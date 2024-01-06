import React from "react";
import { useParams } from "react-router-dom";

const EditQuiz = () => {
  const { quizName } = useParams();

  return (
    <div>
      <h2>Edit Quiz: {quizName}</h2>
    </div>
  );
};

export default EditQuiz;
