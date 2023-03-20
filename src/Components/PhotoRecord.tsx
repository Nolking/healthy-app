import React, { ReactElement} from "react";

export interface PhotoRecordProp {
    imageSrc: string,
    date: string,
    time?: Date,
    recordType?: string
}

type Props = {
    children?: React.ReactChild | React.ReactChild[]
    imageSrc: string,
    date: string,
    time?: Date,
    recordType?: string
}



const PhotoRecord = ({imageSrc, date, time, recordType} : Props) : ReactElement=> {
    return (<React.Fragment>
        <div className="list-element">
            <img alt="" height="234" width="234" src={imageSrc}></img>
            <div className="list-element--details inter-regular"> {date} {time} {recordType}</div>
        </div>
    </React.Fragment>)
}
export default PhotoRecord;