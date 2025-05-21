import { Typewriter } from 'react-simple-typewriter'

export default function TypingIntro() {
  return (
    <h1 className="text-2xl">
      Hi, I'm Alex —{' '}
      <span className="text-blue-500">
        <Typewriter
          words={['developer.', 'problem solver.', 'tech explorer.']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  )
}