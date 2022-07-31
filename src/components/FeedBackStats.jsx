import { useContext } from 'react';
import FeedBackContext from '../context/FeedBackContext';

function FeedBackStats() {
  const {feedBacks} = useContext(FeedBackContext)

  let average = feedBacks.reduce((acc, cur) => acc + cur.rating, 0) / feedBacks.length;
  average = average.toFixed(1).replace(/[.,]0$/, '');//toFixed keep one decimal , replace regex find any trailing 0 e.g 9.0 => 9

  return (
    <div className="feedback-stats">
      <h4>{feedBacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedBackStats;