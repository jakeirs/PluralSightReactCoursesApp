/* CoursesPage, coz we using Page suffix to signify any of our top-level components
 (Container components in Redux term)
*/

import React, {Component, PropTypes} from 'react';
/** to update our CoursePage component to work with Redux 
 * we need to reference the connection function  */
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseActions';

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { title: '' }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    onTitleChange (event)  {
        const {course} = this.state;
        course.title = event.target.value;
        this.setState({
            course
        });
    }

    onClickSave() {
        /** this is the most verbose way to show how it works */
        this.props.dispatch(courseAction.createCourse(this.state.course));
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render () {
        debugger;
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                />
                <input 
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                />
            </div>
        );
    }
}

/** Validation */
CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};



/** state in parameters represents state within our Redux store
 * Thanks to mapStateToProps function I am able to access courses
 * by this.props.courses up here on this component
 */
function mapStateToProps(state, ownProps) {
    debugger;
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);

/** connect is HOC Higher Order Component
 * 2 parameters, each of them is a function. MapDispatchToProps i optional
 * connect returns a function, which is going to 
 * be call with parameter of Component CoursesPage
 */

 /**Dispatch i a function that allows you to fire off your action. 
  * So I will be able to dispatch different actions that we've defined in our
  action file in courseAction */