import React from "react";
import "../style.css";
import { VscPassFilled } from "react-icons/vsc";
import { HiPhone } from 'react-icons/hi'
const Websitebuilder = () => {
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
                            src="https://www.hubspot.com/hs-fs/hubfs/Imported%20sitepage%20images/Screen%20Shot%202022-03-15%20at%202.47.14%20PM.png?width=1939&height=1093&name=Screen%20Shot%202022-03-15%20at%202.47.14%20PM.png"
                            alt="first"
                            className="first-img"
                        />
                    </div>
                    <div className="contentdiv">
                        <h1 className="heading">Free Drag-and-Drop Website Builder</h1>
                        <p className="description">
                        Create and customize your own business website with an easy drag-and-drop website builder.
                        </p>
                        <br />
                        <button className="mydarkbtn">Get started free</button>
                        <div className="tickandtext">
                            <VscPassFilled className="tick small" />
                            <p className="ticktext">Build and edit your website without any coding or technical skills</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick medium" />
                            <p className="ticktext">Publish your business website faster with a pre-built theme</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick large" />
                            <p className="ticktext">Leverage custom modules to deliver a great user experience</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='contain'>
                    <div className='textdiv'>
                        <h1 className='header'>Build a custom website with a free drag-and-drop editor.</h1>
                        <p className='para'>Every business needs a website. But building and designing a website from scratch without the proper tools can be difficult.</p>
                        <p className='para'>With HubSpot, you don’t need to be a developer to build a beautiful, branded website. Our drag-and-drop website builder makes it easy to build a custom website for your business in no time at all. Track the success of your website in HubSpot’s CRM platform, and watch as your business grows.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/website-drag-and-drop/custom-website-en.webp" className='toolimg' alt="HubSpot forms tool showing various form types" />
                    </div>
                </div>

            </div>

            <div className="top">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/website-drag-and-drop/WYSIWYG-editor-en.webp"
                            className="formimg"
                            alt="custom forms tool showing various form types"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="crmhead">
                        Create impactful content with a WYSIWYG editor.
                        </h1>
                        <p className="txt">
                        When you have to fuss over code or complex content editors to build your website, it can be hard to visualize how the final product will look. With HubSpot's what-you-see-is-what-you-get (WYSIWYG) editor, you can easily see the experience you're creating for your visitors as you build your website. Drag and drop modules into place, and preview your content before it goes live.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mysection'>
                <div className='containing'>
                    <div className='contdiv'>
                        <h1 className='myhead'>Choose from hundreds of themes to get started.</h1>
                        <p className='par'>Take the guesswork out of web design with professionally built, customizable website themes that let you easily change the look and feel of your entire website. Then leverage built-in page templates, custom modules, style settings, and more. Your new website will be up and running in no time.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/website-drag-and-drop/theme-marketplace-en.png" className='mypic' alt="Module various form types" />
                    </div>
                </div>
            </div>

            <div className="mysection">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/custom-domain-connection/business-name-web-address-en.webp"
                            className="myformimg"
                            alt="forms showing setup"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="fuphead">
                        Add a custom domain for free.
                        </h1>
                        <p className="fuptxt">
                        Using a custom domain for your website helps establish a professional and credible appearance online. Don’t struggle to connect a custom domain to your CMS or pay for upgrade fees. With HubSpot, you can easily connect your domain for free in just a few simple steps. Once connected, you can focus on what really matters — building a remarkable customer experience.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mysection'>
                <div className='containing'>
                    <div className='contdiv'>
                        <h1 className='myhead'>Grow your business with HubSpot’s CRM platform.</h1>
                        <p className='par'>Your website is one of the most important components of your customers’ experience. By leveraging HubSpot’s entire CRM platform, you’ll have access to all the tools you need to start and grow a business, from forms to live chat, meetings tools, and more. Use our pre-built modules within the drag-and-drop website builder to take the guesswork out of launching a business site. Then, easily report on the impact of your website with built-in reporting, and use the entire platform to track and convert leads into customers.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Live%20chat/automate-with-chatbots-en.png" className='mypic' alt="Module various form types" />
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
                If you’re interested in HubSpot’s drag-and-drop website builder, these related resources may help.
                </p>
                <div className="cardsdiv">
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/mid-age-male-using-laptop.png?width=350&name=mid-age-male-using-laptop.png" alt="How to Create Forms" />
                        <h3>Website Builder Guide</h3>
                        <p className="cardtxt">Learn how to use HubSpot’s drag-and-drop website builder.</p>
                        <a href="/">Read the website builder guide</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/woman-holding-circles-orange.png?width=350&name=woman-holding-circles-orange.png" alt="How to Create Forms" />
                        <h3>Website Themes and Template Marketplace</h3>
                        <p className="cardtxt">Pick a theme and use it as is, or customize it further to meet your business’ needs.</p>
                        <a href="/">Discover free themes and templates</a>
                    </div>
                    <div className="cards">
                        <img src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/ginger-woman-smiling.png?width=350&name=ginger-woman-smiling.png" alt="How to Create Forms" />
                        <h3>Website Inspiration</h3>
                        <p className="cardtxt">See what others have built with HubSpot’s tools, and get inspiration for your own website.</p>
                        <a href="/">Get website inspiration</a>
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
                <p className='ptext'>HubSpot’s form builder is available in Marketing Hub. Explore additional Marketing Hub features below.</p>
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

export default Websitebuilder;
