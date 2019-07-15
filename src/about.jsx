import React from 'react'
import './about.css'
import Header from './header.jsx';
import Text from './text.jsx';

function PersonCard(props) {
    //console.log("TCL: PersonCard -> props", props)

    const info = props.person.infoArr.map(
        (data) => {
            return (
                <div key={data[0]}>

                    <li > {`${data[0]}: `}<b>{data[1]}</b></li>
                    <div className="cdelimiter"></div>

                </div>
            )
        }
    )

    return (
        <div className="cperson mb-5">
            <img className="cperson-img" src={props.person.img} alt="" />
            <div className="cperson-info">
                <ul>{info}</ul>

                <a className="ctwt-container" target="_blank" rel="noreferrer noopener" href={props.person.twitter} >
                    <img className="ctwitter-logo mx-auto" src={props.person.twitterSvg} alt="" />
                </a>
            </div>
        </div>
    )
}

// About Elon Musk page
export default function About(props) {
    //console.log("TCL: About -> props", props)

    return (
        <div className="cabout-cnt mt-5">
            <Header header={props.person.title}/>
            <Text text={props.person.about1}/>
            {/* <Twt title={} text={props.person.text} /> */}
            <PersonCard person={props.person} />
            <Text text={props.person.about2}/>

        </div>
    )
}
