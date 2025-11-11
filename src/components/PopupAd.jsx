// components/PopupAd.jsx
import { useState, useEffect } from "react";
import advertisment from "../assets/advertisment.jpg";

export default function PopupAd() {
  const [show, setShow] = useState(false);

  // Show popup after page loads
  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-90 shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
          onClick={() => setShow(false)}
        >
          ✕
        </button>

        {/* Ad Content */}
        <div className="text-center">
          <img
            src= {advertisment}
            alt="Advertisement"
            className="w-full h-80 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Special Offer!</h2>
          <p className="text-gray-700 mb-4">
            Check out our new courses and discounts.
          </p>
          <a
            href="/courses"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
