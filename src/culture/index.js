import { Fragment } from 'react';
// import { Tabs } from 'antd';
import './index.css'



export default (prop) => {
    const [index, setIndex] = useState(1);
    function changeIndex() {
        setIndex(2)
    }
    function changeIndex_() {
        setIndex(3)
    }
    return (
        <Fragment>
            <div style={{ display: prop.showEle == 3 ? 'block' : 'none' }}>
                <div className="container_culture" style={{display:index == 1? "block":"none"}}>
                    <div className="container_intro">
                        <div className="container_intro_intro">
                            <div>
                                <h1>公司简介</h1>
                                <p>2018年，我们启程互联网，致力于为高校学生组织提供更为便捷的线上活动管理服务，匹配新时代用户生活方式，并满足互联网时代高校学</p>
                            </div>
                        </div>
                        <div className="container_intro_detail">
                            <div>
                                <h3>企业使命——以年轻的热爱创造时代</h3>
                                <p>聚芒科技希望通过将有共同兴趣爱好、有共同目标的人聚集起来，让他们在校园活动中找到自己的“知音”，相互影响、共同进步，并通过数据</p>
                                <div style={{display:'flex'}}>
                                    <img></img>
                                    <div>
                                        <img></img>
                                        <img></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container_intro_img">
                        <div className="container_intro_img_detail">
                            <img></img>
                            <div className="container_intro_img_font">
                                <p>聚芒星球博物馆</p>
                                <p>聚芒星系博物馆(DREAMON MUSUEM)位于聚芒星系主星体的DOC广场中。在DOC星球里，每...个伟大的瞬间和让人欣喜</p>
                            </div>
                        </div>
                        <div className="container_intro_img_detail">
                            <img></img>
                            <div className="container_intro_img_font">
                                <p>《2020贵州高校星球领航交流会》</p>
                                <p>今天聚芒星球来了好多新朋友，不对应该是最熟悉的新朋友们。在贵州召集高校领航员的半年...里，我们一共认识了上百位领航员，他们都</p>
                            </div>
                        </div>
                        <div className="container_intro_img_detail">
                            <img></img>
                            <div className="container_intro_img_font">
                                <p>《贵州高校开学季 “聚芒返校快线”免 费接送600学子返校》</p>
                                <p>我国15岁以下的留守儿童约有1000万人，这个...</p>
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
                <div className="container_culture" style={{display:index == 2? "block":"none"}}>
                    <div className="container_intro_img">
                        <div className="container_intro_img_detail">
                            <img></img>
                            <div className="container_intro_img_font">
                                <p>聚芒星球博物馆</p>
                                <p>聚芒星系博物馆(DREAMON MUSUEM)位于聚芒星系主星体的DOC广场中。在DOC星球里，每...个伟大的瞬间和让人欣喜</p>
                            </div>
                        </div>
                        <div className="container_intro_img_detail">
                            <img></img>
                            <div className="container_intro_img_font">
                                <p>《2020贵州高校星球领航交流会》</p>
                                <p>今天聚芒星球来了好多新朋友，不对应该是最熟悉的新朋友们。在贵州召集高校领航员的半年...里，我们一共认识了上百位领航员，他们都</p>
                            </div>
                        </div>
                        <div className="container_intro_img_detail">
                            <img></img>
                            <div className="container_intro_img_font">
                                <p>《贵州高校开学季 “聚芒返校快线”免 费接送600学子返校》</p>
                                <p>我国15岁以下的留守儿童约有1000万人，这个...</p>
                            </div>
                        </div>
                    </div>
                    <div className="container_intro_img">
                        <div className="container_intro_img_detail">
                            <img></img>
                            <div className="container_intro_img_font">
                                <p>2021聚芒校园特别公益活动</p>
                                <p>我国15岁以下的留守儿童约有1000万人，这个数字在现在看来，还是这么的不可思议。到底乡...</p>
                            </div>
                        </div>
                        <div className="container_intro_img_detail">
                            <img></img>
                            <div className="container_intro_img_font">
                                <p>聚芒高校活动战 搭建跨区域校园活动交 流平台</p>
                                <p>​5月，聚芒校园官方发起了为全国高校学生组织...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container_culture" style={{display:index == 3? "block":"none"}}>
                    <div className="container_culture_brief_blue">
                        <div className="container_culture_brief_title">
                            <h1>公司简介</h1>
                            <p>2018年，我们启程互联网，致力于为高校学生组织提供更为便捷的线上活动管理服务，匹配新时代用户生活方式，并满足互联网时代高校学生对数据管理服务的更高要求。 2018年9月，聚芒校园旗下第一款产品上线，在经历两年时间的经验总结与打磨，最开始的小程序如今已衍生出多条产品线。在服务高校学生组织的同时，也希望能够让各高校以更智能的数字化方式管理校园，在学生与老师之间建立更为便捷的沟通桥梁，丰富学生的课外生活方式，并构建健康积极的社交空间。 我们坚信少年眼中的光不会随着时间流逝与年龄的成长而消散，志同道合的引路人与伙伴将成为他们成功路上的不竭动力。 感谢有你的加入，让我们一起敢做梦，并圆梦!</p>
                        </div>
                    </div>
                    <div className="container_culture_brief_purple">
                        <div className="container_culture_brief_title">
                            <h1>企业使命——让大学生以热爱的一切创造时代</h1>
                            <p>贵州聚芒科技有限公司一直致力于帮助高校学生成长，希望每一位热爱生活怀揣梦想的少年，在追逐梦想的过程中不断挑战和锻炼自己，并将自己的热爱变成未来职业的一部分。在聚芒的陪伴下，高校学生能够以准备充足的良好姿态踏入社会，完成学校到与社会接轨的过渡期，用自己所热爱的一切去创造属于他们的时代。</p>
                        </div>
                    </div>
                    <div className="container_culture_brief_purple_flex">
                        <div className="container_culture_brief_purple_flex_first">
                            <div>
                                <h3>企业价值观——尊重每一个年轻的想法</h3>
                                <p>年轻的生命力是稚嫩却又旺盛的，成熟不及年长者，感触不及涉世人，但年轻的想法一定无用吗？年轻的想法或许不足以解燃眉之急，但却可能将众人引向新的天地，换一个新方式思考，也许便豁然开朗。每一个年轻的想法都有可能孵化出美好的事物，无论是否接受，请先尊重，因为年轻想法所爆发的生命力永远是不可限量的。</p>
                            </div>
                        </div>
                        <div className="container_culture_brief_purple_flex_second">
                            <div>
                                <h3>企业价值观——足够自信，充分信任</h3>
                                <p>自信的人才能够获得他人的信任，足够的自信是对自己的准确认可，在自信的状态下才能够更好的表达自己的观点和想法，同时，信任是团队合作的基础，充分信任同事，才能更好地配合工作，团队才能够前进。</p>
                            </div>
                        </div>
                    </div>
                    <div className="container_culture_brief_purple_flex_three">
                        <div className="container_culture_brief_purple_">
                            <div>
                                <h3>企业价值观——遇到问题，解决问题</h3>
                                <p>团队强调高效与配合，我们希望团队的所有成员在遇到困难时，不是选择推卸责任或搁置一旁，而是在第一时间主动解决问题。</p>
                            </div>
                        </div>
                        <div className="container_culture_brief_purple_">
                            <div>
                                <h3>企业价值观——保持年轻视角 理性思考</h3>
                                <p>世界瞬息万变，稍有不慎，便会屈于下风。思绪紧跟时代发展同时，时刻保持年轻视角，不断更新自己的观念和思想，拓宽自己的眼界，并保持理性客观的态度严于己，以高效面对工作。</p>
                            </div>
                        </div>
                        <div className="container_culture_brief_purple_">
                            <div>
                                <h3>企业价值观——在乎赢更要在乎怎么赢</h3>
                                <p>企业承担着社会责任，而个人所为也应有一条道德准则作为前行路上的底线，知晓何所为、何所不为。赢的结果固然重要，但通往结果的道路却更加重要。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
