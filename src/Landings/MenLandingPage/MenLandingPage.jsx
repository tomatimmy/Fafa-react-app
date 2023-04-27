import ProductFilter from "../../QuickFilterContainer/ProductFilter"

const MenLandingPage = () => {
  const filtroMen = {gender: 'Male',
  size: '',
  color: '',
  categorie: ''
}
  return (
    <>
      <h1>MEN</h1>
      <ProductFilter customFilter={filtroMen} />
    </>
  )
}

export default MenLandingPage