import React from 'react';
import './html/SharedCSS1.css'
import {ForKids} from "./[P1]Wam for Kids";
import { MostRead } from './[P3]Wam for Kids';
import { Weather } from './[P5]Wam for Kids';
import { Mail } from './[P6]Wam for Kids';
import { Others } from './[P7]Wam for Kids';
import { Events } from './[P9]Wam for Kids';
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


