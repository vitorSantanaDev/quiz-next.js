import QuestionModel from "../../model/question";
import Button from "../Button/Button";
import Question from "../Question/Question";
import { QuizWrapper } from "./styles";

interface QuizProps {
  question: QuestionModel;
  lastQuestion: boolean;
  questionResponse: (question: QuestionModel) => void;
  goNext: () => void;
}

const Quiz = (props: QuizProps) => {
  function answerProvided(index: number) {
    if(props.question.answered) {
      props.questionResponse(props.question.replyWith(index))
    }
  }

  return (
    <QuizWrapper>
      {props.question ? (
        <Question
          value={props.question}
          responseTime={6}
          answerProvided={answerProvided}
          timeIsOver={props.goNext}
        />
      ) : (
        false
      )}

      <Button onClick={props.goNext}>
        {props.lastQuestion ? "Finalizar" : "Proxíma"}
      </Button>
    </QuizWrapper>
  );
};

export default Quiz;
