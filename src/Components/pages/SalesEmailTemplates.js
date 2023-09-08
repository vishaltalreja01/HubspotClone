import React from "react";
import "../style.css";
import { VscPassFilled } from "react-icons/vsc";
import { HiPhone } from 'react-icons/hi'
const SalesEmailTemplates = () => {
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
                            src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/email-templates-sales/email-template-hero-en.png?width=1280&height=813&name=email-template-hero-en.png"
                            alt="first"
                            className="first-img"
                        />
                    </div>
                    <div className="contentdiv">
                        <h1 className="heading">Free Email Template Builder</h1>
                        <p className="description">
                        Close more deals by turning your best emails into templates you can personalize and share with your team.
                        </p>
                        <br />
                        <button className="mydarkbtn">Get started free</button>
                        <div className="tickandtext">
                            <VscPassFilled className="tick small" />
                            <p className="ticktext">Share templates with your team to build on prior successes</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick medium" />
                            <p className="ticktext">Personalize & send sales emails via Outlook, Office 365, or Gmail</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick large" />
                            <p className="ticktext">Report on email open rates, link click-throughs, and attachment downloads</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='contain'>
                    <div className='textdiv'>
                        <h1 className='header'>Send more sales emails in less time.</h1>
                        <p className='para'>Writing a relevant sales email can take hours. Repeating that process for multiple prospects can eat up your entire week. </p>
                        <p className='para'>With HubSpot, you can quickly build email templates using an intuitive interface and pre-made designs. Customize each template to match your brand and content needs. When you’re ready to contact prospects, personalize and send each email in seconds directly within your inbox.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/email-templates-sales/sales-email-template-en.png" className='toolimg' alt="HubSpot forms tool showing various form types" />
                    </div>
                </div>

            </div>

            <div className="top">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/email-templates-sales/successful-email-templates-en.png"
                            className="formimg"
                            alt="custom forms tool showing various form types"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="crmhead">
                        Turn successful emails into reusable templates.
                        </h1>
                        <p className="txt">
                        Constantly churning out new email content and designs can strain your team’s bandwidth. Instead of repeating the same process multiple times, replicate the success of prior emails by turning them into customizable templates that can easily be shared with your team.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mysection'>
                <div className='containing'>
                    <div className='contdiv'>
                        <h1 className='myhead'>Optimize email templates with built-in reporting.</h1>
                        <p className='par'>With HubSpot’s email template builder, you get real-time insight into email open rates, attachment clicks, and more. You can then use those metrics to determine which templates perform best and double-down on the content that converts.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/email-templates-sales/templates-reporting-en.png" className='mypic' alt="Module various form types" />
                    </div>
                </div>
            </div>

            <div className="mysection">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/email-templates-sales/personalize-one-on-one-emails-en.png"
                            className="myformimg"
                            alt="forms showing setup"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="fuphead">
                        Personalize your one-on-one emails at scale.
                        </h1>
                        <p className="fuptxt">
                        Keep your prospects engaged by tailoring the content in your email templates. Easily add personalization tokens, relevant sales documents, and meeting links. Or include a personalized video through the built-in Vidyard integration
                        </p>
                    </div>
                </div>
            </div>
            <div className='mysection'>
                <div className='containing'>
                    <div className='contdiv'>
                        <h1 className='myhead'>Send email templates from your inbox.</h1>
                        <p className='par'>HubSpot’s email template builder is compatible with the apps your team already uses, so you can see and send templates straight from your inbox. Personalize and send sales emails from your email platform of choice — Gmail, Google Workspace, Outlook, or Office 365.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/email-templates-sales/send-emails-from-inbox-en.png" className='mypic' alt="Module various form types" />
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
                If you’re interested in email template builder, these related resources may help.
                </p>
                <div className="cardsdiv">
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/woman-holding-keyboard.png?width=350&name=woman-holding-keyboard.png" alt="How to Create Forms" />
                        <h3>Email Marketing Guide</h3>
                        <p className="cardtxt">Learn email marketing best practices in this free guide, from strategy to list-building to tracking.</p>
                        <a href="/">Get the email marketing guide</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/young-man-laptop.png?width=350&name=young-man-laptop.png" alt="How to Create Forms" />
                        <h3>Email Templates Guide</h3>
                        <p className="cardtxt">Learn how to personalize one-on-one emails at scale with this in-depth guide on sales email templates.</p>
                        <a href="/">Learn more about sales templates</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/woman-table-email-tracking.png?width=350&name=woman-table-email-tracking.png" alt="How to Create Forms" />
                        <h3>25 Free Sales Email Templates</h3>
                        <p className="cardtxt">Find inspiration for your next sales email with these free templates that actually convert.</p>
                        <a href="/">Download sales email templates</a>
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

export default SalesEmailTemplates;
