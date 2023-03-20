import React, { ReactElement} from "react";

export interface PhotoRecordProp {
    imageSrc: string,
    date: string,
    time?: string,
    recordType?: string
}

type Props = {
    children?: React.ReactChild | React.ReactChild[]
    imageSrc: string,
    date: string,
    time?: string,
    recordType?: string,
    imgW: number,
    imgH: number
}



const PhotoRecord = ({imageSrc, date, time, recordType, imgH, imgW} : Props) : ReactElement=> {
    return (<React.Fragment>
            <img alt="" height={imgH} width={imgW} src={imageSrc}></img>
            <div className="list-element--details inter-regular"> {date} {time} {recordType}</div>
    </React.Fragment>)
}
export default PhotoRecord;