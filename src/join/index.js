import { Fragment } from 'react';
// import { Tabs } from 'antd';
import './index.css'



export default (prop) => {
    return (
        <Fragment>
            <div style={{ display: prop.showEle == 4 ? 'block' : 'none' }}>
                <div className="container_culture">
                    <h1 style={{color:'white'}}>加入我们</h1>
                </div>
            </div>
        </Fragment>
    );
}
