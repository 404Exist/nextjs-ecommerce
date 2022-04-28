import React, { useState } from 'react'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai'
import { Product } from '../../components'
import { useStateContext } from '../../context/stateContext'
import Image from 'next/image'
import ErrorPage from 'next/error'

const ProductDetails = ({ product, products }) => {
  const theProduct = product.length ? product[0] : {};
  const { images, name, details, price } = theProduct;
  const [index, setIndex] = useState(0);
  const { onAdd, decQty, incQty, qty, setShowCart } = useStateContext()

  const handleBuyNow = () => {
    onAdd(theProduct, qty)
    setShowCart(true)
  }
  
  if (Object.keys(theProduct).length === 0) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <Image src={images[index]} alt={name} className="product-detail-image" width={400} height={400} />
          </div>
          <div className='small-images-container'>
            {images?.map((image, i) => (
              <Image src={image} key={i} alt={name} className={`small-image${i === index ? ' selected-image' : ''}`} onMouseEnter={() => setIndex(i)} width={70} height={70} />
            ))}

          </div>
        </div>
        <div className='product-detail-desc'>
          <h1>{name}</h1>
          <div className='reviews'>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className='price'>${price}</p>
          <div className='quantity'>
            <h3>Quantity:</h3>
            <p className='quantity-desc'>
              <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
              <span className='num'>{qty}</span>
              <span className='plus' onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className='buttons'>
            <button className='add-to-cart' onClick={() => onAdd(theProduct, qty)}>Add to Cart</button>
            <button className='buy-now' onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>
      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {products.map(product => <Product product={product} key={product._id}/>)}
          </div>
        </div> 
      </div>
    </div>
  )
}

// export const getStaticPaths = async () => {
//   let products = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products`);
//   products = await products.json();
//   const paths = products.map(product => {
//     return {params: {slug: product.slug}};
//   })
//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }

export const getServerSideProps = async ({ params: { slug }}) => {
  let products = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products`);
  let product = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products?slug=${slug}`);
  product = await product.json();
  products = await products.json();
  return {
    props: { products, product }
  }
}

export default ProductDetails