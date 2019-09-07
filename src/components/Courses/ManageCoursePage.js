import React, { useEffect } from "react";
import { connect } from "react-redux";
// import * as courseActions from "../../redux/actions/courseActions";
import { loadCourses } from "../../redux/actions/courseActions";
// import * as authorActions from "../../redux/actions/authorActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

function ManageCoursePage({ loadCourses, loadAuthors }) {



    useEffect(() => {
        loadCourses().catch(error => {
            alert("Loading Courses Failed: " + error);
        });

        loadAuthors().catch(error => {
            alert("Loading Authors Failed: " + error);
        });

        return (
            <>
                <h2>Manage Courses</h2>
            </>
        )
    }, [])

}

ManageCoursePage.propTypes = {
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        courses: state.courses,
        authors: state.authors
    };
}

// const mapDispatchToProps = dispatch => {
//     return { createCourses: course => dispatch(createCourses(course)) }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         actions: {
//             loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
//             loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
//         }
//     }
// }

const mapDispatchToProps = {
    loadCourses,
    loadAuthors
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);