import React from "react";
import "../style.css";
import { VscPassFilled } from "react-icons/vsc";
import { HiPhone } from 'react-icons/hi'
const MarketingAnalytics = () => {
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
                            src="https://www.hubspot.com/hs-fs/hubfs/Marketing-analytics-hero.png?width=2380&height=1294&name=Marketing-analytics-hero.png"
                            alt="first"
                            className="first-img"
                        />
                    </div>
                    <div className="contentdiv">
                        <h1 className="heading">Marketing Analytics & Dashboard Software</h1>
                        <p className="description">
                        Measure the performance of all your marketing campaigns in one place with built-in analytics, reports, and dashboards.
                        </p>
                        <br />
                        <button className="mydarkbtn">Get started free</button>
                        <div className="tickandtext">
                            <VscPassFilled className="tick small" />
                            <p className="ticktext">Identify top-performing assets across the buyer’s journey</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick medium" />
                            <p className="ticktext">Check site performance and measure traffic</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick large" />
                            <p className="ticktext">Analyze reports across several marketing channels</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='contain'>
                    <div className='textdiv'>
                        <h1 className='header'>Analyze marketing performance in one easy-to-use dashboard.</h1>
                        <p className='para'>Marketers have access to more data than ever before. But that data is hard to analyze when it lives in separate systems. It can be a challenge to track performance and get campaign insights.</p>
                        <p className='para'>Start making smarter, data-backed decisions with HubSpot’s marketing analytics and dashboard software. See how marketing interactions drive revenue, track site analytics, and get detailed reports for all your marketing channels.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/analyze-marketing-performance-en.png" className='toolimg' alt="HubSpot forms tool showing various form types" />
                    </div>
                </div>

            </div>

            <div className="top">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/analytics-behavior-1.webp"
                            className="formimg"
                            alt="custom forms tool showing various form types"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="crmhead">
                        Track the complete customer lifecycle.
                        </h1>
                        <p className="txt">
                        See how every marketing interaction contributes to closed revenue. Build reports that analyze your CRM data to discover key trends. Track the actions of your website visitors to understand behavior and trigger automation workflows. Use multi-touch revenue attribution to map how marketing touchpoints work together to drive revenue.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mysection'>
                <div className='containing'>
                    <div className='contdiv'>
                        <h1 className='myhead'>Analyze website performance metrics.</h1>
                        <p className='par'>To create a great web experience, you need to know how visitors are interacting with your site. Measure traffic to your website and check its quality based on interactions. Analyze how each of your pages is performing, compare key metrics like sessions and conversion rates, and find out which traffic sources bring in the most sessions and customers over time.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/traffic-anaytics.webp" className='mypic' alt="Module various form types" />
                    </div>
                </div>
            </div>

            <div className="mysection">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/lead-generation-dashboard-1.webp"
                            className="myformimg"
                            alt="forms showing setup"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="fuphead">
                        Get detailed marketing reports.
                        </h1>
                        <p className="fuptxt">
                        With HubSpot, analytics are built into everything you do, right out of the box. Have all the data you need to make smarter, data-driven decisions as you grow. See detailed reports for every marketing asset, from your website to emails, blog posts, social media, and more. Then add any report to your dashboard to track everything in one place.
                        </p>
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
                If you’re interested in marketing analytics, these related resources may help.
                </p>
                <div className="cardsdiv">
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/analytics-in-marketing.png?width=350&name=analytics-in-marketing.png" alt="How to Create Forms" />
                        <h3>Academy Lesson: Analytics in Marketing</h3>
                        <p className="cardtxt">Master how to measure and analyze data and metrics to understand the impact of your marketing activities.</p>
                        <a href="/">Learn marketing analytics</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/digital-marketing-analytics.png?width=350&name=digital-marketing-analytics.png" alt="How to Create Forms" />
                        <h3>Blog: Web Analytics and Digital Marketing Analytics</h3>
                        <p className="cardtxt">Learn how to use digital marketing analytics to turn your business objectives into measurable outcomes.</p>
                        <a href="/">Read analytics blog</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/site-traffic.png?width=350&name=site-traffic.png" alt="How to Create Forms" />
                        <h3>Knowledge Base Article: Analyze Your Site Traffic</h3>
                        <p className="cardtxt">Use HubSpot's traffic analytics tool to view website traffic data.</p>
                        <a href="/">Learn traffic analytics</a>
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
                <p className='ptext'>Email template builder is available in Sales Hub. Explore additional Sales Hub features below.</p>
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

export default MarketingAnalytics;
