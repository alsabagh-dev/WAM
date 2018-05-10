import React from 'react';
import './html/SharedCSS1.css'
import {ForKids} from "./[P1]News Bulletin";
import { MostRead } from './[P3]News Bulletin';
import { Weather } from './[P5]News Bulletin';
import { Mail } from './[P6]News Bulletin';
import { Others } from './[P7]News Bulletin';
import { Events } from './[P9]News Bulletin';
export class Kids extends React.Component{
    render(){
        return(
            <div className="container">
                <ForKids/>
                <MostRead/>
                <Weather/>
                <Mail/>
                <Others/>
                <Events/>
                <div className="ads">
                    <label id="ad">مساحة إعلانية</label>
                </div>
            </div>
        );
    }
}


