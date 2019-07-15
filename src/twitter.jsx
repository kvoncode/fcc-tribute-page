import React from 'react'
import './twitter.css'
import Header from './header.jsx';
import SubHeader from './sub-header.jsx';

import Text from './text.jsx';
import DenseText from './dense-text.jsx';

// About Elon Musk page
export default function Twitter(props) {


    const tweets = props.twitter.tweets.map((tweet) => {

        function createTweet() {
            return { __html: tweet.html };
        }

        return (
            <div key={tweet.title}>
                <SubHeader header={tweet.title} />
                <DenseText text={tweet.text} />
                <div className="ctweet" dangerouslySetInnerHTML={createTweet()}></div>

            </div>
        )
    });

    return (
        <div className="ctwitter-cnt my-5">
            <Header header={props.twitter.title} />
            <DenseText text={props.twitter.text} />
            <div className="ctweets">
                {tweets}
            </div>




        </div>
    )
}
