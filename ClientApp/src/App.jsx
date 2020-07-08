import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import './custom.scss'

import { Questions } from './pages/Questions'
import { PostQuestion } from './pages/PostQuestion'
import { ShowQuestion } from './pages/ShowQuestion'
import { SearchQuestions } from './pages/SearchQuestions'

import { NavBar } from './components/NavBar'

export function App() {

  const [activeFilter, setActiveFilter] = useState('')

  return (
      <>
        <NavBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <main className="container-fluid p-4">
          <Switch>
            <Route exact path="/">
              <Questions activeFilter={activeFilter} />
            </Route>
            <Route path="/questions/post">
              <PostQuestion activeFilter={activeFilter} />
            </Route>
            <Route path="/questions/:id">
              <ShowQuestion activeFilter={activeFilter} />
            </Route>
            <Route path="/questions/search">
              <SearchQuestions activeFilter={activeFilter} />
            </Route>
          </Switch>
        </main>
      </>
    )
}
