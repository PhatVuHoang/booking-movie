import { Tabs } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCumRapAction, getCumRapHeThongAction } from '../../redux/actions/QuanLiPhimAction';
import './CumRapComponent.css';
import CumRapHeThongComponent from './CumRapHeThong/CumRapHeThongComponent';

const TabPane = Tabs;

export default function CumRapComponent(props) {


    let { cumRap } = useSelector(state => state.FilmReducer);
    console.log('cumRap', cumRap);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCumRapAction());
    }, []);

    const renderTabs = () => {
        return cumRap.map((rap, index) => {
            return <TabPane tab={<img width={50} src={rap.logo} alt={rap.logo} />} key={index}>
                <p>abc</p>
            </TabPane>
        })
    }

    return (
        <div className="container p-5" style={{ marginTop: 50 }}>
            <Tabs tabPosition="left">
                {renderTabs()}
            </Tabs>
        </div>
    )
}
