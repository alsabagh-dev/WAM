import React, { Component } from 'react';
import './ContactUs.css';
export class ContactUS extends Component{
    render(){
        return(
            <div className="mainBlock">
                <div className="callus">                
                    <p className="fon1Title" style={{ textAlign : 'center' }}>"أتصل بنا"</p> 
                    <br></br>               
                    <p className="fon1">البريد الإليكتروني : </p> <p className="fon2">العنوان</p> 
                    <p className="fon1">أتصل بنا  : </p> <p className="fon2"> الرقم</p> 
                    <br></br>
                    <p className="fon1">المدير التنفيذي : </p> <p className="fon2">الإسم</p>          
                </div>
                <div className="weather">
                    <p className="fon1Title" style={{ textAlign : 'center' }}>الطقس</p>                                                                
                    <image src="weathericon.png" className="wi"></image>
                    <br></br>
                    <image src={"weathericon.png"}></image>                
                    <p className="fon2">درجة الحرارة</p>
                    <br></br>
                    <image src={"weathericon.png"} style={{display: 'inline'}}></image>
                    <p className="fon2">درجات الحرارةالأخرى</p>                                              
                </div>
                <div className="map">
                    <p className="fon1Title" style={{display: 'inherit', textalign: 'center'}}>موقعنا على الخريطة</p>                
                    <select style={{width:'200px',marginright: '50px', fontfamily:'cairo',fontsize:'15px'}}>
                        <option value="أبو ظبي">أبو ظبي</option>
                        <option value="مدن أخرى">مدن أخرى</option>                    
                    </select>                                                       
                    <p className="fon1">الهاتف : </p> <p className="fon2">الرقم</p>
                    <p className="fon1">الفاكس : </p> <p className="fon2">الرقم</p>                
                    <image src={"mapimage.png"} className="mapimage"></image>                
                </div>             
            </div>            
        );
    }
}