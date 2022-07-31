import { createContext, useState } from "react";
import FeedbackData from "../data/FeedBackData";

const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedBacks, setFeedBack] = useState(FeedbackData);
  const [editFeedBack, setEditFeedBack] = useState({
      item:{},
      edit: false
  })

  const deleteHandler = (itemId) => {
    if(window.confirm('Are you surfe you want to delete it?')) {
      setFeedBack(feedBacks.filter(item => item.id !== itemId))
    }
  }

  const addHandler = (newFeedBack) => {
    setFeedBack([newFeedBack, ...feedBacks])
  }

  const editHandler = (item) => {
    setEditFeedBack({
      item,
      edit: true
    })
  }

  const updateHandler = (updatedItem) => {
    setFeedBack(feedBacks.map((item) => item.id === updatedItem.id ? updatedItem : item))

    setEditFeedBack({
      item: {},
      edit: false,
    });
  }

  return (
    <FeedBackContext.Provider 
      value={{
        feedBacks,
        deleteHandler,
        addHandler,
        editHandler,
        editFeedBack,
        updateHandler,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  )
}

export default FeedBackContext;