import React from 'react'
import { Switch, Route } from 'react-router-dom'

import BookStoresListContainer from '../../containers/BookStoresListContainer'

const BookStores = () => (
  <div>
    <Switch>
      <Route exact path="/bookstores" component={BookStoresListContainer} />
      <Route path="/bookstores/:bookstoreid" component={BookStoresListContainer} />
    </Switch>
  </div>
)

export default BookStores
