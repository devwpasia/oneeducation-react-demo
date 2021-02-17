import Link from 'next/link'

const Category = ({category}) => {

    return (
        <div className="col-12 col-md-4 py-3">
            <Link href={`/category/${category.term_id}`}>
                <div className="card py-3">
                    <div className="row align-items-center text-center">
                        <div className="col-12"><strong>{category.name}</strong></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Category