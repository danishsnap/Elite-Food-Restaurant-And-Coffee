import React from 'react'
import Image from 'next/image'
import chef1 from '@/assets/Chef1.png'
import chef2 from '@/assets/chef2.png'
import chef3 from '@/assets/chef3.png'
import chef4 from '@/assets/chef4.png'

const Food = () => {
  return (
    <div className="bg-black text-white flex mx-auto w-[1920px] h-[657px] flex-col items-center">
      {/* Food Category */}
      <div className="w-full text-center">
        <h3 className="italic text-yellowish text-2xl font-greatVibes">Chefs</h3>
      </div>

      {/* Main Heading */}
      <div className="w-full text-center mt-4">
        <h1 className="text-5xl font-bold leading-tight"><span className="text-yellowish">Me</span>et Our Chef</h1>
      </div>

      {/* Food Images in a Row */}
      <div className="flex space-x-4 mt-8">
        <Image src={chef1} alt="Food Item 1" className="rounded-lg object-cover" style={{ height: "391px", width: "312px" }}/>
        <Image src={chef2} alt="Food Item 2" className="rounded-lg object-cover" style={{ height: "391px", width: "312px" }}/>
        <Image src={chef3} alt="Food Item 3" className="rounded-lg object-cover" style={{ height: "391px", width: "312px" }}/>
        <Image src={chef4} alt="Food Item 4" className="rounded-lg object-cover" style={{ height: "391px", width: "312px" }}/>
      </div>
      <div><button className="mt-8 bg-black text-white font-semibold py-3 px-8 rounded-full border-2 border-yellowish hover:bg-orange-600 transition">
  See More
</button></div>
    </div>
  )
}

export default Food
