import React from 'react'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    padding: '0 4px',
  },
}))

const Navbar = (props) => {
  const respons = useSelector((store) => store.user)
  const locations = useLocation()
  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const dropdownitem = [
    'All Brand',
    'OlaCandy',
    'Rica',
    'Matrix',
    'Ikonic',
    'BioSoft',
    'IBD',
    'Waxxo',
    'Casmara',
    'Cheryl',
    'Loreal',
    'Keratherapy',
  ]

  return (
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <a className="navbar-brand " to="/">
            SHOPPING
          </a>

          <ul
            className=" ms-sm-auto ms-0 px-0 d-flex  justify-content-end navbar-ul  mb-2 mb-lg-0"
            style={{ listStyle: 'none' }}
          >
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            {/*  */}
            {locations.pathname == '/allproduct' ? (
              <>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select brand
                  </a>
                  <ul
                    className="dropdown-menu text-center"
                    // aria-labelledby="navbarDropdown"
                    style={{ backgroundColor: 'black' }}
                  >
                    {dropdownitem.map((cur, index) => {
                      return (
                        <li key={index}>
                          <NavLink
                            className="dropdown-item "
                            id="style_a"
                            to="/allproduct"
                            onClick={() => props.navbarItemFun(cur)}
                          >
                            {cur}
                          </NavLink>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              </>
            ) : null}

            {/*  */}
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/allproduct"
              >
                All product
              </NavLink>
            </li>
          </ul>
          <NavLink to={'/addtocart'}>
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={respons.length > 0 ? respons.length : null}
                style={{ color: 'Red ' }}
              >
                <ShoppingCartIcon style={{ color: '#fff' }} />
              </StyledBadge>
            </IconButton>
          </NavLink>
        </div>
      </nav>
    </>
  )
}

export default Navbar
