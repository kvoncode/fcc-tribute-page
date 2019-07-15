import React from 'react'
import './text.css'


export default function DenseText(props) {
    return (
        <p className="lead cdense-text mx-5">{props.text}</p>
    )
}