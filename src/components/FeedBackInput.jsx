import {v4 as uuidv4} from 'uuid'
import React, { useContext, useEffect, useState } from 'react'
import RatingSelect from './RatingSelect';
import Card from './shared/Card'
import FeedBackContext from '../context/FeedBackContext';

function FeedBackInput() {
  const { addHandler, editFeedBack, updateHandler } = useContext(FeedBackContext);

  const [text, setText] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [selectedRating, setSelectedRating] = useState(10);

  useEffect(() => {
    if(editFeedBack.edit === true) {
      setIsBtnDisabled(false);
      setText(editFeedBack.item.text);
      setSelectedRating(editFeedBack.item.rating);
    }
  }, [editFeedBack])

  const handleTextChange = ({ target: { value } }) => {//e.target.value using spread operator
    if(value === '') {//last text is checked
      setIsBtnDisabled(true);
      setMessage('');
    } else if(value !== '' && value.trim().length < 10) {
      setIsBtnDisabled(true);
      setMessage('Message must have 10 characters');
    } else {
      setIsBtnDisabled(false);
      setMessage('');
    }

    setText(value);//
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newFeedBack = {
      text,
      rating: selectedRating
    }

    if(editFeedBack.edit === true) {
      newFeedBack.id = editFeedBack.item.id;
      updateHandler(newFeedBack);
    } else {
      addHandler(newFeedBack);
    }

    setText('')
    setIsBtnDisabled(true)
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
          <button className='btn btn-secondary' type='submit' disabled={isBtnDisabled}>Send</button>
        </div>

        {message && <div className="message">{message}</div>}
      
      </form>
    </Card>
  )
}

export default FeedBackInput