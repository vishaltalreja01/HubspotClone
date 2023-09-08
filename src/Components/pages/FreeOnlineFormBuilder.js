import React from "react";
import "../style.css";
import { VscPassFilled } from "react-icons/vsc";
import { HiPhone } from 'react-icons/hi'
const Formbuilder = () => {
    return (
        <>
        {/* <Navbar/> */}
            <div className="main flex flex-col">
                <a href="/" className="link">
                    &lt; Marketing Hub{" "}
                </a>
                <span className="text">Free Online Form Builder</span>
                <div className="doublediv">
                    <div className="img-div">
                        <img
                            src="https://www.hubspot.com/hubfs/new-contact-form.png"
                            alt="first"
                            className="first-img"
                        />
                    </div>
                    <div className="contentdiv">
                        <h1 className="heading">Free Online Form Builder</h1>
                        <p className="description">
                            Generate leads from your website using a powerful online form
                            builder.
                        </p>
                        <br />
                        <button className="mydarkbtn">Get started free</button>
                        <div className="tickandtext">
                            <VscPassFilled className="tick small" />
                            <p className="ticktext">Create conversion-ready forms with ease</p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick medium" />
                            <p className="ticktext">Customize your forms without technical expertise using a drag-and-drop </p>
                        </div>
                        <div className="tickandtext">
                            <VscPassFilled className="tick large" />
                            <p className="ticktext">Automatically fill your CRM with leads who convert on your forms</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='contain'>
                    <div className='textdiv'>
                        <h1 className='header'>Convert anonymous website visitors into qualified leads.</h1>
                        <p className='para'>It’s not enough to grow traffic to your website — you need to grow your database, too. A free form builder can streamline the process by capturing valuable contact information from your visitors.</p>
                        <p className='para'>With HubSpot’s form builder, you can easily create custom forms for your website without any technical expertise. Every visitor who fills out your forms will automatically be added to your database, so you can nurture them with personalized messaging and email campaigns.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/form-types.png" className='toolimg' alt="HubSpot forms tool showing various form types" />
                    </div>
                </div>

            </div>

            <div className="top">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/Imported%20sitepage%20images/Create_Field-3.png"
                            className="formimg"
                            alt="custom forms tool showing various form types"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="crmhead">
                            Build website forms that connect to your CRM.
                        </h1>
                        <p className="txt">
                            Build free online forms in seconds. Then add them to your website
                            or deploy them as standalone pages to start collecting contact
                            info quickly. Everyone who fills out your form will be
                            automatically routed into your HubSpot CRM database. From there,
                            you can further nurture the relationship with personalized emails
                            and follow-up calls.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mysection'>
                <div className='containing'>
                    <div className='contdiv'>
                        <h1 className='myhead'>Create custom forms with drag-and-drop editing.</h1>
                        <p className='par'>Use the free form builder to create custom forms without technical expertise. Drag-and-drop each element into place to ensure your web forms match your brand guidelines and specific needs. Then tailor each form with specialized and dynamic fields, different field types, progressive profiling, and more.</p>
                    </div>
                    <div className='imgdiv'>
                        <img src="https://www.hubspot.com/hubfs/forms-drag-and-drop-editor-value-prop-module-2.png" className='mypic' alt="Module various form types" />
                    </div>
                </div>

            </div>

            <div className="mysection">
                <div className="containerr">
                    <div className="imgdiv">
                        <img
                            src="https://www.hubspot.com/hubfs/Imported%20images/form_options-2.png"
                            className="myformimg"
                            alt="forms showing setup"
                        />
                    </div>
                    <div className="contdiv">
                        <h1 className="fuphead">
                            Follow up with automated emails and notifications.
                        </h1>
                        <p className="fuptxt">
                            Automatically send a follow-up email after a visitor completes
                            your form. Enroll your contacts in sophisticated lead nurturing
                            campaigns to convert visitors into qualified leads, and qualified
                            leads into customers.
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
                    If you’re interested in form builder software, these related resources
                    may help.
                </p>
                <div className="cardsdiv">
                    <div className="cards">
                        <img src="	https://www.hubspot.com/hs-fs/hubfs/_MG_8772-1.jpg?width=350&name=_MG_8772-1.jpg" alt="How to Create Forms" />
                        <h3>How to Create Forms</h3>
                        <p className="cardtxt">Learn how to get started using Hubspot forms, from basic form creation tips to how to setup automatic form follow-up emails.</p>
                        <a href="/">Read the forms setup guide</a>
                    </div>
                    <div className="cards">
                        <img src="	https://www.hubspot.com/hs-fs/hubfs/_MG_8772-1.jpg?width=350&name=_MG_8772-1.jpg" alt="How to Create Forms" />
                        <h3>Form FAQs</h3>
                        <p className="cardtxt">Get answers to all your burning HubSpot forms questions in one place.</p>
                        <a href="/">See Form FAQs</a>
                    </div>
                    <div className="cards">
                        <img src="	https://www.hubspot.com/hs-fs/hubfs/_MG_8772-1.jpg?width=350&name=_MG_8772-1.jpg" alt="How to Create Forms" />
                        <h3>Lead Generation Resources</h3>
                        <p className="cardtxt">Boost your lead generation efforts and know-how with these free resources.</p>
                        <a href="/">Browsed Lead Generation Resources</a>
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

export default Formbuilder;
