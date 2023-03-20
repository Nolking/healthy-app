import React, {ReactElement} from "react";
import PhotoRecord, {PhotoRecordProp} from "./PhotoRecord";

interface PhotoRecordListProp {
    photorecords: PhotoRecordProp[]
}
type Props = {
    children: React.ReactElement<PhotoRecordProp> | React.ReactElement<PhotoRecordProp>[],
    cols : number
}


const PhotoRecordList = ({children, cols} : Props) => {
    let clazz = () : string => {
        let name = "list-record "
        switch (cols) {
            case 2:
                return name + "list-two"
            case 3:
                return name + "list-three"
            case 4:
                return name + "list-four"
            case 5:
                return name + "list-five"
            default:
                return name + "list-one"
        }
    }
    return (<div className={clazz()} >
            {children}
    </div>)
}

export default PhotoRecordList;