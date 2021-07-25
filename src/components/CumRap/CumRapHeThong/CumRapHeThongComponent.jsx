import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCumRapHeThongAction } from '../../../redux/actions/QuanLiPhimAction';


export default function CumRapHeThongComponent(props) {
    const { TabPane } = Tabs;

    let { cumRapTheoHeThong } = useSelector(state => state.FilmReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCumRapHeThongAction(props.maHeThongRap));
    }, [])


    const renderSubTab = () => {
        return cumRapTheoHeThong.map((item, index) => {
            return <TabPane tab={item.tenCumRap} key={index}>
                <p>{item.tenCumRap}</p>
            </TabPane>
        })
    }


    return (
        <div>
            <Tabs tabPosition="left">
                {renderSubTab()}
            </Tabs>
        </div>
    )
}
