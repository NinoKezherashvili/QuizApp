import { useState } from "react";
import axios from "axios";
import styles from "../styles/createquiz.module.css";
import { Link } from "react-router-dom";

const Createquiz = () => {
  const [questions, setQuestions] = useState([
    { text: "", answers: ["", "", "", ""], correctAnswerIndex: null },
  ]);

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

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
      setShowSuccess(true);
    } catch (error) {
      console.error("Error saving quiz:", error.message);
    }
  };

  return (
    <>
      <nav>
        <Link
          to="/welcomeuser"
          className={`${styles.f30} ${styles.f200} ${styles.cBlack}`}
        >
          {" "}
          Quizz
        </Link>
      </nav>

      <div className={styles.createquiz}>
        <aside className={styles.settings}>
          {questions.map((_, index) => (
            <button
              key={index}
              className={styles.qButton}
              onClick={() => setSelectedQuestionIndex(index)}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={handleAddQuestion} className={styles.qButton}>
            +
          </button>
          <button className={styles.btnSaveQuiz} onClick={handleSave}>
            Save
          </button>
          {showSuccess && (
            <div className={styles.successMessage}>
              Quiz saved successfully! 
            </div>
          )}
        </aside>

        <form className={styles.addQuiz}>
          <input
            type="text"
            className={styles.qInput}
            placeholder="question"
            value={questions[selectedQuestionIndex].text}
            onChange={(e) =>
              handleQuestionChange(selectedQuestionIndex, e.target.value)
            }
          />
          <div className={styles.answersInputs}>
            {questions[selectedQuestionIndex].answers.map(
              (answer, answerIndex) => (
                <div key={answerIndex} className={styles.answerFormat}>
                  <input
                    type="radio"
                    name="correctAnswer"
                    className={styles.answerRadio}
                    id={`radio${answerIndex}`}
                    checked={
                      questions[selectedQuestionIndex].correctAnswerIndex ===
                      answerIndex
                    }
                    onChange={() => handleRadioChange(answerIndex)}
                  />
                  <input
                    key={answerIndex}
                    className={styles.aInput}
                    type="text"
                    name=""
                    id=""
                    placeholder={`answer ${answerIndex + 1}`}
                    value={answer}
                    onChange={(e) =>
                      handleAnswerChange(answerIndex, e.target.value)
                    }
                  />

                  <label htmlFor={`radio${answerIndex}`}></label>
                </div>
              )
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Createquiz;
