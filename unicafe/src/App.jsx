import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    const updatedTotal = updatedGood + neutral + bad;
    setGood(updatedGood);
    setTotal(updatedTotal);
    setAverage((updatedGood - bad) / updatedTotal);
    setPositivePercentage((updatedGood / updatedTotal) * 100);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    const updatedTotal = good + updatedNeutral + bad;
    setNeutral(updatedNeutral);
    setTotal(updatedTotal);
    setAverage((good - bad) / updatedTotal);
    setPositivePercentage((good / updatedTotal) * 100);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    const updatedTotal = good + neutral + updatedBad;
    setBad(updatedBad);
    setTotal(updatedTotal);
    setAverage((good - updatedBad) / updatedTotal);
    setPositivePercentage((good / updatedTotal) * 100);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text={"good"} />
      <Button handleClick={handleNeutralClick} text={"neutral"} />
      <Button handleClick={handleBadClick} text={"bad"} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} percentage={positivePercentage} />
    </div>
  );
};

export default App;
