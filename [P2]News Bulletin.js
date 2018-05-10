import React from 'react';
import './html/SharedCSS1.css'
export class Image extends React.Component{
    render(){
        return(
            <div className="upper">
                <label id="students" >نشرة الأخبار</label>
                <img  id ="img1"src="Inserthere.png"/>
            </div>  
        );
    }
}
export class Lower extends React.Component{
    render(){
        return(
            <div className="lower"> 
                <label id="date">الخميس 5 إبريل 2018 </label>
                <a id="news2">عنوان الخبر هنا</a>
                <label id="newsbody1">مضمون الخبر هنا</label>
            </div>
        );
    }
}
