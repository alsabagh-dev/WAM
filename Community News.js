import React from 'react';
import './html/SharedCSS1.css'
import {ForKids} from "./[P1]Community News";
import { MostRead } from './[P3]Community News';
import { Weather } from './[P5]Community News';
import { Mail } from './[P6]Community News';
import { Others } from './[P7]Community News';
import { Events } from './[P9]Community News';
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


