import { Fragment } from 'react';
// import { Tabs } from 'antd';
import arrow_down from '../home/images/arrow_down.png'
import './index.css'



function home(prop) {
    return (
        <Fragment>
            <div className="container" style={{ display: prop.showEle == 0 ? 'block' : 'none' }}>
                <div className="banner" style={{ display: 'flex' }}>
                    <div className="img_position">
                        {/* <img src={logo}></img> */}
                    </div>
                    <div className="arrows">
                        <div className="arrows_img">
                            <img src={arrow_down}></img>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default home;
