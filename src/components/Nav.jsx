import React from 'react'
import HomeIcon from '../assets/svg/Home.svg'
import BankCardIcon from '../assets/svg/BankCard.svg'
import SettingIcon from '../assets/svg/Setting.svg'
import TimeIcon from '../assets/svg/Time.svg'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const location = useLocation();

  const navList = [
    { id: 1, icon: HomeIcon, alt: 'home', Route: '/' },
    { id: 2, icon: BankCardIcon, alt: 'bank card', Route: '/bankcard' },
    { id: 3, icon: SettingIcon, alt: 'setting', Route: '/setting' },
    { id: 4, icon: TimeIcon, alt: 'time', Route: '/time' },
  ]

  return (
    <div className='relative'>
      <div className='fixed bottom-0 left-0 w-full flex justify-center items-center'>
        <div className='shadow-nav bg-white w-[211px] mb-[40px] rounded-full h-[52px] flex justify-around items-center'>
          {navList.map((item) => {
            const isActive = location.pathname === item.Route;
            return (
              <Link
                key={item.id}
                to={item.Route}
                className={`flex justify-center items-center w-[44px] h-[44px] rounded-full ${
                  isActive ? 'bg-[#F5F5F5]' : ''
                }`}
              >
                <img src={item.icon} alt={item.alt} className='w-[24px] h-[25px]' />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Nav
