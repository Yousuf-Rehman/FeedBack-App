import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';
import FeedBackInput from './components/FeedBackInput';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FeedBackProvider } from './context/FeedBackContext';
import AboutPage from './pages/AboutPage';

let App = () => {

  return (
      <>
        <FeedBackProvider>
          <Header />
          <Router>
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <div className='container'>
                  <FeedBackInput />
                  <FeedBackStats />
                  <FeedBackList />
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
        </FeedBackProvider>
      </>
  );
}

export default App;