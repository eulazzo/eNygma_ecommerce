
import React from 'react'
import { Announcement } from '../components/Announcement'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Header />
      <Slider />
    </div>
  )
}
