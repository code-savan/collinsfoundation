import React from 'react'

const Donation = () => {
  return (
    <section id="donation" className="py-24 bg-gradient-to-br from-[#5d8708] to-[#446802]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-white mb-6">
            Be Part of the Change
          </h2>
          <p className="text-xl text-white/90 font-inter mb-12">
            Your support directly impacts education, agriculture, and healthcare in underserved communities
          </p>

          <div className="bg-white rounded-3xl p-10 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-roboto font-bold text-gray-900 mb-8">
              Donate via Bank Transfer
            </h3>
            <p className="text-gray-700 font-inter mb-6 text-base text-center">
              For now, please send your donation directly to our bank account below. Thank you for supporting our mission!
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 flex flex-col gap-4 items-center border border-gray-200">
              <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold text-gray-800 w-40">Account Name:</span>
                <span className="font-mono text-gray-700 flex-1 select-all" id="accountName">GOZI Education Foundation</span>
                <button
                  className="ml-2 px-3 py-1 text-xs bg-[#8dc220] text-white rounded hover:bg-[#7bb01c] transition"
                  onClick={() => {
                    navigator.clipboard.writeText('Collins Onyeaji');
                  }}
                  type="button"
                >
                  Copy
                </button>
              </div>
              <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold text-gray-800 w-40">Account Number:</span>
                <span className="font-mono text-gray-700 flex-1 select-all" id="accountNumber">1308436771</span>
                <button
                  className="ml-2 px-3 py-1 text-xs bg-[#8dc220] text-white rounded hover:bg-[#7bb01c] transition"
                  onClick={() => {
                    navigator.clipboard.writeText('3101143261');
                  }}
                  type="button"
                >
                  Copy
                </button>
              </div>
              <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold text-gray-800 w-40">Bank Name:</span>
                <span className="font-mono text-gray-700 flex-1 select-all" id="bankName">Providus Bank Ltd </span>
                <button
                  className="ml-2 px-3 py-1 text-xs bg-[#8dc220] text-white rounded hover:bg-[#7bb01c] transition"
                  onClick={() => {
                    navigator.clipboard.writeText('First Bank Nigeria');
                  }}
                  type="button"
                >
                  Copy
                </button>
              </div>
            </div>
            <p className="text-gray-500 font-inter text-sm text-center">
              100% of your donation goes to the communities we serve. Thank you for your generosity!
            </p>
          </div>
        </div>
      </section>
  )
}

export default Donation
