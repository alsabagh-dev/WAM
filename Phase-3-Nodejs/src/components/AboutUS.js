import React, { Component } from 'react';
import './AboutUS.css';
export class AboutUS extends Component{
    render(){
        return(
            <div className="inside">                
                <image className="WamIcon.png" class="icon"></image>                
                <div className="fon1">عن وام</div>                
                <div className="fon1">Content Title</div>
                <div className="fon2">Content</div>                
           </div>
        );
    }
}