import { useState } from "react";
import axios from "axios";

const Createquiz = () => {
  const [questions, setQuestions] = useState([
    { text: "", answers: ["", "", "", ""], correctAnswerIndex: null },
  ]);

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

  const handleQuestionChange = (index, newText) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].text = newText;
    setQuestions(updatedQuestions);
    console.log(updatedQuestions);
    console.log(index);
  };

  const handleAnswerChange = (answerIndex, newValue) => {
    const updatedQuestions = [...questions];
    updatedQuestions[selectedQuestionIndex].answers[answerIndex] = newValue;
    setQuestions(updatedQuestions);
    console.log(newValue, answerIndex);
  };

  const handleRadioChange = (answerIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[selectedQuestionIndex].correctAnswerIndex = answerIndex;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
   
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { text: "", answers: ["", "", "", ""], correctAnswerIndex: null },
    ]);

    setSelectedQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "https://crudapi.co.uk/api/v1/quiz",
        questions,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer JNOHHns1IVpkHLuWZRxlEZDd-L8n-uh9IuAk0iRIRshJt0LQgQ",
          },
        }
      );

      console.log("Quiz saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving quiz:", error.message);
    }
  };

  return (
    <>
      <div className="createquiz">
        <aside className="settings">
          {questions.map((_, index) => (
            <button key={index} onClick={() => setSelectedQuestionIndex(index)}>
              {index + 1}
            </button>
          ))}
          <button onClick={handleAddQuestion}>+</button>
        </aside>

        <form className="addquiz">
          <input
            type="text"
            placeholder="question"
            value={questions[selectedQuestionIndex].text}
            onChange={(e) =>
              handleQuestionChange(selectedQuestionIndex, e.target.value)
            }
          />

          {questions[selectedQuestionIndex].answers.map(
            (answer, answerIndex) => (
              <div key={answerIndex}>
                <input
                  key={answerIndex}
                  type="text"
                  name=""
                  id=""
                  placeholder={`answer ${answerIndex + 1}`}
                  value={answer}
                  onChange={(e) =>
                    handleAnswerChange(answerIndex, e.target.value)
                  }
                />
                <input
                  type="radio"
                  name="correctAnswer"
                  id={`radio${answerIndex}`}
                  checked={
                    questions[selectedQuestionIndex].correctAnswerIndex ===
                    answerIndex
                  }
                  onChange={() => handleRadioChange(answerIndex)}
                />
                <label htmlFor={`radio${answerIndex}`}>Correct Answer</label>
              </div>
            )
          )}
        </form>
        <button onClick={handleSave}>save quiz</button>
      </div>
    </>
  );
};

export default Createquiz;
