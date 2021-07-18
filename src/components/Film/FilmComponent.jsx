import React from "react";
import { Tabs } from "antd";
import 'antd/dist/antd.css';
import './FilmCoponent.css'

export default function FilmComponent() {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="film">
      <Tabs defaultActiveKey="1" onChange={callback} centered={true}>
        <TabPane tab="Đang Chiếu" key="1">
          
        </TabPane>
        <TabPane tab="Sắp Chiếu" key="2">
          
        </TabPane>
      </Tabs>
    </div>
  );
}
