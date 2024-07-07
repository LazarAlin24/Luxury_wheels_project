import { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState("");

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setEmail(""); // Clear the input field
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div
      className="newsletter flex items-center justify-center bg-cover"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/sleek-showroom-displays-array-modern-car-rims_157027-4378.jpg?w=1380&t=st=1719335616~exp=1719336216~hmac=8d300299523ca5a490f6b21f47ad0446743f29c863b3a3c74c75f30dcde197db')`,
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="newtext-2xl font-bold mb-4">
          Get exclusive offers in your email
        </h1>
        <p className="mb-6">Subscribe to our newsletter and stay updated</p>
        <div className="flex flex-col sm:flex-row items-center">
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 mb-4 sm:mb-0 sm:mr-4 flex-grow"
          />
          <button
            type="submit"
            className="btn bg-black text-white p-3 rounded-md hover:bg-red-600 transition duration-300"
            onClick={openPopup}
          >
            Subscribe
          </button>
        </div>
        <div className={`popup ${isPopupOpen ? "open-popup" : ""}`} id="popup">
          <img
            className="popup-image"
            src="https://previews.123rf.com/images/sarahdesign/sarahdesign1509/sarahdesign150900627/44517835-confirm-icon.jpg?fj=1"
            alt="confirmation logo"
          />
          <p>Thank you for subscribing!</p>
          <button className="btn btnpopup" onClick={closePopup}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
