import img2_2 from "../images/img2_2.png"
import img2_3 from "../images/img2_3.png"
import img2_4 from "../images/img2_4.png"
import img2_5 from "../images/img2_5.png"
import img2_6 from "../images/img2_6.png"
import img2_7 from "../images/img2_7.png"
const services = [
  { title: 'Graphic Design', image: img2_2 },
  { title: 'IT Consulting', image: img2_5 },
  { title: 'Mobile App development', image: img2_6 },
  { title: 'Digital Marketing Services', image: img2_4 },
  { title: 'Web Development', image: img2_7 },
  { title: 'Cybersecurity Services', image: img2_3 },
]

export default function Our_Service() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 ml-10">
      <div className="max-w-8xl flex flex-row">
        <div className="text-center mb-12 flex flex-col">
          <div className="flex flex-col mt-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Value-Added <span className="text-4xl sm:text-5xl font-bold text-green-500 mb-4">Services</span></h2>
          </div>
          <p className="text-xl text-gray-600 mb-8 mt-10">that Drive Superior Outcomes</p>
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 m-10 rounded-full text-lg mt-20">
            Get a Quote »
          </button> 
        </div>
       <div className="mx-auto">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-500 p-6 rounded-lg border border-green-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4 h-52">
                <img src={service.image} alt={service.title} width={300} height={100} className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-900">{service.title}</h3>
            </div>
          ))}
        </div>
       </div>
      </div>
    </div>
  )
}