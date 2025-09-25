import React from 'react'
import Header from '../../../../../components/Header';


const page = async({params}:ParamsWithSearch) => {
    const {id}= await params;
  return (
    <div className='text-2xl font-karla'>
        <Header
         subHeader='vivekjo.dev@gmail.com' 
         title='Adrian | JS'
         userImg="/assets/images/dummy.jpg"/> 
        <h1>User id {id}</h1>
      </div>
  )
}

export default page
