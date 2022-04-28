import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Product = ({ product: { images, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug}`} passHref>
        <a>
          <div className='product-card'>
            <Image src={images[0]} width={250} height={250} alt={name} className='product-image'/>
            <p className='product-name'>{name}</p>
            <p className='product-price'>${price}</p>
          </div>  
        </a>
      </Link>
    </div>
  )
}

export default Product