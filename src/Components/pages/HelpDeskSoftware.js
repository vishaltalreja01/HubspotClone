import React from "react";
import "../style.css";
import { VscPassFilled } from "react-icons/vsc";
import { HiPhone } from 'react-icons/hi'
const HelpDeskSoftware = () => {
    return (
        <>
            {/* <Navbar/> */}
            <div className="main flex flex-col">
                <a href="/" className="link">
                    &lt; Marketing Hub{" "}
                </a>
                <span className="text">Free Help Desk & Ticketing Software</span>
                <div className="doublediv">
                    <div className="img-div">
                        <img
                            src="https://www.hubspot.com/hs-fs/hubfs/Germany/Blog_images/Tickets%20board%20view.png?width=1967&height=1302&name=Tickets%20board%20view.png"
                            alt="first"
                            className="first-img"
                        />
                    </div>
                    <div className="contentdiv">
                        <h1 className="heading">Free Help Desk & Ticketing Software</h1>
                        <p className="description">
                        Keep track of customer requests in one unified help desk that connects to your CRM database.
                        </p>
                        <br />
                        <button className="mydarkbtn">Get started free</button>
                        <div className="tickandtext">
                            <VscPassFilled className="tick small" />
                            <p className="ticktext">Provide personalized support to your customers</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick medium" />
                            <p className="ticktext">Save time, reduce errors, and streamline service processes</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick large" />
                            <p className="ticktext">Measure effectiveness and improve team performance</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='contain'>
                    <div className='textdiv'>
                        <h1 className='header'>Efficient and effective customer support management.</h1>
                        <p className='para'>As your customer base grows, it becomes easier to let customer issues slip through the cracks. Emails get lost, spreadsheets become unmanageable, and customers suffer.</p>
                        <p className='para'>With HubSpot’s ticketing system, you can efficiently resolve issues to exceed your customers’ expectations. And because the ticketing system is connected to the rest of the HubSpot CRM platform, you can keep track of everything in one place.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/SalesHub_Send-payment-through-email.png" className='toolimg' alt="HubSpot forms tool showing various form types" />
                    </div>
                </div>

            </div>

            <div className="top">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/SalesHub_Conversations_with%20frame.png"
                            className="formimg"
                            alt="custom forms tool showing various form types"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="crmhead">
                        Log and organize tickets all in one place.
                        </h1>
                        <p className="txt">
                        With HubSpot’s ticketing system, you can record, organize, and track all your customers’ issues in one dashboard. Then keep track of key support metrics like agent response time, ticket volume, and more, so you can effectively manage customer demand, and coach your support team to be successful.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mysection'>
                <div className='containing'>
                    <div className='contdiv'>
                        <h1 className='myhead'>Automate and optimize your customer support.</h1>
                        <p className='par'>HubSpot’s ticketing tools include routing and automation features to create efficiencies. With HubSpot, your team can spend less time on help desk management and manual data entry, and more time helping customers succeed.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/ServiceHub_Ticket-resolution-workflow.png" className='mypic' alt="Module various form types" />
                    </div>
                </div>
            </div>

            <div className="mysection">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/ServiceHub_Shared-inbox.png"
                            className="myformimg"
                            alt="forms showing setup"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="fuphead">
                        Conversations powered by your CRM.
                        </h1>
                        <p className="fuptxt">
                        As a seamless component of your HubSpot CRM database, the help desk tool also displays helpful information about customers' history, product details, service issues, and more. That way, your team has all the right context to deliver helpful, personalized support to each and every customer — faster.
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
                If you’re interested in help desk software, these related resources may help.
                </p>
                <div className="cardsdiv">
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/asian-male-using-hubspot-free.png?width=350&name=asian-male-using-hubspot-free.png" alt="How to Create Forms" />
                        <h3>Understanding the Help Desk Tool</h3>
                        <p className="cardtxt">In this HubSpot Academy lesson, learn how to create a frictionless customer experience using the help desk tool.</p>
                        <a href="/">Watch the lesson</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/woman-holding-circles-orange.png?width=350&name=woman-holding-circles-orange.png" alt="How to Create Forms" />
                        <h3>How to Create Tickets</h3>
                        <p className="cardtxt">Learn about all the different ways to create tickets in HubSpot.</p>
                        <a href="/">Read the article</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/young-male-using-tablet.png?width=350&name=young-male-using-tablet.png" alt="How to Create Forms" />
                        <h3>Keys to Help Desk Success</h3>
                        <p className="cardtxt">Follow these 13 key steps for successful help desk management.</p>
                        <a href="/">Read the blog post</a>
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

export default HelpDeskSoftware;
