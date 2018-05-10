import React from 'react';
import './html/SharedCSS1.css'
import { SideNews } from './[P8]Wam for Students';
export class Events extends React.Component{
    render(){
        return(
            <div className="events">
                <div className="upper">
                    <label id="eventat">أحداث<br/></label>
                    <label id="month">إبريل</label>
                </div>
                
                <div className="month">
                    <ul>
                        <li className="prev">&#10094;</li>
                        <li className="next">&#10095;</li>
                        <li>إبريل<br/><span>2017</span></li>
                    </ul>
                </div>
                <ul className="weekdays">
                    <li>السبت</li>
                    <li>الأحد</li>
                    <li>الإثنين</li>
                    <li>الثلاثاء</li>
                    <li>الأربعاء</li>
                    <li>الخميس</li>
                    <li>الجمعة</li>
                    </ul>
                    <ul className="days">
                    <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li><span className="active">6</span></li><li>7</li><li>8</li><li>9</li><li>10</li>
                    <li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li>
                    <li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li>  
                </ul>
                <SideNews/>
                <SideNews/>
                <a id="gomore3">المزيد</a>


            </div>
        );
    }
}
