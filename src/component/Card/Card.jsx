import React, { useState } from 'react'
import { addcart } from '../../Redux/CartReducer'
import { useDispatch } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import './Card.css'
const Card = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data } = props

  const [more, setmore] = useState(40)

  const moreText = () => {
    setmore(data.name.lenght)
  }

  const AddToCart = (carddata) => {
    dispatch(addcart(carddata))
  }
  const buyproduct = (data) => {
    dispatch(addcart(data))
    navigate('/addtocart')
  }
  return (
    <>
      <div className="card mb-3 border-1">
        <div className="row g-0 ">
          <div className="col-md-4 image">
            <img
              src={data.images}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {data.name.slice(0, more)}
                {more >= 40 ? (
                  <span onClick={moreText} style={{ cursor: 'pointer' }}>
                    ...
                  </span>
                ) : null}
              </h5>
              <p className="card-text">
                Price : <span>{data.price}</span>
              </p>
            </div>
            <div className="card_button mb-2 w-100 d-flex justify-content-between px-3">
              <button
                className="px-lg-1 add_to_cart  px-xl-3 px-3 py-1  fs "
                onClick={() => AddToCart(data)}
              >
                ADD TO CART
              </button>
              <button
                className="px-lg-2 Buy px-xl-3 px-3 py-1"
                onClick={() => buyproduct(data)}
              >
                BUY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
