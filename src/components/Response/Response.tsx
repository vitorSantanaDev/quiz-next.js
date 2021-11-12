import AnswerModel from "../../model/answer";
import { BackContent, ContentWrapper, FrontContent, ResponseWrapper } from "./styles";

interface ResponseProps {
  value: AnswerModel;
  index: number;
  letter: string;
  corLetter: string;
}

export default function Response(props: ResponseProps) {
  const response = props.value
  return (
    <ResponseWrapper>
      <ContentWrapper>
        <FrontContent>
          <div className="letter">{props.letter}</div>
          <div className="value">{response.value}</div>
        </FrontContent>
        <BackContent>
        </BackContent>
      </ContentWrapper>
    </ResponseWrapper>
  );
}
