import { useState } from "react"
import { Globe } from 'lucide-react'
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="pt-20 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-madefor text-[26px] md:text-[57.03px] px-5 lg:px-0 font-semibold text-black mb-2 lg:mb-10">Contact Us Today</h2>
            <p className="text-gray-800 font-madefor text-[16px] px-5 lg:px-0 mb-10 lg:mb-40 leading-relaxed">
              <span className="inline lg:block">Reach out to us for customized software solutions tailored to your</span>
              <span className="inline lg:block">specific requirements and busines</span>
              <span className="inline lg:block">goals.</span>
            </p>

            <div className="mb-1">
              <h3 className="text-[23.76px] font-madefor font-bold px-5 lg:px-0 text-black mb-4">Let's Connect</h3>
              <div className="space-y-2 px-5 lg:px-0 font-madefor text-[16px]">
                <a
                  href="mailto:contact@satyossolutions.com"
                  className="block text-gray-800 hover:text-black underline"
                >
                  Email
                </a>
                <a href="tel:+1234567890" className="block text-gray-800 hover:text-black underline">
                  Phone
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[28px] font-madefor font- px-5 lg:px-0 text-black mb-1 lg:mb-8">Contact us</h3>
            <form onSubmit={handleSubmit} className="px-7 lg:px-0 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName"  className="block text-[14px] font-medium text-gray-700 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full px-0 py-3 border-0 border-b border-black focus:border-gray-500 focus:outline-none bg-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[14px] font-medium text-gray-700 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full px-0 py-3 border-0 border-b border-black focus:border-gray-500 focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-14px font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-0 py-3 border-0 border-b border-black focus:border-gray-500 focus:outline-none bg-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-[14px] font-medium text-black mb-4">
                    Phone
                  </label>
                  <PhoneInput
                    country={'in'}
                    value={formData.phone}
                    onChange={(phone) => setFormData({ ...formData, phone })}
                    inputClass="!w-full !bg-transparent !border-0 !border-b !border-black focus:!border-gray-500 focus:!outline-none"
                    buttonClass="!bg-transparent !border-0"
                    containerClass="!w-full"
                    enableSearch
                  />
                </div>
              </div>


              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 ">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full px-0 py-3 border-0 border-b border-black focus:border-gray-500 focus:outline-none bg-transparent resize-none"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full cursor-pointer md:w-auto px-28 py-1 bg-transparent border active:bg-black active:text-white
                   border-black text-black rounded-full  hover:bg-black hover:text-white transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
