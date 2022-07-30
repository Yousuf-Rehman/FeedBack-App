import {useState} from 'react'
import Header from './components/Header';
import FeedBackData from './data/FeedBackData';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';
import FeedBackInput from './components/FeedBackInput';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';

let App = () => {
  const [feedBacks, setFeedBack] = useState(FeedBackData)
  const deleteHandler = (itemId) => {
    if(window.confirm('Are you surfe you want to delete it?')) {
      setFeedBack(feedBacks.filter(item => item.id !== itemId))
    }
  }

  const addHandler = (newFeedBack) => {
    setFeedBack([newFeedBack, ...feedBacks])
  }

  return (
      <>
        <Header />
        <Router>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <div className='container'>
                <FeedBackInput feedBackAddHandler={(newFeedBack) => addHandler(newFeedBack)}/>
                <FeedBackStats feedBacks={feedBacks} />
                <FeedBackList feedbacks={feedBacks} deleteHandler={(itemId) => deleteHandler(itemId)} />
              </div>
              }>
            </Route>

            <Route
              path='/about'
              element={
                <AboutPage />
              }>
              About Page
            </Route>
          </Routes>  
        </Router>
      </>
  );
}

export default App;