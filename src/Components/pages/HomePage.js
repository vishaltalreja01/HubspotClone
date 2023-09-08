import React from 'react';
import './HomePage.css';
import right from "../images/right.jpeg"
import grow from "../images/grow.jpeg"
import community from "../images/community.jpeg"
import companies from "../images/companies.jpeg"


const HomePage = () => {
    return (
        <>
            <div className="container">
                <div className="content-wrapper">
                    <div className="left-section">
                        <h1 className="title" style={{color:"black"}}>Grow better with HubSpot</h1>
                        <p className="description-left-section">
                            Software that's powerful, not overpowering. Seamlessly connect your data, teams, and customers on one CRM platform that grows with your business.
                        </p>
                        <div className="buttons">
                            <button className="button">Get a demo</button>
                            <button className="button button2">Get started free</button>
                        </div>
                        <img src={right} alt="Image" className="image" />
                    </div>
                    <div className="right-section">

                    </div>

                </div>
            </div>

            <div className="what-is-hubspot">
                <h1 className="title">What is HubSpot?</h1>
                <p className="description-wih" style={{ fontSize: "20px" }}>
                    HubSpot is a CRM platform with all the software, integrations, and resources you need to connect marketing, sales, content management, and customer service. Each product in the platform is powerful on its own, but the real magic happens when you use them together.
                </p>

                <div className="buttons">
                    <button className="button">Demo Premiume CRM</button>
                    <button className="button button2">Get free CRM</button>
                </div>
            </div>
            <div className='boxes'>
                <div className="box">
                    <h2 className="box-title">Marketing Hub</h2>
                    <p className="box-description">
                        Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.
                    </p>
                    <div className="line"></div>
                    <h3 className="box-features">Popular Features</h3>
                    <ul className="feature-list">

                        <li>Lead generation</li>
                        <li>Marketing automation</li>
                        <li>Analytics</li>
                    </ul>
                    <button className="button button-wide" >Get started</button>
                </div>
                <div className="box">
                    <h2 className="box-title">Sales Hub</h2>
                    <p className="box-description">
                        Sales CRM software to help you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.
                    </p>
                    <div className="line"></div>
                    <h3 className="box-features">Popular Features</h3>
                    <ul className="feature-list">
                        <li>Advanced CRM</li>
                        <li> Meeting scheduling</li>
                        <li>Payments</li>
                    </ul>
                    <button className="button button-wide" >Get started</button>
                </div>
                <div className="box">
                    <h2 className="box-title">Service Hub</h2>
                    <p className="box-description">
                        Customer service software to help you connect with customers, exceed expectations, and turn them into promoters who grow your
                    </p>
                    <div className="line"></div>
                    <h3 className="box-features">Popular Features</h3>
                    <ul className="feature-list">
                        <li>Tickets</li>
                        <li>Customer feedback</li>
                        <li>Knowledge base</li>
                    </ul>
                    <button className="button button-wide" >Get started</button>
                </div>
            </div>
            <div className='boxes'>
                <div className="box">
                    <h2 className="box-title">CMS Hub</h2>
                    <p className="box-description">
                        Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.
                    </p>
                    <div className="line"></div>
                    <h3 className="box-features">Popular Features</h3>
                    <ul className="feature-list">

                        <li>Drag-and-drop editor</li>
                        <li>SEO recommendations</li>
                        <li>Website themes</li>
                    </ul>
                    <button className="button button-wide" >Get started</button>
                </div>
                <div className="box">
                    <h2 className="box-title">Operations Hub</h2>
                    <p className="box-description">
                        Operations software that syncs your apps, cleans and curates customer data, and automates processes — so all your systems and teams work better together.
                    </p>
                    <div className="line"></div>
                    <h3 className="box-features">Popular Features</h3>
                    <ul className="feature-list">
                        <li>Data sync</li>
                        <li> Programmable automation</li>
                        <li> Data quality automation</li>
                    </ul>
                    <button className="button button-wide" >Get started</button>
                </div>

            </div>
            <div className="article-box">
                <div className="box box2">
                    <img src={right} alt="noImage" className="box-img" />
                    <div className="box-content">
                        <h2 className="box-title">Operations Hub</h2>
                        <p className="box-description">
                            Operations software that syncs your apps, cleans and curates customer data, and automates processes — so all your systems and teams work better together.
                        </p>
                        <div className="line"></div>
                        <button className="button button-wide">Get started</button>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#3BB68B", marginTop: "100px", height: "1000px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "600px", marginTop: "70px", color: "white" }}>
                    <h2>Learn and grow better with award-winning support and a thriving community.</h2>
                    <p>Learn how to get the most out of HubSpot with free courses, certifications, and resources — plus a legendary customer support team and an active user community to back you up.</p>
                </div>

                <img src={community} alt="noImage" style={{ width: "1000px", height: "600px", marginTop: "100px" }} />
            </div>
            <div >
                <img src={companies} alt="noImage" style={{ width: "auto", height: "250px", marginTop: "50px" }} />
            </div>



            <div className="container" style={{ backgroundColor: "white" }}>
                <div className="content-wrapper">
                    <div style={{ width: "600px", textAlign: "left", justifyContent: "center", marginTop: "70px" }}>
                        <h2 >Grow Better With HubSpot Today</h2>
                        <p >
                            With tools to make every part of your process more human and a support team excited to help you, getting started with HubSpot has never been easier
                        </p>
                        <div style={{ display: "flex", justifyContent: "flex-start" }}>
                            <button className="button">Get a demo</button>
                            <button className="button button2">Get started free</button>
                        </div>

                    </div>
                    <div className="right-section">
                        <img src={grow} alt="Image" style={{ width: "400px", height: "400px" }} />
                    </div>

                </div>


            </div>


            {/* <Footer /> */}
        </>

    );
};

export default HomePage;