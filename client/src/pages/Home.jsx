
import React from 'react'
import { Announcement } from '../components/Announcement'
import { Categories } from '../components/Categories'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Header />
      <Slider />
      <Categories />  
    </div>
  )
}
