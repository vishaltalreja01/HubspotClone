import React from "react";
import "../style.css";
import { VscPassFilled } from "react-icons/vsc";
import { HiPhone } from 'react-icons/hi'
const FreeLiveChatSoftware = () => {
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
                            src="https://www.hubspot.com/hs-fs/hubfs/Imported%20sitepage%20images/LiveChat-1.png?width=1170&height=658&name=LiveChat-1.png"
                            alt="first"
                            className="first-img"
                        />
                    </div>
                    <div className="contentdiv">
                        <h1 className="heading">Free Live Chat Software</h1>
                        <p className="description">
                        Connect with your website visitors in real time to convert new leads, close more deals, and provide better support to your customers.
                        </p>
                        <br />
                        <button className="mydarkbtn">Get started free</button>
                        <div className="tickandtext">
                            <VscPassFilled className="tick small" />
                            <p className="ticktext">Route leads and customers to the right person on your team</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick medium" />
                            <p className="ticktext">Use chat automation to deliver fast responses to common questions</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick large" />
                            <p className="ticktext">Provide real-time customer support while on the go</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='contain'>
                    <div className='textdiv'>
                        <h1 className='header'>Engage website visitors on their terms with live chat.</h1>
                        <p className='para'>Today’s buyers want information—and they want it now. Use live chat to automatically connect chatters to the right people on your team, route customer inquiries to your services team, and pass leads to the sales team.</p>
                        <p className='para'>Easily customize your live chat widget to match the look and feel of your brand, and create targeted welcome messages for different web pages or segments of your audience.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Live%20chat/engage-website-visitors-live-chat-en.png" className='toolimg' alt="HubSpot forms tool showing various form types" />
                    </div>
                </div>

            </div>

            <div className="top">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Live%20chat/automate-with-chatbots-en.png"
                            className="formimg"
                            alt="custom forms tool showing various form types"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="crmhead">
                        Automate busy work with chatbots.
                        </h1>
                        <p className="txt">
                        Make it easier for your team to have unlimited, personalized conversations at scale. HubSpot’s live chat tool is fully integrated with a chatbot builder that you can start using for free — no coding required.
                        </p>
                        <p className="txt">
                        Easily create bots that help you qualify leads, book meetings, provide answers to common questions, and more.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mysection'>
                <div className='containing'>
                    <div className='contdiv'>
                        <h1 className='myhead'>Give your team the context they need.</h1>
                        <p className='par'>Each chat conversation is automatically stored in a universal inbox on HubSpot’s free CRM, giving your team complete context and a clear view of every prospect or customer interaction.</p>
                        <p className='par'>Respond to chats, take notes, send emails, make calls, schedule follow-up tasks, create support tickets, and more — all from the conversations inbox.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Live%20chat/live-chat-team-context-en.png" className='mypic' alt="Module various form types" />
                    </div>
                </div>
            </div>

            <div className="mysection">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/Imported%20sitepage%20images/ConversationsSlack.png"
                            className="myformimg"
                            alt="forms showing setup"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="fuphead">
                        Have chat conversations on the go.
                        </h1>
                        <p className="fuptxt">
                        Out of the office? No problem. Use HubSpot’s free Slack integration to get live chat notifications, respond directly via Slack, or carry out conversations using the HubSpot mobile app.
                        </p>
                        <p className="fuptxt">
                        Set chat office hours so site visitors know when you’re available to chat, and set up email capture so you can follow up on any chat requests you missed.
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
                If you’re interested in live chat software, these related resources may help.
                </p>
                <div className="cardsdiv">
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/young-male-using-tablet.png?width=350&name=young-male-using-tablet.png" alt="How to Create Forms" />
                        <h3>What is Live Chat?</h3>
                        <p className="cardtxt">Learn more about live chat and the benefits for both you and your customers.</p>
                        <a href="/">Why you need live chat</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/woman-thinking-pencil.png?width=350&name=woman-thinking-pencil.png" alt="How to Create Forms" />
                        <h3>How To Create a Live Chat</h3>
                        <p className="cardtxt">Read our knowledge base article to learn how to create a chatflow with live chat to connect visitors with your team.</p>
                        <a href="/">Set up your first chatflow</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/asian-male-using-hubspot-free.png?width=350&name=asian-male-using-hubspot-free.png" alt="How to Create Forms" />
                        <h3>How To Chat With Your Website Visitors</h3>
                        <p className="cardtxt">Find out how to set up your chat profile and respond to incoming chats in the conversations inbox. </p>
                        <a href="/">Get started with chat</a>
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

export default FreeLiveChatSoftware;
