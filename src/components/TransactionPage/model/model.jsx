import React from 'react'
import "./model.css";
import evcPlusImg from "../../../../assets/images/evcplus.png";
import sahalImg from "../../../../assets/images/sahal.png";
import jeebImg from "../../../../assets/images/jeep.png";
import zaadImg from "../../../../assets/images/zaad.png";


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
                                src={evcPlusImg}
                                alt={evcPlusImg}
                            />
                            <span>EVC Plus</span>
                        </div>
                        <div className='img_container'>
                            <img
                                className='img_card'
                                src={jeebImg}
                                alt={jeebImg}
                            />
                            <span>Jeeb</span>
                        </div>
                        <div className='img_container'>
                            <img
                                className='img_card'
                                src={sahalImg}
                                alt={sahalImg}
                            />
                            <span>Sahal Service</span>
                        </div>
                        <div className='img_container'>
                            <img
                                className='img_card'
                                src={zaadImg}
                                alt={zaadImg}
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