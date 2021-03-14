import React from 'react'
import { Link } from 'react-router-dom'
// import styles from './Sidebar.module.css'
import { sidebarItems } from './sidebarData'
import './sidebar.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
import logo from './logo.svg'

const Sidebar = () => {
  return (
    <aside
      className='main_menu col-12 col-sm-12 col-md-2 position-fixed'
      id='sticky-sidebar'
    >
      <div className='aside_top'>
        <div className='logo_container'>
          <a href='index'>
            <img src={logo} alt='logo' />
          </a>
          <hr></hr>
        </div>
        <ul className='items_list'>
          {sidebarItems.map((item) => {
            const {
              id,
              to,
              textDecoration,
              // className,
              width,
              height,
              // svg_fill,
              xmlns,
              opacity,
              d,
              fill,
              p_name,
            } = item
            return (
              <li className='item'>
                <Link
                  key={id}
                  to={to}
                  style={{ textDecoration: textDecoration }}
                >
                  <svg width={width} height={height} fill={fill} xmlns={xmlns}>
                    <path opacity={opacity} d={d} fill={fill} />
                  </svg>
                  <p>{p_name}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <a href='ss' className='logout_item'>
        <svg
          width='23'
          height='24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2.5 21.9H13v1.5H1V.9h12v1.5H2.5v19.5zM22 12l-5.7 5.7-.9-.9 4-4H7v-1.5h12.5l-4-4 1-1 5.6 5.7z'
            fill='#C680CD'
          />
        </svg>
        <p>Logout</p>
      </a>
    </aside>
  )
}

export default Sidebar
