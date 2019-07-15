// Premier Page | First Page
import React from 'react'
import './premier.css'

export default function PremierPage(props) {

    let divStyle = {
        backgroundImage: `url(${props.premier.bigImg})`
    }

    return (
        <div>
            <div style={divStyle} className="cpremier-img-div"></div>

            <div className="cbg-transparent">
                <blockquote className="blockquote cquote" cite={props.premier.cite}>
                    <p className="mb-0">{props.premier.quote}</p>
                    <footer className="blockquote-footer cquoted" >{props.premier.quoted}</footer>
                </blockquote>
            </div>
        </div>
    );
}