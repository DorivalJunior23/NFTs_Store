import React from "react";


import "./Modal.css";
import { Link } from "react-router-dom";

const Modal = ({ setShowModal, currentBid }) => {
   const fee = 0.02 * currentBid;
   const totalBid = fee + currentBid;
  
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i class="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h6 className="text-center text-light">Place a Bid</h6>
        <p className="text-center text-light">
          You must bid at least <span className="money">{currentBid} ETH</span>
        </p>

        <div className="input__item mb-4">
          <input type="number" placeholder="00 : 00 ETH" />
        </div>

        <div className="input__item mb-3">
          <h6>Enter Quantity, 7 available</h6>
          <input type="number" placeholder="Enter quantity" />
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>You must bid at least</p>
          <span className="money">{currentBid} ETH</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Service Fee</p>
          <span className="money">{fee} ETH</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Total Bid Amount</p>
          <span className="money">{totalBid} ETH</span>
        </div>

        <button className="place__bid-btn">
            <Link to='/wallet'>Place a Bid</Link>
            </button>
      </div>
    </div>
  );
};

export default Modal;