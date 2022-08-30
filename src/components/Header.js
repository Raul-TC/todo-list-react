import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'
const Header = () => {
  const { DarkTheme, handleTheme } = useContext(ThemeContext)
  return (
    <div className='flex w-full max-w-85 justify-between items-center m-auto lg:max-w-2xl'>
      <h1 className='tracking-8px font-bold text-3xl text-footer-color'>TODO</h1>
      <button onClick={handleTheme} className={DarkTheme ? 'toggleTheme  bg-transparent bg-no-repeat bg-center outline-none border-none w-8 h-8' : 'toggleTheme  bg-transparent bg-no-repeat bg-center outline-none border-none w-8 h-8'}><img src={DarkTheme ? sun : moon} alt='moon' /></button>
    </div>
  )
}

export default Header
