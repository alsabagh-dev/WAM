import React from 'react';
import './html/SharedCSS1.css'
export class News extends React.Component{
    render(){
        return(
            <div className="upper3">
                <img src="inserthere.png" id="im4"/>
                <label id="d1">الخميس 5 إبريل 2018 </label>
                <a id="n1">عنوان الخبر هنا</a>
                <label id="b1">مضمون الخبر هنا</label>
            </div>
        );
    }
}
export class SideNews extends React.Component{
    render(){
        return(
            <div className="eventslower">
                <img id = "im10" src="inserthere.png"/>
                <label id="b7">مضمون الخبر هنا</label>
            </div>
        );
    }
}