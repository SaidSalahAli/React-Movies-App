import React from 'react'

const Titles = ({title,Icon}) => {
  return (
    <div className='w-full flex sm:gap-8 gap-4 items-center'>
        <Icon className='sm:text-xl font-bold text-lg text-subMain '/>
        <h2 className='sm:text-xl  font-bold text-lg '>{title}</h2>
    </div>
  )
}

export default Titles