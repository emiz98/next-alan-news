import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-black px-5 text-white md:px-20">
      <div className="flex items-center space-x-5">
        <img src="/cover.jpg" alt="headerLogo" className="h-14" />
        <div className="hidden space-x-2 md:inline-flex">
          <span className="cursor-pointer p-2 transition-all ease-in-out hover:bg-gray-500">
            World
          </span>
          <span className="cursor-pointer p-2 transition-all ease-in-out hover:bg-gray-500">
            Politics
          </span>
          <span className="cursor-pointer p-2 transition-all ease-in-out hover:bg-gray-500">
            Business
          </span>
          <span className="cursor-pointer p-2 transition-all ease-in-out hover:bg-gray-500">
            Health
          </span>
          <span className="cursor-pointer p-2 transition-all ease-in-out hover:bg-gray-500">
            Entertainment
          </span>
          <span className="cursor-pointer p-2 transition-all ease-in-out hover:bg-gray-500">
            Style
          </span>
          <span className="cursor-pointer p-2 transition-all ease-in-out hover:bg-gray-500">
            Travel
          </span>
          <span className="cursor-pointer p-2 transition-all ease-in-out hover:bg-gray-500">
            Sports
          </span>
          <span className="cursor-pointer p-2 transition-all ease-in-out hover:bg-gray-500">
            Videos
          </span>
        </div>
      </div>

      <div className="space-x-4 p-4 text-gray-300">
        <SearchIcon className="cursor-pointer text-2xl hover:text-white" />
        <AccountCircleIcon className="cursor-pointer text-2xl hover:text-white" />
        <MenuIcon className="cursor-pointer text-2xl hover:text-white" />
      </div>
    </div>
  )
}

export default Header
