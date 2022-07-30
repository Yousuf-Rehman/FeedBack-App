import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import FeedBackItem from './FeedBackItem'

function FeedBackList({feedbacks, deleteHandler}) {

  if(!feedbacks || feedbacks.length === 0) {
      return (
        <p>
          No FeedBack yet
        </p>
      )
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {
          feedbacks.map((item) => (
            <motion.div 
              key= {item.id}
              initial= {{opacity : 0}}
              animate= {{opacity : 1}}
              exit = {{opacity : 0}}
              >
                <FeedBackItem key={item.id} item={item} onClickDeleteHandler={(itemId) => deleteHandler(itemId)}/>
            </motion.div>
          )) 
        }
      </AnimatePresence>
    </div>
  )
}

export default FeedBackList