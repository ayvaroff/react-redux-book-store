import React from 'react'
import { Switch, Route } from 'react-router-dom'

import BooksListContainer from '../../containers/BooksListContainer'
import BooksAddContainer from '../../containers/BooksAddContainer'
import BooksDetailsContainer from '../../containers/BookDetailsContainer'

const Books = () => (
  <div>
    <Switch>
      <Route exact path="/books" component={BooksListContainer} />
      <Route exact path="/books/add" component={BooksAddContainer} />
      <Route path="/books/:bookid" component={BooksDetailsContainer} />
    </Switch>
  </div>
)

export default Books
