import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addcart, decrement, remove } from '../../Redux/CartReducer'
import { useState } from 'react'
const AddToCart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [count, setCount] = useState(0)
  const respons = useSelector((store) => store.user)

  const removedata = (id) => {
    dispatch(remove(id))
  }

  const increment = (ids) => {
    dispatch(addcart(ids))
  }
  const dec = (id) => {
    dispatch(decrement(id))
  }

  if (respons.length == 0) {
    return (
      <>
        <div className="row mt-5 mx-0 ">
          <div className="col-12 mx-auto text-center">
            <h1>NOT ADD TO CART</h1>
            <button id="back_button" onClick={() => navigate('/allproduct')}>
              BACK TO PAGE
            </button>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="container-fuild" style={{ overflow: 'auto' }}>
        <table className="table border-0">
          <tbody>
            {respons.map((cur, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={cur.images} alt="" width={150} height={150} />
                  </td>
                  <td>{cur.name}</td>
                  <td>MRP : {cur.price}</td>
                  <td>
                    <div className="quantity d-flex w-75 justify-content-between align-items-center shadow">
                      <button
                        className="px-3 fs-3 border-0"
                        onClick={() => dec(cur)}
                      >
                        -
                      </button>
                      <span className="">{cur.quantity}</span>
                      <button
                        className="px-3 fs-3 border-0"
                        onClick={() => increment(cur)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>TOTAL PRICE : {cur.price * cur.quantity}</td>
                  <td>
                    <button id="btn_remove" onClick={() => removedata(index)}>
                      REMOVE
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AddToCart
