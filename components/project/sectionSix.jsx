import Image from 'next/image'
import React from 'react'

const Index = () => {
    return (
        <div className="pt-12 container">
            <div className="flex items-center">
                <div className="w-12 lg:w-32 h-2 bg-[#EBEBFC] opacity-50 mr-4 lg:mr-12"/>
                <Image src="https://d1u4arv5y5eda6.cloudfront.net/images/Group+6426.png" alt="" width={500} height={500} className='w-36 lg:w-60'/>
                <h1 className='text-3xl lg:text-5xl font-bold project__section__two__heading'> Website</h1>
            </div>
            <div className="px-12 lg:px-96 min-w-full">
                <Image src="https://d1u4arv5y5eda6.cloudfront.net/images/Group+6414.png" alt='' width={800} height={800} className='pt-4 lg:py-12'/>
            </div>
        </div>
    )
}

export default Index 