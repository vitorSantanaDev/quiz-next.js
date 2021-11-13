import { useEffect, useRef, useState } from "react";
import Question from "../components/Question/Question";
import AnswerModel from "../model/answer";
import QuestionModel from "../model/question";

const questionMock = new QuestionModel(1, "Melhor cor ?", [
  AnswerModel.wrong("Verder"),
  AnswerModel.wrong("Black"),
  AnswerModel.wrong("Red"),
  AnswerModel.wrong("Azul"),
  AnswerModel.certain("Azul"),
]);

export default function Home() {
  const [question, setQuestion] = useState(questionMock);
  const questionRef = useRef<QuestionModel>()

  useEffect(() => {
    questionRef.current = question
  }, [question])

  function answerProvided(index: number) {
    setQuestion(question.replyWith(index));
  }

  function timeIsOver() {
    if (!questionRef.current.answered) {
      setQuestion(questionRef.current.replyWith(-1));
    }
  }

  return (
    <>
      <Question
        responseTime={20}
        timeIsOver={timeIsOver}
        answerProvided={answerProvided}
        value={question}
      />
    </>
  );
}
