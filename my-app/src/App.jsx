import React, { Suspense } from 'react';
import "./App.css"
const ProductCard = React.lazy(() => import("./Component/ProductCard"))
const Navbar = React.lazy(() => import("./Component/Navbar"))
const Card = React.lazy(() => import("./Component/Card"))
const Darkmode = React.lazy(()=> import("./Component/darkmode"))
const Deshbord1 = React.lazy(()=> import("./Component/dashbord1"))
const Review = React.lazy(()=> import("./Component/bgcard"))
const Formvalid = React.lazy(()=> import("./Component/Form"))

const App = () => {

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Navbar/>
      <ProductCard/>
      <Card/>
      <Darkmode/>
      <Review/>
      <Deshbord1/>
      <Formvalid/>
    </Suspense>
  )
}

export default App
