import QuestionModel from "../../model/question";
import Statement from "../Statement/Statement";
import { QuestionWrapper } from "./styles";
import Response from "../Response/Response";
import Timer from "../Timer/Timer";
import Button from "../Button/Button";

interface Props {
  value: QuestionModel;
  responseTime?: number;
  answerProvided: (index: number) => void;
  timeIsOver: () => void;
}

const letters = [
  { value: "A", cor: "#F2c866" },
  { value: "B", cor: "#F266BA" },
  { value: "C", cor: "#85D4F2" },
  { value: "D", cor: "#BCE596" },
  { value: "E", cor: "#4ffdef" },
];

export default function Question(props: Props) {
  const question = props.value;

  function renderResponse() {
    return question.answers.map((answerd, index) => {
      return (
        <Response
          key={index}
          value={answerd}
          index={index}
          letter={letters[index].value}
          letterBkackground={letters[index].cor}
          answerProvided={props.answerProvided}
        />
      );
    });
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <QuestionWrapper>
        <Statement text={question.untterance} />
        <Timer
          duration={props.responseTime ? props.responseTime : 10}
          timeIsOver={props.timeIsOver}
        />
        {renderResponse()}
      </QuestionWrapper>
      <Button href="/result">Proxíma pagína</Button>
    </div>
  );
}
