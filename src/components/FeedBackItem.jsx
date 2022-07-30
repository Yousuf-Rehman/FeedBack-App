import {useState} from 'react'
import {FaTimes} from 'react-icons/fa';
import Card from './shared/Card';

function FeedBackItem({ item, onClickDeleteHandler }) {
  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'>{item.text}</div>
        <button className='close' onClick={() => onClickDeleteHandler(item.id)}>
          <FaTimes color='purple'/>
        </button>
    </Card>
  )
}

export default FeedBackItem