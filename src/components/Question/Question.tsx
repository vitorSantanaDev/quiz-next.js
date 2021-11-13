import QuestionModel from "../../model/question";
import Statement from "../Statement/Statement";
import { QuestionWrapper } from "./styles";
import Response from "../Response/Response";

interface Props {
  value: QuestionModel;
  answerProvided: (index: number) => void ;
}

const letters = [
  {value: "A", cor: "#F2c866"},
  {value: "B", cor: "#F266BA"},
  {value: "C", cor: "#85D4F2"},
  {value: "D", cor: "#BCE596"},
  {value: "E", cor: "#4ffdef"},
]

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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <QuestionWrapper>
        <Statement text={question.untterance} />
        {renderResponse()}
      </QuestionWrapper>
    </div>
  );
}
