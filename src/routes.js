import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import About from './components/about/AboutPage';
import CoursePage from './components/course/CoursesPage';

export default (
    <Route path="/" component={App}>
        {/* IndexRoute we will load HomePage otherwise if the path is slash about then we will load About */}
        <IndexRoute component={HomePage}/>
        {/*If /about, then App component will end up getting About component */}
        <Route path="courses" component={CoursePage}/>
        <Route path="about" component={About}/>
    </Route>
);
