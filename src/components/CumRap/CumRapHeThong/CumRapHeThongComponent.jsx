import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCumRapHeThongAction } from '../../../redux/actions/QuanLiPhimAction';
const TabPane = Tabs;


export default function CumRapHeThongComponent(props) {


    let {cumRapTheoHeThong}= useSelector(state => state.FilmReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCumRapHeThongAction(props.maHeThongRap));
    },[ ]);

    const renderSubTab = () => {
        return cumRapTheoHeThong.map((item, index) => {
            return <TabPane tab={<p>{item.tenCumRap}</p>} key={index}>
                <p>asdasd</p>
            </TabPane>
        })
    }
    console.log(cumRapTheoHeThong);

    return (
        <div>
            <Tabs tabPosition="left">
                {renderSubTab()}
            </Tabs>
        </div>
    )
}
