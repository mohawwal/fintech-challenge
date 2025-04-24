import React from 'react'
import NotificationIcon from '../assets/svg/Notification.svg'
import ProfileImage from '../assets/images/Profile.jpg'

const Header = () => {
  return (
    <div className='bg-white/90 h-[60px] fixed top-0 w-full max-w-[500px] flex justify-center items-center'>
      <div className='h-full px-4 top-0 w-full flex justify-between items-center'>
        <div className='flex flex-row items-center justify-center gap-3'>
          <img src={ProfileImage} alt='profile' className='w-[30px] h-[30px] rounded-full' />
          <p className='text-[16px] font-normal leading-[21px]'>
            Hi, Dele
          </p>
        </div>
        <img src={NotificationIcon} alt='notification' className='w-[24px] h-[24px]' />
      </div>
    </div>
  )
}

export default Header