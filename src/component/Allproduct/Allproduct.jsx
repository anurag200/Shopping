import React, { useState, useEffect, useContext } from 'react'
import './Allproduct.css'
import Spinner from '../../Spinner/Spinner'
import axios from 'axios'
import Card from '../Card/Card'
import { Context } from '../../App'
const Allproduct = () => {
  const [loading, setLoading] = useState(true)
  const [data, setdata] = useState([])
  const [inputvalue, setInputvalue] = useState('')
  const [searchfilter, setsearchfilter] = useState([])
  const [more, setmore] = useState(9)
  const navitem = useContext(Context)

  const apidata = () => {
    axios
      .get('https://mocki.io/v1/c6e271a7-ad0a-49af-aa35-abe4b5c7a4e9')
      .then((i) => {
        // console.log(i.data)
        setdata(i.data)
        setsearchfilter(i.data)

        setLoading(false)
      })
      .catch((arr) => {
        console.log('APi arrors Allproduct', arr)
      })
  }

  const handlsearch = (e) => {
    setInputvalue(e.target.value)
    const filterdata = data.filter((cur, index) => {
      return (
        cur.brand.toLowerCase().includes(e.target.value.toLowerCase()) ||
        cur.category.toLowerCase().includes(e.target.value.toLowerCase()) ||
        cur.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        cur.leafCategory.toLowerCase().includes(e.target.value.toLowerCase()) ||
        cur.manufacturerName
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        cur.subcategory.toLowerCase().includes(e.target.value.toLowerCase())
      )
    })
    setsearchfilter(filterdata)
  }

  const handlscroll = (e) => {
    // console.log('innerHeight', e.target.documentElement.scrollHeight)
    // console.log('win ', window.innerHeight)
    // console.log('scrolltop', e.target.documentElement.scrollTop)
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      setmore((pre) => pre + 9)
    }
  }

  useEffect(() => {
    apidata()
    window.addEventListener('scroll', handlscroll)
  }, [])

  const selectdata = () => {
    if (navitem != 'All Brand') {
      const selectfilterdata = data.filter((cur, index) => {
        return cur.brand.includes(navitem)
      })
      setsearchfilter(selectfilterdata)
    } else {
      // console.log('anurag')
      const selectfilterdata = data.filter((cur, index) => {
        return cur.brand
      })
      setsearchfilter(selectfilterdata)
    }
  }
  useEffect(() => {
    selectdata()
  }, [navitem])

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    )
  }
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row m-0  p-0">
          <div className="col-12 mx-auto p-0">
            <div className="Card">
              <div className="CardInner pt-0">
                <label>Search for your favourite food</label>
                <div className="container py-1">
                  <div className="Icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#657789"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-search py-1"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <div className="InputContainer">
                    <input
                      placeholder="search item...."
                      onChange={handlsearch}
                      value={inputvalue}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0">
          {searchfilter.slice(0, more).map((cur, index) => {
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
      </div>
    </>
  )
}

export default Allproduct
