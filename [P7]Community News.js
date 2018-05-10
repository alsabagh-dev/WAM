import React from 'react';
import './html/SharedCSS1.css'
import { News } from './[P8]Community News';
export class Others extends React.Component{
    render(){
        return(
            <div className="othernews">
            <div className="upper"><label id="others">أخبار أخرى</label></div>
            <table id="newstable">
                <tbody>
                    <tr>
                        <td>
                            <News/>
                        </td>
                        <td>
                            <News/>
                        </td>
                        <td>
                            <News/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <News/>
                        </td>
                        <td>
                            <News/>
                        </td>
                        <td>
                            <News/>
                        </td>
                    </tr>
                </tbody>
            </table> 
                <a id="gomore2">المزيد</a>
            </div>
        );
    }
}
