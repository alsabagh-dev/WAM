import React from 'react';
import './html/SharedCSS1.css'

export class Image extends React.Component{
    render(){
        return(
            <div className="upper">
                <label id="read">الأكثر قراءة</label>
                <img id ="img2" src="inserthere.png"/>
            </div>
        );
    }
}
export class Lower extends React.Component{
    render(){
        return(
            <div className="Lower">
                <News/>
                <hr/>
                <News/>
                <hr/>
                <News/>
                <hr/>
                <a id="gomore">المزيد</a>
            </div>
        );
    }
}

export class News extends React.Component{
    render(){
        return(
            <div>
                <label id="date2">الخميس 5 إبريل 2018 </label>
                <a id="newsbody2">مضمون الخبر هنا</a>
                <a id="more1">← قراءة المزيد</a>
            </div>
        );
    }
}
