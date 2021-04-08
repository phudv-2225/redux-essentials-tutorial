import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.css';
import { Navbar } from './app/navbar';
import { PostsList } from './features/posts/postsList';
import { AddPostForm } from './features/posts/addPostForm';
import { SinglePostPage } from './features/posts/singlePostPage'
import { EditPostForm } from './features/posts/editPostForm';
import { UsersList } from './features/users/usersList';
import { UserPage } from './features/users/userPage';
import { NotificationsList } from './features/notifications/noticationsList';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/posts"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Route exact path="/notifications" component={NotificationsList} />
          <Redirect to="/posts" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
