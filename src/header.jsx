import React from 'react'
import './header.css'


// Text With Header
export default function Header(props) {
    return (
        <h1 className="display-4 mb-3">{props.header}</h1>
    )
}