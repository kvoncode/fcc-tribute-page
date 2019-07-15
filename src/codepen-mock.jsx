import React from 'react'

// Mock Component - Do nothing | Need to pass tests
export default function CodepenMock() {

    return (

        <div hidden >

            <div id="title" >mock</div>
            <div id="img-div">
                <img id="image" className="codepen-mock-img" src="" alt="" />
                <div id="img-caption" >mock</div>
            </div>
            <div id="tribute-info">mock</div>
            <a id="tribute-link" href="#" target="_blank"></a>
        </div>

    );
}