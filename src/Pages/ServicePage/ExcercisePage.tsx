import React from "react";
import PageWrap from "../../Components/Layout/PageWrap";
import PhotoRecordList from "../../Components/PhotoRecordList";
import { exerciseTypes, dataDietGraph, optionsDietGraph, plugin, exerciseData } from "../../dummy/data";
import "../../styles/pages/exercisePage.scss";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
const ExcercisePage = function() {
    return (
        <React.Fragment>
            <PageWrap>
                <div className="content-wrapper" id="exercisePage">
                <PhotoRecordList cols={3} >
                    {exerciseTypes.map(data => (
                        <div className="list-element list-element--exercise">
                            <div className="image-title">{data.title}</div>
                            <div className="image-cover">
                            </div>
                            <div className="flex-break"></div>
                            <img src={data.imgSrc} width={240} height={240} alt=""></img>

                            <button className="clickable">{data.btnName}</button>
                        </div>
                    ))}
                    
                </PhotoRecordList>
                <div className="bg-dark-600 graph-area ">
                    <div className="area-title"><span >BODY RECORD</span><span className="area-title--date">2021.05.21</span> </div>
                    <Line data={dataDietGraph} width={920} height={300} plugins={[plugin]} options={optionsDietGraph} />
                    <div className="body-record-config-area">
                        <button className="clickable">日</button>
                        <button className="clickable">日</button>
                        <button className="clickable">日</button>
                        <button className="clickable selected">日</button>
                    </div>
                </div>
                <div className="bg-dark-500 exercise-area">
                    <div className="area-title"><span >MY EXERCISE</span><span className="area-title--date"> 2021.05.21</span></div>
                    <PhotoRecordList cols={2}>
                        {exerciseData.map(data => (<div className="list-element exercise-data">
                            <div className="first-row">
                                <span className="exercise-name hiragino color-light"> <span className="dot">●</span> {data.name}</span>
                                <span className="exercise-time inter-regular color-prim-300">{data.time}</span>
                            </div>
                            <div className="flex-break"></div>
                            <div className="exercise-calories inter-regular color-prim-300">{data.calories}</div>
                        </div>))}
                    </PhotoRecordList>
                </div>
                <PhotoRecordList cols={4}>
                </PhotoRecordList>        
                </div>
            </PageWrap>
        </React.Fragment>
    )
}

export default ExcercisePage;