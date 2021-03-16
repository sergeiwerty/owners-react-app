import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { sidebarItems } from './sidebarData'
import './sidebar.css'
import logo from './logo.svg'
import close_menu_btn from './close_menu_btn.png'

const Sidebar = () => {
  const { isMobile, openMobile, closeMobile } = useGlobalContext()
  return (
    <aside
      className='main_menu col-12 col-sm-8 col-md-2 position-fixed'
      id='sticky-sidebar'
    >
      <div className='aside_top'>
        <div className='logo_container'>
          <a href='index'>
            <img src={logo} alt='logo' />
          </a>
          <hr></hr>
          <button
            className={`${isMobile ? 'close_mob_btn toggle' : 'close_mob_btn'}`}
          >
            <img src={close_menu_btn} alt='close menu' onClick={closeMobile} />
          </button>
          <button
            className={`${isMobile ? 'open_mob_btn toggle' : 'open_mob_btn'}`}
            onClick={openMobile}
          ></button>
        </div>
        <ul
          className={`${
            isMobile ? 'items_list mobile_open' : 'items_list mobile_close'
          }`}
        >
          {sidebarItems.map((item) => {
            const {
              id,
              to,
              textDecoration,
              width,
              height,
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
      <a
        href='ss'
        className={`${isMobile ? 'logout_item toggle' : 'logout_item'}`}
      >
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
