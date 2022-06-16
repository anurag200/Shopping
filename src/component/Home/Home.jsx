import React, { useEffect } from 'react'
import './Home.css'
import Navbar from '../Navbar'
import axios from 'axios'
import { useState } from 'react'
import Card from '../Card/Card'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../Spinner/Spinner'
const Home = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [data, setdata] = useState([])
  const apidata = () => {
    axios
      .get('https://mocki.io/v1/c6e271a7-ad0a-49af-aa35-abe4b5c7a4e9')
      .then((i) => {
        setdata(i.data)
        setLoading(false)
      })
      .catch((arr) => {
        console.log('APi arrors Home', arr)
      })
  }
  useEffect(() => {
    apidata()
  }, [])

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    )
  }
  return (
    <>
      <div className="w-100">
        <div className="homepage">
          <div className=" hero_page_center">
            <h1>
              ALWAYS <span>GREAT</span> PRODUCTS
            </h1>
            <h2>Search Products online</h2>
            <p>
              FlatDesign is a showcase of some of the best examples of web
              design using the flat UI style/aesthetic.
            </p>
            <button>SEARCH</button>
          </div>
        </div>
        <div className="row m-0 mt-3">
          {data.slice(0, 12).map((cur, index) => {
            return (
              <div
                key={index}
                className="col-md-6 col-lg-4 mx-auto col-sm-6 col-10"
              >
                <Card data={cur} />
              </div>
            )
          })}
        </div>
        <div className="row mx-0">
          <div className="col-12 text-end">
            <button
              className="more_button px-3 fs-5 "
              onClick={() => navigate('/allproduct')}
            >
              MORE...
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
