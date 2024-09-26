import home_page_3 from "../images/home_page_3.avif"
import home_page_4 from "../images/home_page_4.avif"
import home_page_7 from "../images/home_page_7.jpg"
import home from "../images/home.avif"

export default function About_section() {
  return (
    <div className=" w-screen flex justify-center items-center  px-4 sm:px-6 lg:px-8">
      <div className=" w-screen  p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
          {/* Text Content */}
          <div className="space-y-6">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl bg-gradient-to-r from-orange-600 via-amber-900 to-amber-950 text-transparent bg-clip-text relative">
  About Us
</h1>


            <p className="text-xl">
            NBA TECH, registered on 11th July 2024, is led by a seasoned IT and Cybersecurity expert with 25 years of experience. Our mission is to bring innovative, secure, and future-forward solutions to businesses across industries, helping them embrace technology while staying ahead of the cyber threats of tomorrow.
            </p>
            <div className="pt-5">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Collage */}
          <div> 
          <div className="grid grid-cols-2 gap-2 items-center mr-20">
            <img 
              src={home_page_7}
              alt="Collage Image 1"
              width={400}
              height={300}
              className="rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(72,61,139,0.8)]"
            />
            <img
              src={home_page_4}
              alt="Collage Image 2"
              width={400}
              height={300}
             className="rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(255,105,180,0.8)]"
            />
            <img
              src={home_page_3}
              alt="Collage Image 3"
              width={400}
             
              className="rounded-lg -mt-20 shadow-md h-3/4 transition duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(0,191,255,0.8)]"

            />
            <img
              src={home}
              alt="Collage Image 4"
              width={400}
              height={200}
               className="rounded-lg transition duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(255,140,0,0.8)]"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}