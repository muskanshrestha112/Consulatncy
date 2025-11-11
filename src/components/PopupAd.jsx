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
      <div className="relative max-w-md w-90 shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold z-10"
          onClick={() => setShow(false)}
        >
          ✕
        </button>

        {/* Ad Image */}
        <a href="/courses" className="block">
          <img
            src={advertisment}
            alt="Advertisement"
            className="w-full h-100 object-cover rounded-md cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
