import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Top } from './Top';
import { DailyTop } from './daily/pages/DailyTop';
import { CategoryView } from './daily/pages/CategoryView';
import {DailyDetail} from './daily/pages/DailyDetail';
import { Profile } from './profile/Profile';
import { Contact } from './daily/pages/Contact'

export const App = () => {
  
  return(
    <div className="container">
      <Router>
        <Header />
        <div>
          <Switch>
              <Route exact path='/' component={Top} />
              <Route exact path='/daily' component={DailyTop} />
              <Route exact path='/daily/:id' component={DailyDetail} />
              <Route exact path='/daily/category/:cat' component={CategoryView}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/contact' component={Contact} />
              <Route render={() => <h4>not found...</h4>} />
          </Switch>
        </div>
      </Router>       
    </div>
  )
  
}

