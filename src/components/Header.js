import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'
const Header = () => {
  const { DarkTheme, handleTheme } = useContext(ThemeContext)
  return (
    <div className='flex w-full max-w-85 justify-between items-center m-auto md:max-w-2xl'>
      <h1 className='tracking-8px  md:tracking-[1.5rem] font-bold text-3xl text-footer-color  md:text-5xl'>TODO</h1>
      <button onClick={handleTheme} className='toggleTheme  bg-transparent bg-no-repeat bg-center outline-none border-none w-9 h-9'><img className='w-full' src={DarkTheme ? sun : moon} alt='moon' /></button>
    </div>
  )
}

export default Header
