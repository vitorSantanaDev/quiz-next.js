import { SpanElement, StatementWrapper } from "./styles"

interface StatementProps {
  text: string
}

export default function Statement(props: StatementProps) {
  return (
    <StatementWrapper>
      <SpanElement>{props.text}</SpanElement>
    </StatementWrapper>
  )
}