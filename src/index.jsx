import React from 'react'
import ReactDOM from 'react-dom'

// Custom Components
import CodepenMock from './codepen-mock.jsx'
import PremierPage from './premier.jsx'
import Companies from './companies.jsx'
import About from './about.jsx'
import Twitter from './twitter.jsx'

import WideQuote from './wide-quote.jsx'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageTitle: "",
            premier: {
                bigImg: "",
                quote: "",
                quoted: "",
                cite: "",

            },
            person: {
                infoArr: [],
                img: "",
                twitter: "",
                title: "",
                about1: "",
                about2: "",

            },
            wideQuote: {
                img: "",
                text: ""
            },
            companies: {
                title: "",
                text1:"",
                text2:"",
                cards: [],
            },
            twitter: {
                title: "",
                text: "",
                tweets: [],
            }
            
        };

        //console.log("TCL: App -> constructor -> this.state", this.state)
    }

    componentDidMount() {

        let pathPrefix = "";

        // add prefix for codepen
        if ("cdpn.io" == document.location.host) {
            pathPrefix = "https://github.com/winepkd/free-code-camp/raw/master/html/tribute-page";
            //console.log("TCL: App -> componentDidMount -> pathPrefix", pathPrefix)

        }

        let url = pathPrefix + "data.json";
        // make request
        let xhr = new XMLHttpRequest();

        xhr.open("GET", url)
        xhr.onload = function () {
            this.setState(JSON.parse(xhr.responseText));
            //console.log("TCL: App -> componentDidMount -> this.state", this.state)
            twttr.widgets.load()
            document.title = this.state.pageTitle;
        }.bind(this);

        xhr.onerror = function () {
            console.error(xhr.statusText)
        }

        xhr.send();
    }


    render() {
        return (
            <div className="m-full-height">
                <CodepenMock />
                <PremierPage premier={this.state.premier} />
                <About person={this.state.person} />
                <WideQuote wideQuote={this.state.wideQuote} />
                <Companies companies={this.state.companies} />
                <Twitter twitter={this.state.twitter}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
);

