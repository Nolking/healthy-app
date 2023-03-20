import React, {useState} from "react";
import PageWrap from "../../Components/Layout/PageWrap";
import PhotoRecordList from "../../Components/PhotoRecordList";
import { columnData, recommendedData } from "../../dummy/data";
import PhotoRecord from "../../Components/PhotoRecord";
import "../../styles/pages/menuPage.scss"
type Props = {
    recordsPerPage : number;
}

const MenuPage = function({recordsPerPage} : Props) {
    const [visibleRecords, setVisibleRecords] = useState(recordsPerPage)
    const handleClickShowMore = () => {
        setVisibleRecords((prevVisibleRecords) => prevVisibleRecords + recordsPerPage)
    }
    return (
         <PageWrap>
            <div className="content-wrapper" id="columnPage">
                <PhotoRecordList cols={4} className="recommended-area">
                    {recommendedData.map(data => (<div className="list-element">
                        <div className="list-element-content bg-dark-600">
                            <div>{data.title}</div>
                            <div className="white-line-56px"></div>
                            <div>{data.name}</div>
                        </div>
                    </div>))}
                </PhotoRecordList>
                <PhotoRecordList cols={4} className="activity-area">
                    {columnData.slice(0, visibleRecords).map((record) => (
                        <div className="list-element">
                            <PhotoRecord 
                                imgW={230}
                                imgH={144}
                                imageSrc={record.imageSrc} 
                                date={record.date} 
                                time={record.time}>
                            </PhotoRecord>
                            <div className="activity-area-content flex-break hiragino color-dark-500">{record.content}</div>
                            <div className="activity-area-hashtag flex-break hiragino color-prim-400">{record.hashtag}</div>
                        </div>
                    ))
                    }
                </PhotoRecordList>
                {visibleRecords < columnData.length && (<button className="list-show-more-button hiragino gradient-bg clickable" onClick={handleClickShowMore}>記録をもっと見る</button>)}

            </div>
         </PageWrap>
    )
}

export default MenuPage;