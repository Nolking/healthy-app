import React, {useState} from "react";
import PageWrap from "../../Components/Layout/PageWrap";
import PhotoRecordList from "../../Components/PhotoRecordList";
import PhotoRecord, { PhotoRecordProp }  from "../../Components/PhotoRecord";
import {dietData, dataDietGraph, optionsDietGraph, plugin} from "../../dummy/data";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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


import "../../styles/pages/dietPage.scss"
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
    Legend
  );
  
type Props = {
    recordsPerPage: number;
}

const DietPage = ({recordsPerPage} : Props) => {
    const [visibleRecords, setVisibleRecords] = useState(recordsPerPage)
    const handleClickShowMore = () => {
        setVisibleRecords((prevVisibleRecords) => prevVisibleRecords + recordsPerPage)
    }
    const percentage = 75;
    return (
        <React.Fragment>
        <PageWrap>
            <div className="diet-main-area">
                <div className="diet-main-photo">
                    <CircularProgressbar value={percentage}  
                    styles={{
                        // Customize the root svg element
                        root: {},
                        // Customize the path, i.e. the "completed progress"
                        path: {
                          // Path color
                          stroke: `rgba(255, 255, 255)`,
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'butt',
                          strokeWidth: 1,
                          boxShadow: "6px #FC7400",
                          // Customize transition animation
                          transition: 'stroke-dashoffset 0.5s ease 0s',
                          // Rotate the path
                          transform: 'rotate(1turn)',
                          transformOrigin: 'center center',
                        },
                        // Customize the circle behind the path, i.e. the "total progress"
                        trail: {
                          // Trail color
                          stroke: 'transparent',
                          strokeWidth: 1,
                          boxShadow: "6px #FC7400",
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: 'butt',
                          // Rotate the trail
                          transform: 'rotate(0.75turn)',
                          transformOrigin: 'center center',
                        },
                        // Customize the text
                        // Customize background - only used when the `background` prop is true
                        background: {
                          fill: 'white',
                        },
                      }}

                    > </CircularProgressbar>
                    <div className="diet-main-photo-text"><span className="date">05/21</span> {percentage}% </div>
                </div>
                <div className="diet-main-graph">
                    <Line data={dataDietGraph} width={800} height={300} plugins={[plugin]} options={optionsDietGraph} />
                </div>
            </div>
            <div className="content-wrapper">
                
                <ul className="horizontal-list record-filter-area">
                    <li className="hex gradient-bg clickable">
                        <div className="hex-icon icon-knife"></div><div className="hex-icon-text">Morning</div>
                    </li>
                    <li className="hex gradient-bg clickable">
                        <div className="hex-icon icon-knife"></div><div  className="hex-icon-text">Lunch</div>
                    </li>
                    <li className="hex gradient-bg clickable">
                        <div className="hex-icon icon-knife"></div><div  className="hex-icon-text">Dinner</div>
                    </li>
                    <li className="hex gradient-bg clickable">
                        <div className="hex-icon icon-cup"></div><div  className="hex-icon-text">Snack</div>
                    </li>
                </ul>
                <PhotoRecordList cols={4}>
                    {dietData.slice(0, visibleRecords).map((record) => (
                        <PhotoRecord 
                            imageSrc={record.imageSrc} 
                            date={record.date} 
                            recordType={record.recordType}>
                        </PhotoRecord>
                    ))
                    }
                </PhotoRecordList>
                {visibleRecords < dietData.length && (<button className="list-show-more-button hiragino gradient-bg clickable" onClick={handleClickShowMore}>記録をもっと見る</button>)}
            </div>
        </PageWrap>
        </React.Fragment>
    )
}

export default DietPage;