import React from 'react'
import './text.css'

export default function Text(props) {
    return (
        <p className="lead ctext">{props.text}</p>
    )
}