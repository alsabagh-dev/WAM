import React from 'react';
import './html/SharedCSS1.css'
import {Image, Lower} from "./[P4]News Bulletin";
export class Mail extends React.Component{
    render(){
        return(
            <div className="mail">
            <div className="upper">
                <label id="maillist">القائمة البريدية</label>
                <hr id="line1"/>
                <label id="subnow">اشترك الآن لتصلك آخر الأخبار</label>
            </div>
            <form action="" id="sub">
                <input type="text" id="usermail"/> 
                <input type = "submit" id="go" value ="←"/>
            </form>
        </div>
        );
    }
}
    