import React from 'react'
import Carousel from './Carousel'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

const Content = () => {
  return (
    <div>
        <Carousel/>
        <div className="w-full p-4 lg:px-20 py-2">
            <div className="grid grid-cols-4 gap-5 justify-between">
                <Card1/>
                <Card2/>
                <Card3/>
                <Card4/>
                <Card1/>
                <Card2/>
                <Card3/>
                <Card4/>
            </div>
        </div>
    </div>
  )
}

export default Content