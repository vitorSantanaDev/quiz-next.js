import QuestionModel from "../../model/question";
import Statement from "../Statement/Statement";
import { QuestionWrapper } from "./styles";

interface Props {
  value: QuestionModel;
}

export default function Question(props: Props) {
  const question = props.value;

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
        <Statement text={question.untterance}/>
      </QuestionWrapper>
    </div>
  );
}
