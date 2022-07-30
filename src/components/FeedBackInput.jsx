import {v4 as uuidv4} from 'uuid'
import React, { useState } from 'react'
import RatingSelect from './RatingSelect';
import Card from './shared/Card'

function FeedBackInput({ feedBackAddHandler }) {
  const [text, setText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const [message, setMessage] = useState('');
  const [selectedRating, setSelectedRating] = useState(10);

  const handleTextChange = (e) => {
    if(text === '') {//last text is checked
      setIsDisabled(true);
      setMessage('');
    } else if(text !== '' && text.trim().length < 10) {
      setIsDisabled(true);
      setMessage('Message must have 10 characters');
    } else {
      setIsDisabled(false);
      setMessage('');
    }

    setText(e.target.value);//
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newFeedBack = {
      id: uuidv4(),
      text,
      rating: selectedRating
    }

    feedBackAddHandler(newFeedBack);

    setText('')
    setIsDisabled(true)
  }

  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <h2>How would you like to rate us?</h2>
        <RatingSelect selectRating={(rating) => setSelectedRating(rating)} selected={selectedRating}/>
        <div className='input-group'>
          <input 
            type='text' 
            onChange={handleTextChange}
            placeholder='Write a Reviews'
            value={text}
            />
          <button className='btn btn-secondary' type='submit' disabled={isDisabled}>Send</button>
        </div>

        {message && <div className="message">{message}</div>}
      
      </form>
    </Card>
  )
}

export default FeedBackInput