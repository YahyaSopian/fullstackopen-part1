import { useState } from "react";
import Subtitle from "./components/Subtitle";
import Button from "./components/Button";
import Display from "./components/Display";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <Subtitle title="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Subtitle title="statistics" />
      <Display text={"good"} count={good} />
      <Display text={"neutral"} count={neutral} />
      <Display text={"bad"} count={bad} />
    </div>
  );
};

export default App;
