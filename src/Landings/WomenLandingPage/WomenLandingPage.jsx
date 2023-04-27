import ProductFilter from "../../QuickFilterContainer/ProductFilter"

const WomenLandingPage = () => {
  const filtroWomen = {gender: 'Female',
  size: '',
  color: '',
  categorie: ''
}
  return (
    <>
      <h1>WOMEN</h1>
      <ProductFilter customFilter={filtroWomen} />
    </>
  )
}

export default WomenLandingPage