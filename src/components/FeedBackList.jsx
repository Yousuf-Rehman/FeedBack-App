import { useContext, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import FeedBackItem from './FeedBackItem'
import FeedBackContext from '../context/FeedBackContext'
import Spinner from './shared/Spinner'


function FeedBackList() {
  const {feedBacks, isLoading} = useContext(FeedBackContext)

  if(!isLoading && (!feedBacks || feedBacks.length === 0)) {
      return (
        <p>
          No FeedBack yet
        </p>
      )
  }

  return isLoading ? (
    <Spinner />
  ) : (
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