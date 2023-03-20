import React from "react";
import PageWrap from "../../Components/Layout/PageWrap";
import PhotoRecordList from "../../Components/PhotoRecordList";
import { columnData, recommendedData } from "../../dummy/data";
const MenuPage = function() {
    return (
         <PageWrap>
            <div className="content-wrapper" id="columnPage">
                <PhotoRecordList cols={4} >
                    {recommendedData.map(data => (<div className="list-element">
                        <div className="list-element-content bg-dark-600">
                            <div>{data.title}</div>
                            <div>{data.name}</div>
                        </div>

                    </div>))}
                </PhotoRecordList>
            </div>
         </PageWrap>
    )
}

export default MenuPage;