import { useEffect, useRef, useState } from "react";
import Quiz from "../components/Quiz/Quiz";
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
  const questionRef = useRef<QuestionModel>();

  function questionResponse(question: QuestionModel) {
    console.log(question);
  }

  function goNextStep() {}

  useEffect(() => {
    questionRef.current = question;
  }, [question]);

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
      <Quiz
        question={question}
        lastQuestion={true}
        questionResponse={questionResponse}
        goNext={goNextStep}
      />
    </>
  );
}
