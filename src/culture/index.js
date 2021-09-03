import { Fragment } from 'react';
// import { Tabs } from 'antd';
import './index.css'



export default (prop) => {
    return (
        <Fragment>
            <div style={{ display: prop.showEle == 3 ? 'block' : 'none' }}>
                <div className="container_culture">
                    
                </div>
            </div>
        </Fragment>
    );
}
