import React from 'react'
import { Product, FooterBanner, HeroBanner } from "../components"
const Home = ({ products, banner }) => {
  return (
    <>
      <HeroBanner heroBanner={banner} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {
          products.map(product => <Product product={product} key={product._id}/>)
        }
      </div>
      <FooterBanner footerBanner={banner}/>
    </>
  )
}

export const getServerSideProps = async () => {
  let products = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products`);
  let banner = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/banner`);
  products = await products.json();
  banner = await banner.json();
  return {
    props: { products, banner }
  }
}
export default Home