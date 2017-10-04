import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Course Administration</h1>
                <p>Email, wp.pl, gmail.com, o2.pl</p>
                <Link to="about" className="btn btn-primary btn-large">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;