// This component handles the App tempalte used on every page.
import React, {Component, PropTypes} from 'react';
import Header from './common/Header';
console.log(Header);
class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                {/*Let's get busy creating some functionality */}
                <Header/>
                {
                    /* React router will be passing child components as properties onto our App component */
                    this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;