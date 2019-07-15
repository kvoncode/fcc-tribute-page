import React from 'react'
import './wide-quote.css'


// About Elon Musk page
export default function WideQuote(props) {

    return (
        <div className="cwide-quote mb-5">
            <img className="cwide-quote-img" src={props.wideQuote.img} alt="" />
            <div className="cwide-quote-text">
                <div className="cwide-quote-text-bg"></div>
                {props.wideQuote.text}
            </div>
        </div>
    )
}
