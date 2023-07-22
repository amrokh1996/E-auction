import CountUp, { useCountUp } from 'react-countup';

export default function Counter(probs) {
  return (
      <CountUp className='count' duration={3} end={probs.value} enableScrollSpy />
  );
}