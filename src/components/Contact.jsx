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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[65px] md:text-5xl font-semibold text-black mb-6">Contact Us Today</h2>
            <p className="text-black text-[16px] mb-40 leading-relaxed">
              Reach out to us for customized software solutions tailored to your<br />
              specific requirements and busines<br />
              goals.
            </p>

            <div className="mb-12">
              <h3 className="text-[24px] font-bold text-black mb-4">Let's Connect</h3>
              <div className="space-y-2 text-[16px]">
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
            <h3 className="text-[28px] font-semibold text-black mb-8">Contact us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-[14px] font-medium text-gray-700 mb-2">
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

              <div className="grid md:grid-cols-2 gap-6">
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
                  className="w-full md:w-auto px-28 py-1 bg-transparent border border-black text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
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
