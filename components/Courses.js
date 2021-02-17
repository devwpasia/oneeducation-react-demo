import Course from './Course'

const Courses = ({courses}) => {

    return (
        <div className="row">
            {
                courses.map((course) => <Course key={course.id} course={course} />)
            }
        </div>
    )
}

export default Courses