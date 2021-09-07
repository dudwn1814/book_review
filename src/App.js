import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './BookReport/Main';
import Findinfo from './BookReport/Findinfo';
import BookSearch from './BookReport/BookSearch';
import WriteReview from './BookReport/WriteReview';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact>
        <Main />
      </Route>
      <Route path='/find'>
        <Findinfo />
      </Route>
      <Route path='/search'>
        <BookSearch />
      </Route>
      <Route path='/write'>
        <WriteReview />
      </Route>
    </BrowserRouter>
  );
}

export default App;
