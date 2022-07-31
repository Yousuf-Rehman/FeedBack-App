import {useContext, useState} from 'react'
import {FaEdit, FaTimes} from 'react-icons/fa';
import FeedBackContext from '../context/FeedBackContext';
import Card from './shared/Card';

function FeedBackItem({ item }) {
  const { deleteHandler, editHandler } = useContext(FeedBackContext);

  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'>{item.text}</div>
        <button className='close' onClick={() => deleteHandler(item.id)}>
          <FaTimes color='purple'/>
        </button>
        <button className="edit" onClick={() => editHandler(item)}>
          <FaEdit color='purple'/>
        </button>
    </Card>
  )
}

export default FeedBackItem