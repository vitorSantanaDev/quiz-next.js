import QuestionModel from "../../model/question";
import Statement from "../Statement/Statement";
import { QuestionWrapper } from "./styles";
import Response from "../Response/Response";

interface Props {
  value: QuestionModel;
}

export default function Question(props: Props) {
  const question = props.value;

  function renderResponse() {
    return question.answers.map((answerd, index) => {
      return (
        <Response
          key={index}
          value={answerd}
          index={index}
          letter="A"
          letterBkackground="#F2c866"
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
