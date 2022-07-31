import { useContext, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import FeedBackItem from './FeedBackItem'
import FeedBackContext from '../context/FeedBackContext'


function FeedBackList() {
  const {feedBacks} = useContext(FeedBackContext)

  if(!feedBacks || feedBacks.length === 0) {
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
          feedBacks.map((item) => (
            <motion.div 
              key= {item.id}
              initial= {{opacity : 0}}
              animate= {{opacity : 1}}
              exit = {{opacity : 0}}
              >
                <FeedBackItem key={item.id} item={item}/>
            </motion.div>
          )) 
        }
      </AnimatePresence>
    </div>
  )
}

export default FeedBackList