// Modal.js
import React from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-[90%] sm:w-full  mx-auto">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button onClick={onClose}>
            <IoMdClose size={24} />
          </button>
        </div>
        <div className="pt-3">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
