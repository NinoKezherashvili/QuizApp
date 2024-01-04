import axios from "axios";
import React, { useEffect, useState } from "react";

function GetCategories() {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const handleCategories = async () => {
      try {
        const response = await axios.get("https://crudapi.co.uk/api/v1/quiz", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 7cLK5cEEhDUdcQJsEoTZNdqQ6t-9ZlcHWLkjPICBAkqbHcKezw`,
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

          console.log(category);
          console.log(quizName);
          console.log(result);

          return result;
        }, {});
        console.log(categories);
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
            <div className="dFlex">
            {quizzes.map((quiz) => {
              return <div key={quiz}> quiz</div>;
            })}
            </div>
           
          </div>
        ))}
      </ul>
    </div>
  );
}

export default GetCategories;
