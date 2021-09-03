import logo from './images/logo.png'
import group160 from './images/group160.png'
import group161 from './images/group161.png'
import group162 from './images/group162.png'
import group165 from './images/group165.png'
import group165copy from './images/group165copy.png'
import group160_back from './images/group160_back.png'
import group161_back from './images/group161_back.png'
import group162_back from './images/group162_back.png'
import group165_back from './images/group165_back.png'
import group165copy_back from './images/group165copy_back.png'
import star_logo from './images/star_logo.png'
import action from './images/action.png'
import campus from './images/campus.png'
import campus_day from './images/campus_day.png'
import campus_star from './images/campus_star.png'
import organization from './images/organization.png'
import action_back from './images/action_back.png'
import campus_back from './images/campus_back.png'
import campus_day_back from './images/campus_day_back.png'
import campus_star_back from './images/campus_star_back.png'
import organization_back from './images/organization_back.png'
import arrow_down from './images/arrow_down.png'
import previous from './images/previous.png'
import previous1 from './images/previous1.png'
import next from './images/next.png'
import next1 from './images/next1.png'
import address from './images/address.png'
import address_detail from './images/address_detail.png'
import phone from './images/phone.png'
import email from './images/email.png'
import './index.css'
import { useState } from 'react'

export default (prop) => {
    const [index, setIndex] = useState(1);
    function changeIndex() {
        setIndex(2)
    }
    function changeIndex_() {
        setIndex(3)
    }
    return (
        <div style={{ display: prop.showEle == 1 ? "block" : "none" }}>
            <div className="wrapper_product">
                <div className="container_product" style={{ display: index == 1 ? "block" : "none" }}>
                    <div className="banner_product">
                        <div className="banner_product_header">
                            <div className="banner_product_img">
                                <img src={star_logo} alt="聚芒智校"></img>
                            </div>
                            <div className="banner_product_text">
                                <div style={{ justifyItems: 'center' }}>
                                    <p className="smart">100000+高校学生聚集地</p>
                                    <p className="smart_">以年轻热爱让世界发光</p>
                                    <p className="smart_">大学生数字化成长社区</p>
                                </div>
                            </div>
                        </div>
                        <div className="banner_product_body" style={{ paddingTop: "56px" }}>
                            <div className="banner_product_star">
                                <div className="campus_day">
                                    <img className="rotate" src={campus_day} alt="校园日程"></img>
                                    <img className="rotate_back" src={campus_day_back} alt="校园日程"></img>
                                </div>
                                <div className="action">
                                    <img className="rotate" src={action} alt="活动管理"></img>
                                    <img className="rotate_back" src={action_back} alt="活动管理"></img>
                                </div>
                                <div className="action">
                                    <img className="rotate" src={organization} alt="组织管理"></img>
                                    <img className="rotate_back" src={organization_back} alt="组织管理"></img>
                                </div>
                                <div className="action">
                                    <img className="rotate" src={campus_star} alt="院系星球"></img>
                                    <img className="rotate_back" src={campus_star_back} alt="院系星球"></img>
                                </div>
                                <div className="action">
                                    <img className="rotate" src={campus} alt="校园圈子"></img>
                                    <img className="rotate_back" src={campus_back} alt="校园圈子"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arrows_product">
                    <div className="arrows_pervious" style={{ display: index == 3 ? "none" : "block" }}>
                        <div className="arrows_img">
                            <img src={previous}></img>
                            <img src={next}></img>
                        </div>
                    </div>
                    <div style={{ display: index == 1 ? "block" : "none" }}>
                        <img src={arrow_down} onClick={changeIndex}></img>
                    </div>
                    <div style={{ display: index == 2 ? "block" : "none" }}>
                        <img src={arrow_down} onClick={changeIndex_}></img>
                    </div>
                </div>
                <div className="container_product" style={{ display: index == 2 ? "block" : "none" }}>
                    <div className="banner_product">
                        <div className="banner_product_header">
                            <div className="banner_product_img">
                                <img src={logo} alt="聚芒智校"></img>
                            </div>
                            <div className="banner_product_text">
                                <div>
                                    <p className="smart">智慧校园开放平台</p>
                                    <p className="smart_">数字化学生组织管理系统</p>
                                    <p className="smart_">校园活动智能发布管理系统</p>
                                    <p className="smart_">第二课堂成绩单网络管理系统</p>
                                </div>
                            </div>
                        </div>
                        <div className="banner_product_body" style={{ paddingTop: "56px" }}>
                            <div className="banner_product_star">
                                <div className="campus_day">
                                    <img className="rotate" src={group160} alt="校园日程"></img>
                                    <img className="rotate_back" src={group160_back} alt="校园日程"></img>
                                </div>
                                <div className="action">
                                    <img className="rotate" src={group161} alt="活动管理"></img>
                                    <img className="rotate_back" src={group161_back} alt="活动管理"></img>
                                </div>
                                <div className="action">
                                    <img className="rotate" src={group162} alt="组织管理"></img>
                                    <img className="rotate_back" src={group162_back} alt="组织管理"></img>
                                </div>
                                <div className="action">
                                    <img className="rotate" src={group165} alt="院系星球"></img>
                                    <img className="rotate_back" src={group165_back} alt="院系星球"></img>
                                </div>
                                <div className="action">
                                    <img className="rotate" src={group165copy} alt="校园圈子"></img>
                                    <img className="rotate_back" src={group165copy_back} alt="校园圈子"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container_product" style={{ display: index == 3 ? "block" : "none" }}>
                    <div className="banner_product">
                        <div className="contact_us">
                            <p>CONTACT US</p>
                            <p>联络方式</p>
                            <div></div>
                        </div>
                        <div className="contact_us_middle">
                            <div className="contact_us_middle_flex">
                                <p>E：ch@dreamoncampus.com</p>
                                <img src={email} alt="邮箱" style={{ marginLeft: '34px' }}></img>
                            </div>
                            <div className="contact_us_middle_address">
                                <img src={address_detail} alt="地址"></img>
                            </div>
                            <div className="contact_us_middle_flex">
                                <img src={email} alt="电话" style={{ marginRight: '34px' }}></img>
                                <p>T：+86-15585162023</p>
                            </div>
                        </div>
                        <div className="contact_us_foot">
                            <img src={address} alt="地址"></img>
                            <p>公司地址：贵州省·贵阳市观山湖区金融城MIX13栋</p>
                            <p>客服人员：聚小芒</p>
                            <p>备案号：000000000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}