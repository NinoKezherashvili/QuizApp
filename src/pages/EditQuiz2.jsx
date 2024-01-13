import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/createquiz.module.css";
import { Link, useParams } from "react-router-dom";

const EditQuiz2 = () => {
  const { uuid } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await axios.get(
          `https://crudapi.co.uk/api/v1/quiz/${uuid}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer xqV72-moMK_a_u_QJTHyybjqNfiMlQpZaoyCWPP_St1hs-a3Lw`,
            },
          }
        );

        const quizData = response.data;
        setQuiz(quizData);
      } catch (error) {
        console.error("Error fetching quiz:", error.message);
      }
    };

    handleData();
  }, [uuid]);

  const [showSuccess, setShowSuccess] = useState(false);

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

  const handleQuestionChange = (index, newText) => {
    const updatedQuiz = { ...quiz };
    const updatedQuestions = [...updatedQuiz.quizquestions];
    updatedQuestions[index].question = newText;
    updatedQuiz.quizquestions = updatedQuestions;
    setQuiz(updatedQuiz);
  };

  const handleAnswerChange = (answerIndex, newValue) => {
    const updatedQuiz = { ...quiz };
    const updatedQuestions = [...updatedQuiz.quizquestions];
    console.log(updatedQuestions);
    updatedQuestions[selectedQuestionIndex].answers[answerIndex] = newValue;
    updatedQuiz.quizquestions = updatedQuestions;
    setQuiz(updatedQuiz);
  };

  const handleRadioChange = (answerIndex) => {
    const updatedQuiz = { ...quiz };
    const updatedQuestions = [...updatedQuiz.quizquestions];
    updatedQuestions[selectedQuestionIndex].correctAnswerIndex = answerIndex;
    updatedQuiz.quizquestions = updatedQuestions;
    setQuiz(updatedQuiz);
  };

  const handleEdit = async () => {
    try {
      await axios.put(`https://crudapi.co.uk/api/v1/quiz/${uuid}`, quiz, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer xqV72-moMK_a_u_QJTHyybjqNfiMlQpZaoyCWPP_St1hs-a3Lw`,
        },
      });
      setShowSuccess(true);
      console.log(quiz);
    } catch (error) {
      console.error("Error updating quiz:", error.message);
    }
  };

  return (
    <>
      <nav>
        <Link to="/welcomeuser" className={`${styles.f30} ${styles.f200} `}>
          Quizz
        </Link>
      </nav>

      <div className={styles.createquiz}>
        <aside className={styles.settings}>
          <h2>{quiz && quiz.quizname}</h2>

          {quiz &&
            quiz.quizquestions.map((_, index) => (
              <button
                key={index}
                className={styles.qButton}
                onClick={() => setSelectedQuestionIndex(index)}
              >
                {index + 1}
              </button>
            ))}

          <button className={styles.btnSaveQuiz} onClick={handleEdit}>
            Edit Quiz
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
            placeholder="Choose Question to Edit"
            value={quiz && quiz.quizquestions[selectedQuestionIndex].question}
            onChange={(e) =>
              handleQuestionChange(selectedQuestionIndex, e.target.value)
            }
          />

          <div className={styles.answersInputs}>
            {quiz &&
              quiz.quizquestions[selectedQuestionIndex].answers.map(
                (answer, answerIndex) => (
                  <div key={answerIndex} className={styles.answerFormat}>
                    <input
                      type="radio"
                      name="correctAnswer"
                      className={styles.answerRadio}
                      id={`radio${answerIndex}`}
                      checked={
                        quiz &&
                        quiz.quizquestions[selectedQuestionIndex]
                          .correctAnswerIndex === answerIndex
                      }
                      onChange={() => handleRadioChange(answerIndex)}
                    />
                    <input
                      key={answerIndex}
                      className={`${styles[`Answer${answerIndex + 1}`]} ${
                        styles.aInput
                      }`}
                      type="text"
                      name=""
                      id=""
                      placeholder={`Answer ${answerIndex + 1}`}
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

export default EditQuiz2;
