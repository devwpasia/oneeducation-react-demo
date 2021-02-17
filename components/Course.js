import category from "../pages/category/[id]"


const Course = ({course}) => {
    
    return (
        <div className='col-4 align-items-stretch my-3'>
            <div className="card h-100">
                <img src={course.thumbnail_url} alt={course.post_title} className="card-img-top"/>
                <div className="card-body">
                    <h6 className="card-title">{course.post_title}</h6>
                    {
                        course.rating_count && <p><strong>Rating Count: </strong> {course.rating_count}</p>
                    }
                    <p><strong>Price: </strong>
                        {
                            course.sale_price != 0.0 ? <><del>${course.regular_price}</del><span> ${course.sale_price}</span></> : <span>{course.regular_price}</span>
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Course