import React from "react";
import "../style.css";
import { VscPassFilled } from "react-icons/vsc";
import { HiPhone } from 'react-icons/hi'
const FreeChatbotBuilder = () => {
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
                            src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Live%20chat/automate-with-chatbots-en.png?width=1280&height=813&name=automate-with-chatbots-en.png"
                            alt="first"
                            className="first-img"
                        />
                    </div>
                    <div className="contentdiv">
                        <h1 className="heading">Free Chatbot Builder Software</h1>
                        <p className="description">
                        Qualify leads, book meetings, provide customer support, and scale your one-to-one conversations—all with chatbots.
                        </p>
                        <br />
                        <button className="mydarkbtn">Get started free</button>
                        <div className="tickandtext">
                            <VscPassFilled className="tick small" />
                            <p className="ticktext">Create chatbot sequences without any coding</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick medium" />
                            <p className="ticktext">Qualify leads and trigger email campaigns after chatbot interactions</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick large" />
                            <p className="ticktext">Personalize chat replies with contact data pulled from HubSpot’s CRM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='contain'>
                    <div className='textdiv'>
                        <h1 className='header'>Use chatbots to connect with website visitors</h1>
                        <p className='para'>Your website visitors, prospects, and customers expect to connect with you in real time via live chat on your website. But for most companies, supporting one-to-one conversations at scale can be a challenge.</p>
                        <p className='para'>With HubSpot’s free chatbot builder software, you can easily create messenger bots that help you qualify leads, book meetings, provide answers to common customer support questions, and more—so your team has more time to focus on the conversations that demand the most attention.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/BotHomePage.webp" className='toolimg' alt="HubSpot forms tool showing various form types" />
                    </div>
                </div>

            </div>

            <div className="top">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/ChatFlows.webp"
                            className="formimg"
                            alt="custom forms tool showing various form types"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="crmhead">
                        Easily create and customize chatbots.
                        </h1>
                        <p className="txt">
                        HubSpot’s templates and intuitive chatbot builder make it easy to get started, no coding skills required.
                        </p>
                        <p className="txt">
                        Choose a template based on your bot’s goal. Then, use the visual editor to customize the conversation to match your brand, and add your own unique questions and copy.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mysection'>
                <div className='containing'>
                    <div className='contdiv'>
                        <h1 className='myhead'>Give your chatbots a human touch.</h1>
                        <p className='par'>The free chatbot software is seamlessly integrated with your HubSpot CRM, so your bots can deliver friendly, personalized messages based on existing contact data. And any information collected by your chatbots will also get synced back to your CRM, giving you a complete view of every engagement.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/EditBot.webp" className='mypic' alt="Module various form types" />
                    </div>
                </div>
            </div>

            <div className="mysection">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/chatbot/customer-support-chatbot.png"
                            className="myformimg"
                            alt="forms showing setup"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="fuphead">
                        Lighten the load for your customer support team.
                        </h1>
                        <p className="fuptxt">
                        Configure your HubSpot chatbot to handle the bulk of your customer questions, then hand the conversation over to a live agent once qualified. You can also automate tasks such as creating support tickets, adding users to lists and workflows, and more.
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
                If you’re interested in the free chatbot builder, these related resources may help.
                </p>
                <div className="cardsdiv">
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/young-male-using-tablet.png?width=350&name=young-male-using-tablet.png" alt="How to Create Forms" />
                        <h3>What Is Live Chat?</h3>
                        <p className="cardtxt">Read our blog post to learn all about what live chat is and why your customers need it.    </p>
                        <a href="/">Read the blog on live chat</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/asian-male-using-hubspot-free.png?width=350&name=asian-male-using-hubspot-free.png" alt="How to Create Forms" />
                        <h3>HubSpot's AI Tools</h3>
                        <p className="cardtxt">Harness the power of AI with our content assistant and ChatSpot tools.</p>
                        <a href="/">Learn more about HubSpot's AI</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/woman-thinking-with-notepad-en.png?width=350&name=woman-thinking-with-notepad-en.png" alt="How to Create Forms" />
                        <h3>Create a Bot</h3>
                        <p className="cardtxt">Read the knowledge base article to learn how to create a chatflow with a bot to answer your visitors’ questions.   </p>
                        <a href="/">Get started with a chatbot</a>
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

export default FreeChatbotBuilder;
