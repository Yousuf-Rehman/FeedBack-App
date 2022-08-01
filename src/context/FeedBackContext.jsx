import { createContext, useEffect, useState } from "react";

const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedBacks, setFeedBack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [editFeedBack, setEditFeedBack] = useState({
      item:{},
      edit: false
  })

  useEffect(() => {
    fetchFeedBacks();
  }, []);//empty array [] so that it runs once, when the component renders

  const fetchFeedBacks = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json()
    setFeedBack(data);
    setIsLoading(false);
  }

  const deleteHandler = async (itemId) => {
    if(window.confirm('Are you sure you want to delete it?')) {
      await fetch(`/feedback/${itemId}`, { method: 'DELETE' })
      setFeedBack(feedBacks.filter(item => item.id !== itemId))
    }
  }

  const addHandler = async (newFeedBack) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedBack)
    });

    const data = await response.json();

    setFeedBack([data, ...feedBacks])
  }

  const editHandler = (item) => {
    setEditFeedBack({
      item,
      edit: true
    })
  }

  const updateHandler = async (updatedItem) => {
    const response = await fetch(`/feedback/${updatedItem.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedItem)
    });

    const data = await response.json();

    setFeedBack(feedBacks.map((item) => item.id === updatedItem.id ? data : item))

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
        updateHandler,
        editFeedBack,
        isLoading,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  )
}

export default FeedBackContext;