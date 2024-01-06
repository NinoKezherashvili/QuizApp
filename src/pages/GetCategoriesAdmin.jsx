import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function GetCategories() {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const handleCategories = async () => {
      try {
        const response = await axios.get("https://crudapi.co.uk/api/v1/quiz", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer tfx85NZV7wrrD2SwG4zFTC0B3ECHDjSzZUszQ0LuYlsoNhKKgw`,
          },
        });

        const quizData = response.data;
        console.log(quizData);

        const categorizedQuizzes = quizData.items.reduce((result, item) => {
          const category = item.category || "Uncategorized";
          const quizName = item.quizName || "Untitled Quiz";

          if (!result[category]) {
            result[category] = [];
          }

          result[category].push(quizName);

          return result;
        }, {});
        console.log(categorizedQuizzes);
        setCategories(categorizedQuizzes);
      } catch (error) {
        console.error("Error fetching tasks:", error.message);
      }
    };

    handleCategories();
  }, []);

  return (
    <div>
      <h2>Categories:</h2>
      <ul>
        {Object.entries(categories).map(([category, quizzes]) => (
          <div key={category}>
            <h2>{category}</h2>
            <div>
              {quizzes.map((quizName) => {
                return (
                  <div key={quizName}>
                    <h2>{quizName}</h2>

                    <Link
                      to={`/editquiz/${encodeURIComponent(quizName)}`}
                      key={quizName}
                    >
                      Edit
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default GetCategories;
