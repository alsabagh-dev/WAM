import React, { Component } from 'react';
import './Infographic page.css';
export class Infographic extends Component{
    render(){
        return(
            <div dir ="rtl" >
                <div className="rightContainer">
                    <div>                        
                    </div>
                </div>

                <div className="midContainer">

                    <div className="weather">
                        <p className="fon1Title" style={{ textalign: 'center' }}>الطقس</p>                                                                
                        <image src="weathericon.png" className="wi"></image>
                        <br></br>                               
                        <image src="weathericon.png"></image>
                        <p className="fon2">درجة الحرارة</p>
                        <br></br>
                        <image src="weathericon.png" style={{ display: 'inline' }}></image>
                        <p className="fon2">درجات الحرارةالأخرى</p>                                              
                    </div>

                    <div className="fon2" style={{ clear: 'both'}}>
                        <p style={{position:'absolute',left:'0%'}}>التاريخ</p>
                        <p style={{position:'absolute',right:'0%'}}>الكاتب</p>                                
                    </div>
                    <br></br>
                    <br></br>
                    <div className="fon2">
                        <p style={{position:'absolute',right:'0%'}}>الموضوع</p>
                    </div>

                    <div className="weather">
                        <p className="fon1Title" style={{ textalign: 'center'}}>الطقس</p>                                                                
                        <image src="weathericon.png" className="wi"> </image>
                        <br></br>                               
                        <image src="weathericon.png"></image>
                        <p className="fon2">درجة الحرارة</p>
                        <br></br>
                        <image src="weathericon.png" style={{display: 'inline'}}></image>
                        <p className="fon2">درجات الحرارةالأخرى</p>                                              
                    </div>
            
                </div>    

                <div className="leftContainer">

                    <div className="weather">
                        <p className="fon1Title" style={{ textalign: 'center'}}>الطقس</p>                                                                
                        <image src="weathericon.png" className="wi"></image>
                        <br></br>                               
                        <image src="weathericon.png"></image>
                        <p className="fon2">درجة الحرارة</p>
                        <br></br>
                        <image src="weathericon.png" style={{ display: 'inline'}}></image>
                        <p className="fon2">درجات الحرارةالأخرى</p>                                              
                    </div>
        
                    <div className="vote">
                        <p className="fon1Title" style={{textalign:'center'}}>التصويت</p> 
                        <br></br>
                        <button className="UPbutton"></button><p className="fon2">نعم</p>                                          
                        <br></br>                
                        <button className="Downbutton"></button><p className="fon2">لا</p>                                         
                        <br></br>
                        <button className="duncarePbutton"></button><p className="fon2">لا أهتم</p>
                        <br></br>
                        <input type="button" className="fon2" style={{ display: 'inline-block', position:'apsolute', backgroundcolor: '#344d9b', bottom:'2px', right:'2px'}} value="صوت"></input>
                        <input type="button" className="fon2" style={{ display: 'inline-block', position:'apsolute', backgroundcolor: '#4f5257', bottom:'2px', left:'10px'}} value="نتائج التصويت"></input>
                    </div>        
                </div>
            </div>
        );
    }
}