import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function GetCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const handleCategories = async () => {
      try {
        const response = await axios.get("https://crudapi.co.uk/api/v1/quiz", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer tfx85NZV7wrrD2SwG4zFTC0B3ECHDjSzZUszQ0LuYlsoNhKKgw`,
          },
        });

        const quizData = response.data.items;

        const groupedQuizzes = quizData.reduce((acc, quiz) => {
          const category = quiz.category;

          if (!acc[category]) {
            acc[category] = [];
          }
          const { _created, _data_type, _is_deleted, _modified, _self_link, _user, category: quizCategory, ...quizInfo } = quiz;
          acc[category].push(quizInfo);

          return acc;
        }, {});

        setCategories(groupedQuizzes);
        console.log(groupedQuizzes)

      } catch (error) {
        console.error("Error fetching tasks:", error.message);
      }
    };
    handleCategories();
  }, []);

  return (
    <div>
      {Object.entries(categories).map(([category, quizzes]) => (
        <div key={category}>
          <h2>{category}</h2>
          {quizzes.map((quiz) => (
            <div key={quiz._uuid}>
              <Link
                to={`/editquiz/${encodeURIComponent(quiz._uuid)}`}
              >
                {Object.keys(quiz)[0]}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GetCategories;
