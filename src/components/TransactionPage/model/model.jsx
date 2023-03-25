import React from 'react'
import "./model.css";
// import evcPlusImg from "baargeelle.com/images/evcplus.png";
// import sahalImg from "baargeelle.com/images/sahal.png";
// import jeebImg from "baargeelle.com/images/jeep.png";
// import zaadImg from "baargeelle.com/images/zaad.png";


function Model({ setCloseModel }) {
    return (
        <div className='model_background'>
            <div className="model_container">
                <div className="items_container">
                    <div className="titel">
                        <span>API FEATURE</span>
                    </div>
                    <div className="payment_imgs">
                        <div className='img_container'>
                            <img
                                className='img_card'
                                src={"https://baargeelle.com/images/evcplus.png"}
                                alt={"baargeelle.com/images/evcplus.png"}
                            />
                            <span>EVC Plus</span>
                        </div>
                        <div className='img_container'>
                            <img
                                className='img_card'
                                src={"https://baargeelle.com/images/jeep.png"}
                                alt={"baargeelle.com/images/jeep.png"}
                            />
                            <span>Jeeb</span>
                        </div>
                        <div className='img_container'>
                            <img
                                className='img_card'
                                src={"https://baargeelle.com/images/sahal.png"}
                                alt={"baargeelle.com/images/sahal.png"}
                            />
                            <span>Sahal Service</span>
                        </div>
                        <div className='img_container'>
                            <img
                                className='img_card'
                                src={"https://baargeelle.com/images/zaad.png"}
                                alt={"baargeelle.com/images/zaad.png"}
                            />
                            <span>ZAAD</span>
                        </div>
                    </div>
                    <div className="btn_container">
                        <div className="btn" onClick={() => setCloseModel(false)}>Coming Soon</div>
                        <div className="cancel_btn" onClick={() => setCloseModel(false)} >Cancel</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model