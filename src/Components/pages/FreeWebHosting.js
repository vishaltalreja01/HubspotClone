import React from "react";
import "../style.css";
import { VscPassFilled } from "react-icons/vsc";
import { HiPhone } from 'react-icons/hi'
const FreeWebHosting = () => {
    return (
        <>
            {/* <Navbar/> */}
            <div className="main flex flex-col">
                <a href="/" className="link">
                    &lt; Marketing Hub{" "}
                </a>
                <span className="text">Free Drag-and-Drop Website Builder</span>
                <div className="doublediv">
                    <div className="img-div">
                        <img
                            src="https://www.hubspot.com/hs-fs/hubfs/Hero%201-2.jpg?width=1188&height=756&name=Hero%201-2.jpg"
                            alt="first"
                            className="first-img"
                        />
                    </div>
                    <div className="contentdiv">
                        <h1 className="heading">Free Web Hosting</h1>
                        <p className="description">
                            Host your website on a fully managed and optimized infrastructure that scales with your business.
                        </p>
                        <br />
                        <button className="mydarkbtn">Get started free</button>
                        <div className="tickandtext">
                            <VscPassFilled className="tick small" />
                            <p className="ticktext">Free, fully managed hosting — no setup required</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick medium" />
                            <p className="ticktext">No hosting fees based on storage, traffic, or usage</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick large" />
                            <p className="ticktext">No need to integrate third-party hosting tools to get your website up and running</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='contain'>
                    <div className='textdiv'>
                        <h1 className='header'>Premium hosting — without the premium price tag.</h1>
                        <p className='para'>As you build your website, choosing a hosting solution is just as important as choosing your website builder. Hosting helps to ensure your content is secure and reliable when it reaches your customers. </p>
                        <p className='para'>HubSpot’s CMS software offers premium website hosting for free, without extra charges based on usage. You focus on creating great content. We'll take care of the infrastructure behind your website.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/Hosting-01.png" className='toolimg' alt="HubSpot forms tool showing various form types" />
                    </div>
                </div>

            </div>

            <div className="top">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/Hosting-03.png"
                            className="formimg"
                            alt="custom forms tool showing various form types"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="crmhead">
                        Host your website for free.
                        </h1>
                        <p className="txt">
                        The cost of all the tools you need to run your website can quickly add up, especially when you have to deal with different hosting providers, domain sellers, and CMS solutions. Save time, money, and resources by building your site on a single platform. HubSpot includes server management and web monitoring for free.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mysection'>
                <div className='containing'>
                    <div className='contdiv'>
                        <h1 className='myhead'>Secure your website for your business and your customers.</h1>
                        <p className='par'>A security threat could take down your website and impact your business’ reputation. With HubSpot, your site is automatically protected by 24/7 security and threat detection, SSL, and WAF, as well as a dedicated security team.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/Hosting-05.png" className='mypic' alt="Module various form types" />
                    </div>
                </div>
            </div>

            <div className="mysection">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/Asset-07.png"
                            className="myformimg"
                            alt="forms showing setup"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="fuphead">
                        Forget about manual monitoring with free, fully managed hosting.
                        </h1>
                        <p className="fuptxt">
                        Your business is too important to have a compromised website. If your website is down, your customers can’t do business with you. That’s why HubSpot takes care of managing your web hosting for you. You can focus on what you do best and we’ll take care of your website’s speed, stability, and security monitoring.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mysection'>
                <div className='containing'>
                    <div className='contdiv'>
                        <h1 className='myhead'>An all-in-one solution for your website.</h1>
                        <p className='par'>Third-party hosting providers include hidden fees and are difficult to set up and manage. HubSpot’s CMS software includes everything you need to publish and manage your business website in one place, so you can get back to growing your business.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/Hosting-08.png" className='mypic' alt="Module various form types" />
                    </div>
                </div>
            </div>
            <div className="contact">
                <p className="cont-text">Have questions? Give us a call and we'll walk you through it.</p>
                <HiPhone />
                <a href="/" >+1 857-829-5060</a>
            </div>


            <div className="start">
                <h2>Related Resources</h2>
                <p className="interested">
                If you’re interested in free web hosting, these related resources may help.
                </p>
                <div className="cardsdiv">
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/colorful-keyboards.png?width=350&name=colorful-keyboards.png" alt="How to Create Forms" />
                        <h3>The Ultimate Guide to Web Hosting</h3>
                        <p className="cardtxt">Learn everything there is to know about web hosting. </p>
                        <a href="/">Get the web hosting guide</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/orange-laptop.png?width=350&name=orange-laptop.png" alt="How to Create Forms" />
                        <h3>CMS Hub Platform & Hosting</h3>
                        <p className="cardtxt">Check out how HubSpot delivers a premium hosting solution for you and your customers.</p>
                        <a href="/">Learn more about CMS Hub hosting</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/yellow-notes.png?width=350&name=yellow-notes.png" alt="How to Create Forms" />
                        <h3>Developer Documentation</h3>
                        <p className="cardtxt">Read up on the technical features that support CMS Hub.</p>
                        <a href="/">Browse our developer documentation</a>
                    </div>
                </div>
            </div>

            <div className="topquest">
                <h2>Frequently Asked Questions</h2>
                <div className="boxes">
                    <div className="question-box">
                        <span className="greater">&gt;</span>
                        <p className="query">What is a form?</p>
                    </div>
                    <div className="question-box">
                        <span className="greater">&gt;</span>
                        <p className="query">What Types of forms can I build with HubSpot's form maker?</p>
                    </div>
                </div>
                <div className="boxes">
                    <div className="question-box">
                        <span className="greater">&gt;</span>
                        <p className="query">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic.?</p>
                    </div>
                    <div className="question-box">
                        <span className="greater">&gt;</span>
                        <p className="query">Lorem ipsum dolor sit amet consectetur?</p>
                    </div>
                </div>
                <div className="boxes">
                    <div className="question-box">
                        <span className="greater">&gt;</span>
                        <p className="query">Lorem ipsum dolor sit, amet consectetur adipisicing?</p>
                    </div>
                    <div className="question-box">
                        <span className="greater">&gt;</span>
                        <p className="query">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
                            cumque?
                        </p>
                    </div>
                </div>
                <div className="boxes">
                    <div className="question-box">
                        <span className="greater">&gt;</span>
                        <p className="query">Lorem ipsum dolor sit amet.?</p>
                    </div>
                    <div className="question-box">
                        <span className="greater">&gt;</span>
                        <p className="query">Lorem ipsum dolor sit amet.?</p>
                    </div>
                </div>
            </div>

            <div className='lasttop'>
                <h1>Popular Features in Marketing Hub</h1>
                <p className='ptext'>Free web hosting is available in CMS Hub. Explore additional CMS Hub features below.</p>
                <div className='carddiv'>
                    <div className='mybox'>
                        <a href="/" className='url'>Free Online Form Builder</a>
                        <p className='boxtext'>nesciunt, recusandae consequuntur dolorum ex sit perspiciatis maiores, in necessitatibus repellendus.</p>
                    </div>
                    <div className='mybox'>
                        <a href="/" className='url'>Free Online Form Builder</a>
                        <p className='boxtext'>nesciunt, recusandae consequuntur dolorum ex sit perspiciatis maiores, in necessitatibus repellendus.</p>
                    </div>
                    <div className='mybox'>
                        <a href="/" className='url'>Free Online Form Builder</a>
                        <p className='boxtext'>nesciunt, recusandae consequuntur dolorum ex sit perspiciatis maiores, in necessitatibus repellendus.</p>
                    </div>
                </div>
            </div>
            {/* <FooterSection/> */}
        </>
    );
};

export default FreeWebHosting;
