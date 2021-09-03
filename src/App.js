import './App.css';
import { Fragment, useState } from 'react'
import Home from './home'
import Culture from './culture';
import Product from './product';
import Universe from './universe';
import Join from './join';
import { Tabs } from 'antd';
import logo from './home/images/logo.png'
const { TabPane } = Tabs;



function App() {
  const [showEle, setShow] = useState(0)
  function callback(key) {
    console.log('key', key)
    setShow(key)
  }
  function backHome(){
    setShow(0)
  }
  return (
    <Fragment>
      <div className="container-app">
        <div className="banner-app">
          <div className="img_position">
            <img src={logo} alt='聚芒校园' onClick={backHome}></img>
          </div>
          <div className="text_position">
            <Tabs defaultActiveKey="1" onChange={callback} className="" style={{ color: "white" }}>
              <TabPane tab="聚芒产品" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="聚芒宇宙" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="企业文化" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="加入我们" key="4">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="App下载" key="5">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
      <Home showEle={showEle} />
      <Product showEle={showEle} />
      <Culture showEle={showEle} />
      <Universe showEle={showEle}/>
      <Join showEle={showEle}/>
    </Fragment>
  );
}

export default App;
