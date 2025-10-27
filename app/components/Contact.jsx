import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white">
    <div className="grid md:grid-cols-2">
      {/* Contact Info */}
      <div className="p-12 md:p-16 lg:p-20 flex flex-col justify-center">
        <span className="text-[#8dc220] font-inter text-sm uppercase tracking-wider">Contact</span>
        <h2 className="text-4xl md:text-5xl font-roboto font-bold mb-2 mt-2">
          Get In Touch
        </h2>
        <p className="text-[15px] text-gray-400 font-inter mb-10">
          Ready to join us in making a difference? We'd love to hear from you.
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-[#8dc220] mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <h4 className="font-roboto font-bold mb-1">Address</h4>
              <p className="text-gray-400 font-inter font-medium text-[15px]">
              Plot P/11 G.I Oguledo Avenue, Action Housing Area B, New Owerri P.M.B. 1217, Owerri, Imo State, Nigeria
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <svg className="w-6 h-6 text-[#8dc220] mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <h4 className="font-roboto font-bold mb-1">Email</h4>
              <p className="text-gray-400 font-inter font-medium text-[15px]">info@collinsonyeaji.org</p>
            </div>
          </div>

          <div className="flex items-start">
            <svg className="w-6 h-6 text-[#8dc220] mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <h4 className="font-roboto font-bold mb-1">Phone</h4>
              <p className="text-gray-400 font-inter font-medium text-[15px]">+2348059000097</p>
            </div>
          </div>
        </div>
            {/* Socials links  */}
        {/* <div className="flex space-x-4 mt-10">
          <a href="#" className="w-12 h-12 bg-[#8dc220] rounded-full flex items-center justify-center hover:bg-[#7bb01c] transition-colors">
            <span className="text-white font-bold">f</span>
          </a>
          <a href="#" className="w-12 h-12 bg-[#007acc] rounded-full flex items-center justify-center hover:bg-[#005a99] transition-colors">
            <span className="text-white font-bold">in</span>
          </a>
          <a href="#" className="w-12 h-12 bg-[#e91e63] rounded-full flex items-center justify-center hover:bg-[#c2185b] transition-colors">
            <span className="text-white font-bold">ig</span>
          </a>
        </div> */}
      </div>

      {/* Map Section */}
      <div className="relative h-[500px] md:h-auto bg-gray-900">
        <iframe
          className="w-full h-full opacity-90"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31518.04524888348!2d7.459166!3d9.08601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b929d261bc1%3A0xf87655077fcf6153!2sKINGFEM%20GA247!5e0!3m2!1sen!2sng!4v1757413690170!5m2!1sen!2sng"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>
    </div>


    {/* Divider */}
    <div className="border-t border-slate-900" />
  </section>
  )
}

export default Contact
