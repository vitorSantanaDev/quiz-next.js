import AnswerModel from "../../model/answer";
import {
  BackContent,
  ContentWrapper,
  FrontContent,
  ResponseWrapper,
} from "./styles";

interface ResponseProps {
  value: AnswerModel;
  index: number;
  letter: string;
  letterBkackground: string;
  answerProvided: (index: number) => void;
}

export default function Response(props: ResponseProps) {
  const response = props.value;
  return (
    <ResponseWrapper onClick={() => props.answerProvided(props.index)}>
      <ContentWrapper>
        {!response.revealed ? (
          <FrontContent>
            <div
              className="letter"
              style={{ backgroundColor: props.letterBkackground }}
            >
              {props.letter}
            </div>
            <div className="value">{response.value}</div>
          </FrontContent>
        ) : (
          <BackContent>
            {response.certain ? (
              <div className="certain">
                <div>A resposta correta é...</div>
                <div className="value">{response.value}</div>
              </div>
            ) : (
              <div className="wrong">
                <div>A resposta informada está incorreta...</div>
                <div className="value">{response.value}</div>
              </div>
            )}
          </BackContent>
        )}
      </ContentWrapper>
    </ResponseWrapper>
  );
}
