/* CoursesPage, coz we using Page suffix to signify any of our top-level components
 (Container components in Redux term)
*/

import React, {Component, PropTypes} from 'react';
/** to update our CoursePage component to work with Redux 
 * we need to reference the connection function  */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';

/** Container Component*/
class CoursesPage extends Component {
    /** PIECE 1: constructor: 1. initialize state and bind func */
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { title: '' }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    /** PIECE 2: Child Functions: */
    onTitleChange (event)  {
        const {course} = this.state;
        course.title = event.target.value;
        this.setState({
            course
        });
    }

    onClickSave() {
        /** this is the most verbose way to show how it works. Before was like commented out line */
        // this.props.dispatch(courseAction.createCourse(this.state.course));
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    /** PIECE 3: RENDER function: calling child component*/
    render () {
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

/** PIECE 4 :propTypes Validation*/
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

/** PIECE 5: REDUX CONNECT and related functions*/


/** state in parameters represents state within our Redux store
 * Thanks to mapStateToProps function I am able to access courses
 * by this.props.courses up here on this component
 */
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}
/** Manually using dispatch
 * bindActionCreators do below work for us
 *
 * Now we rename course to actions, coz we can handle all acitons
 * that sit in the courseActions file. But for now it's only one.
 * Accessible this.props.actions
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

/** connect is HOC Higher Order Component
 * 2 parameters, each of them is a function. MapDispatchToProps is optional
 * connect returns a function, which is going to 
 * be call with parameter of Component (CoursesPage)
 */

 /**Dispatch is a function that allows you to fire off your action.
  * So I will be able to dispatch different actions that we've defined in our
  action file in courseAction */