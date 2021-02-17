import Courses from '../../components/Courses.js'

const category = ({courses}) => {
    return (
        <div>
            <Courses courses={courses} />
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://oneeducation.org.uk/wp-json/lms3api/v1/course/category/${id}`)
    const json = await res.json()

    return {
        props: {
            courses: json.data
        }
    }
}

export default category