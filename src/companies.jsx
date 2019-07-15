import React from 'react'
import './companies.css'
// for cdelimiter class
import './about.css'
import Header from './header.jsx';
import Text from './text.jsx';

// Receives Card Object
function Company(props) {
    const info = props.card.info.map((data) => {
        return (
            <div key={data[0]}>

                <li > {`${data[0]}: `}<b>{data[1]}</b></li>
                <div className="cdelimiter"></div>
            </div>
        )
    })

    return (
        <div className="ccmpny">
            <div className="ccmpny-logo-cnt">
                <img className="ccmpny-logo" src={props.card.logo} alt="" />

            </div>

            <div className="ccmpny-info text-capitalize">
                <ul>{info}</ul>
                <a className="ccmpny-website" href={props.card.website}>Website</a>

            </div>
        </div>
    )
}

// Receives array of Objects
function CompanyCards(props) {
    const companies = props.cards.map((data) =>
        <Company key={data.id} card={data} />
    );

    return (
        <div className="ccmpny-cards">
            {companies}
        </div>
    )
}

export default function Companies(props) {
    console.log("TCL: Companies -> props", props.companies)
    return (
        <div className="ccompanies-cnt" >
            <Header header={props.companies.title} />
            <Text text={props.companies.text1} />
            <CompanyCards cards={props.companies.cards} />
            <Text text={props.companies.text2} />
        </div>
    )
}