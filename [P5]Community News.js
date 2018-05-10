import React from 'react';
import './html/SharedCSS1.css'
export class Weather extends React.Component{
    render(){
        return(
            <div className="weather">
                    <div className="upper2">
                        <label id="weath">الطقس</label>
                        <img id="cloud" src="3.png"/>
                        <label id="temp">00°</label>
                    </div>
                    <table id="weathertable">
                        <tbody>
                            <tr>
                                <td>
                                    <img src="3 copy.png" id="im1"/>
                                </td>
                                <td>
                                    <div id="temp2">00°</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="3 copy.png" id="im2"/>
                                </td>
                                <td>
                                    <div id="temp2">00°</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="3 copy.png" id="im3"/>
                                </td>
                                <td>
                                    <div id="temp3">00°</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        );
    }
}
