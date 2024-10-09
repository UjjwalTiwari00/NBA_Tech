import React from 'react'

const Career = () => {
  return (
    <div className='bg-white text-center mt-20'>
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12 bg-red-500 p-24 rounded-lg">
                      <h2 className="text-6xl  text-white font-bold h-full">
                      We're Hiring Soon!
                      <span>.....</span>
                      </h2>
                      <p className="mt-6 text-slate-100">
                      Exciting opportunities are on the horizon as we prepare to expand our team across multiple levels and domains. We are looking for talented individuals to join us in roles such as Frontend Developer, Mobile App Developer, Backend Engineer, and Web3 Specialist.
                      </p>
                      <p className="mt-4 text-white">
                      Whether you're passionate about crafting engaging user interfaces, building scalable backend systems, or working on the cutting edge of decentralized technology, we have a place for you. Stay tuned for more details on how you can be part of our dynamic and innovative team!
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Career