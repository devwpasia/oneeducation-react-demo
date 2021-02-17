import Course from './Course'

const Courses = ({courses}) => {

    return (
        <div className="row">
            {
                courses.map((course) => <Course course={course} />)
            }
        </div>
    )
}

export default Courses