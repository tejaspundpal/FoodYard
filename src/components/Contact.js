import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-20">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          We'd love to hear from you! Contact us with any questions or feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Address</h2>
            <p className="text-gray-700">
              FoodYard Headquarters<br />
              ABC Street,<br />
              Maharashtra,<br />
              India.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
            <p className="text-gray-700">
              Email: info@foodyard.com<br />
              Phone: 1234567890<br />
              Fax: 1234567890
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Send us a Message</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact