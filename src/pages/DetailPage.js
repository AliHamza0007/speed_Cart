import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProducts } from '../context/useProducts'
import Loader from '../components/Loader';
import { Rating } from 'react-simple-star-rating'

import { FaXmark } from "react-icons/fa6";
import { useCart } from '../context/useCart';
import Layout from '../layout/Layout';

const DetailPage = () => {
  const { addToCart } = useCart();

  const { id } = useParams();
  const [product, setProduct] = useState({})
  const { products } = useProducts();
   const navigate=useNavigate()
useEffect(() => {
  const filteredProduct = products?.find(product => product.id === Number(id));
setProduct(filteredProduct)
}, [id, products]);

  return (
    <Layout>

<div className="container mt-5 position-relative" style={{ backgroundColor: '#0a3943', color: '#fff', padding: '20px' }}>
  <button onClick={() => navigate(-1)} className='btn position-absolute bg-primary' style={{ backgroundColor: '#0a3943' }}>
    <FaXmark />
  </button>

  {product ? (
    <div className="row">
      <div className="col-md-6">
        <img src={product.thumbnail} alt={product.title} className="img-fluid mb-3" />
        <div className="row">
          <div className="col-4">
            <img src={product.images} alt={product.title} className="img-fluid mb-2" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Rating:</strong> {product.rating}</p>
        <p><strong>Availability:</strong> {product.availabilityStatus}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <button
                    onClick={() => addToCart(product)}
                    className="btn btn-primary fontSmall06 font1 "
                  >
                    Add To Cart
                  </button>
        <hr />
        <h4>Reviews:</h4>
        {product?.reviews?.map((review, index) => (
          <div key={index}>
            <p><strong>{review.reviewerName}:</strong> {review.comment}</p>
            <p className='d-flex align-items-center gap-2'>
              <Rating size={25} initialValue={review.rating} />
              <span>{new Date(review.date).toLocaleDateString()}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className='d-flex justify-content-center align-items-center'>
      <Loader />
    </div>
  )}
</div>
    </Layout>


  )
}

export default DetailPage