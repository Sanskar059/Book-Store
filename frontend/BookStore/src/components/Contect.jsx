// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// function Contect() {
//   const navigate = useNavigate();
//   const handlesubmit = (e)=>{
//  alert("form submited sucessfully")
//  navigate("/"); 
//  window.location.reload()
//   }
//   return (
//     <div className=' dark:bg-slate-900 dark:text-white '>


//     <div className=" dark:bg-slate-900 dark:text-white min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className=" dark:bg-slate-900 dark:text-white bg-white p-8 border-2 border-blue-600 rounded-2xl shadow-lg w-full max-w-lg">
//       <Link  to={"/"} className=" btn btn-sm btn-circle btn-ghost bg-gray-600 ">✕</Link>
//         <h2 className="text-2xl font-bold text-gray-500 text-center mb-6">Contact Us</h2>
//         <form onSubmit={handlesubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-400 font-medium mb-1">Name</label>
//             <input 
//               type="text" 
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
//               placeholder="Your Name" 
//               required 
//             />
//           </div>
//           <div>
//             <label className="block text-gray-300 font-medium mb-1">Email</label>
//             <input 
//               type="email" 
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
//               placeholder="Your Email" 
//               required 
//             />
//           </div>
//           <div>
//             <label className="block text-gray-300 font-medium mb-1">Message</label>
//             <textarea 
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
//               placeholder="Your Message" 
//               rows="5" 
//               required
//             ></textarea>
//           </div>
//           <button 
//             type="submit" 
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
 


      
//     </div>
//   )
// }

// export default Contect








import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Contact() {
  const navigate = useNavigate();
  
  const handlesubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full">
                 
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Email</p>
                  <p className="text-gray-900 dark:text-white font-medium">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full">
                  
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Phone</p>
                  <p className="text-gray-900 dark:text-white font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full">
                  
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Address</p>
                  <p className="text-gray-900 dark:text-white font-medium">123 Business Street, Suite 100, City, State 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</h2>
              <Link to="/" className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors">
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Link>
            </div>

            <form onSubmit={handlesubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent dark:bg-slate-700 dark:text-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent dark:bg-slate-700 dark:text-white transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent dark:bg-slate-700 dark:text-white transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;