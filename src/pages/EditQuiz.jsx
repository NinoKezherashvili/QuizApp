import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditQuiz = () => {
  const { uuid } = useParams();
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const handleCategories = async () => {
      try {
        const response = await axios.get(`https://crudapi.co.uk/api/v1/quiz/${uuid}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer tfx85NZV7wrrD2SwG4zFTC0B3ECHDjSzZUszQ0LuYlsoNhKKgw`,
          },
        });

        const quizData = response.data;
        console.log(quizData)

      } catch (error) {
        console.error("Error fetching tasks:", error.message);
      }
    };
  
    handleCategories();
  
  }, []);


  return (
    <div>
      <h2>Edit Quiz: {uuid}</h2>

      <div key={uuid}>
        <p>{quiz}</p>
      </div>
    </div>
  );
};

export default EditQuiz;
