import React from 'react';
import './html/SharedCSS1.css'
import {ForStudents} from "./[P1]Wam for Students";
import { MostRead } from './[P3]Wam for Students';
import { Weather } from './[P5]Wam for Students';
import { Mail } from './[P6]Wam for Students';
import { Others } from './[P7]Wam for Students';
import { Events } from './[P9]Wam for Students';
export class Students extends React.Component{
    render(){
        return(
            <div className="container">
                <ForStudents/>
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


