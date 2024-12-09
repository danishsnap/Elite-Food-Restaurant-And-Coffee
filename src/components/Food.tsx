import React from 'react'
import Image from 'next/image'
import food1 from '@/assets/food1.jpg'
import food2 from '@/assets/food2.jpg'
import food3 from '@/assets/food3.jpg'
import food4 from '@/assets/food4.jpg'

const Food = () => {
  return (
    <div className="bg-black text-white flex mx-auto w-[1920px] flex-col items-center">
      {/* Food Category */}
      <div className="w-full text-center">
        <h3 className="italic text-yellowish text-2xl font-greatVibes">Food category</h3>
      </div>

      {/* Main Heading */}
      <div className="w-full text-center mt-4">
        <h1 className="text-5xl font-bold leading-tight"><span className="text-yellowish">Ch</span>oose Food Item</h1>
      </div>

      {/* Food Images in a Row */}
      <div className="flex space-x-4 mt-8">
        <Image src={food1} alt="Food Item 1" className="rounded-lg object-cover" style={{ height: "328px", width: "305px" }}/>
        <Image src={food2} alt="Food Item 2" className="rounded-lg object-cover" style={{ height: "328px", width: "305px" }}/>
        <Image src={food3} alt="Food Item 3" className="rounded-lg object-cover" style={{ height: "328px", width: "305px" }}/>
        <Image src={food4} alt="Food Item 4" className="rounded-lg object-cover" style={{ height: "328px", width: "305px" }}/>
      </div>
    </div>
  )
}

export default Food
