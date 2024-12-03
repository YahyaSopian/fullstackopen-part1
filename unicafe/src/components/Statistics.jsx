const Statistics = ({ good, neutral, bad, total, average, percentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>percentage {percentage}%</p>
    </div>
  );
};

export default Statistics;
