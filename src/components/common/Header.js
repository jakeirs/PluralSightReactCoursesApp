/* common folder coz it's not specific to a given page.
   Components that are utilized on multiple pages in a folder called common
 */

import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active" >Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active" >Courses</Link>
            {" | "}
            <Link to="/about" activeClassName="active" >About</Link>
        </nav>
    );
};

export default Header;