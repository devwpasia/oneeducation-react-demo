import Category from './Category'

const Categories = ({categories}) => {

    return (
        <>
            {
                categories.map((category) => <Category key={category.term_id} category={category}/>)
            }
        </>
    )
}

export default Categories