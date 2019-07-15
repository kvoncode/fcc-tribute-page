import React from 'react'
import './header.css'


// Text With Header
export default function SubHeader(props) {
    return (
        <h2 className="csub-header mt-5 mx-5">{props.header}</h2>
    )
}