import React from "react";
import "../style.css";
import { VscPassFilled } from "react-icons/vsc";
import { HiPhone } from 'react-icons/hi'
const FreeLandingPageBuilder = () => {
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
                            src="https://www.hubspot.com/hs-fs/hubfs/lp-hero.png?width=820&height=657&name=lp-hero.png"
                            alt="first"
                            className="first-img"
                        />
                    </div>
                    <div className="contentdiv">
                        <h1 className="heading">Free Landing Page Builder</h1>
                        <p className="description">
                        Create and test beautiful landing pages that generate leads and look great on any device — no designers or IT help required.
                        </p>
                        <br />
                        <button className="mydarkbtn">Get started free</button>
                        <div className="tickandtext">
                            <VscPassFilled className="tick small" />
                            <p className="ticktext">Build beautiful, personalized landing pages all by yourself</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick medium" />
                            <p className="ticktext">Easily convert website visitors into leads</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick large" />
                            <p className="ticktext">Optimize your landing pages with conversion analytics and SEO suggestions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='contain'>
                    <div className='textdiv'>
                        <h1 className='header'>Launch professional landing pages in seconds.</h1>
                        <p className='para'>Ready to generate more traffic and leads from your website? With HubSpot’s free landing page builder, you can easily build professional landing pages that attract more visitors and convert them into qualified business leads — no designers or IT help required.</p>
                        <p className='para'>Use landing pages to support new product launches, drive event registrations, and more — then watch your CRM database fill up with interested prospects you can sell to.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/lp-drag-drop.png" className='toolimg' alt="HubSpot forms tool showing various form types" />
                    </div>
                </div>

            </div>

            <div className="top">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/Choose-a-template-landing-page-screenshot-for-value-prop-module-1.png"
                            className="formimg"
                            alt="custom forms tool showing various form types"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="crmhead">
                        Create and publish new landing pages in no time.
                        </h1>
                        <p className="txt">
                        Quickly design and launch custom landing pages without technical expertise. Choose from a library of mobile-optimized templates proven to convert, or build pages in a snap with the drag-and-drop editor. Preview how your page looks on different devices before publishing. Then watch the leads roll in.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mysection'>
                <div className='containing'>
                    <div className='contdiv'>
                        <h1 className='myhead'>Personalize landing page content for individual visitors.</h1>
                        <p className='par'>Give visitors the best experience possible by tailoring landing page content to them. Dynamically show different content based on a visitor’s location, device, lifecycle stage, or contact detail stored in your CRM. Gather more information with dynamic forms that never ask the same question twice.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/add-smart-rule-landing-page-screenshot-value-prop-2.png" className='mypic' alt="Module various form types" />
                    </div>
                </div>
            </div>

            <div className="mysection">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/landing-page-analytics-page-views-value-prop3.png"
                            className="myformimg"
                            alt="forms showing setup"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="fuphead">
                        Analyze, test, and optimize landing page performance.
                        </h1>
                        <p className="fuptxt">
                        Use a centralized dashboard to identify your top-performing landing pages. Test page variations against each other and have HubSpot automatically choose the winner. Drive more leads by running tests on every element, including headlines, images, and more. Then use custom SEO suggestions to optimize each page for search.
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
                If you’re interested in landing page software, these related resources may help.
                </p>
                <div className="cardsdiv">
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/people-setting-up-meetings-1.webp?width=350&name=people-setting-up-meetings-1.webp" alt="How to Create Forms" />
                        <h3>The Ultimate Guide to Landing Pages</h3>
                        <p className="cardtxt">Learn how to design, write, and optimize landing pages that convert visitors into leads. </p>
                        <a href="/">Read the guide to landing pages</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/share-meeting-1-1.jpg?width=350&name=share-meeting-1-1.jpg" alt="How to Create Forms" />
                        <h3>Landing Page Experiments</h3>
                        <p className="cardtxt">Browse different approaches to landing page testing to help you identify new opportunities for yours. </p>
                        <a href="/">Read about landing page testing</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/team-2.webp?width=350&name=team-2.webp" alt="How to Create Forms" />
                        <h3>Best Landing Page Examples</h3>
                        <p className="cardtxt">Use this list of best landing page examples to find inspiration for your next page. </p>
                        <a href="/">Browse landing page examples</a>
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

export default FreeLandingPageBuilder;
