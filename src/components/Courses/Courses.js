import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class Courses extends React.Component {

    componentDidMount() {
        const { actions } = this.props;

        actions.loadCourses().catch(error => {
            alert("Loading Courses Failed: " + error);
        });

        actions.loadAuthors().catch(error => {
            alert("Loading Authors Failed: " + error);
        })
    }

    render() {
        return (
            <>
                <h2>Courses</h2>
                <CourseList courses={this.props.courses} authors={this.props.authors} />
            </>
        )
    }
}

Courses.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        courses: state.authors.length === 0 ? [] : state.courses.map(course => {
            return {
                ...course,
                authorName: state.authors.find(author => author.id === course.authorId).name
            }
        }),
        authors: state.authors
    };
}

// const mapDispatchToProps = dispatch => {
//     return { createCourses: course => dispatch(createCourses(course)) }
// }

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);