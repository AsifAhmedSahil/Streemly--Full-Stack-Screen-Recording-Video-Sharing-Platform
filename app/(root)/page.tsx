import Header from '@/Components/Header'
import VideoCard from '@/Components/VideoCard'
import { dummyCards } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div className='wrapper page'>
      <Header subHeader='Public Library' title='All Videos' />
      
      <section className='video-grid'>

        {
          dummyCards.map((card)=>(
            <VideoCard key={card.id} {...card}/>
          ))
        }
      </section>
    </div>
  )
}

export default Page