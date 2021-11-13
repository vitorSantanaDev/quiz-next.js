import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { TimerWrapper } from "./styles";

interface TimerProps {
  duration: number;
  timeIsOver: () => void;
}

export default function Timer(props: TimerProps) {
  return (
    <TimerWrapper>
      <CountdownCircleTimer
        size={120}
        duration={props.duration}
        isPlaying
        onComplete={props.timeIsOver}
        colors={[
          ["#BCE596", 0.33],
          ["#F7B801", 0.33],
          ["#ED827A", 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </TimerWrapper>
  );
}
