import Categories from '../components/Categories'

const homepage = ({categories}) => {

  return (
    <>
      <Categories categories={categories} />
    </>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://oneeducation.org.uk/wp-json/lms3api/v1/category`);
  const json = await res.json();

  return {
    props: {
      categories: json.data
    }
  }
}

export default homepage