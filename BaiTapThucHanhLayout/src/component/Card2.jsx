import React from 'react'
import imgIp1 from '../img/ip2.webp'
const Card2
 = () => {
  return (
    <div className='flex justify-center w-60 h-100'>
        <div className="box-item shadow-[0_0_15px_5px_rgba(0,0,0,0.05)] w-60 h-100 rounded-xl ">
            <div className="img w-full flex justify-center py-2">
              <img className='cursor-pointer w-40 h-40 mr-2 transition-transform duration-400 hover:scale-110' src={imgIp1} alt="" />
            </div>
            
            <div className="text-contetn mt-3 px-3">
              <h1 className='text-2xl font-bold'>Iphone 17</h1>
              <p className='mt-5 text-gray-500 line-clamp-3'>
                iPhone 16 128GB là lựa chọn cân bằng giữa thiết kế mới, hiệu năng mạnh và mức giá dễ tiếp cận. 
              </p>
            </div>

            <div className="w-full flex justify-center mt-7">
              <button className='cursor-pointer bg-[#155dfc] text-white py-2 px-5 rounded-lg hover:bg-[#1447e6] transition duration-300 font-medium'>Mua hàng</button>
            </div>
        </div>
    </div>
  )
}

export default Card2
