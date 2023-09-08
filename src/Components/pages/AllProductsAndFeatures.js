import React, { useEffect, useState } from 'react'

export default function AllProductsAndFeatures() {
    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            // window height changed for the demo
            windowHeight > 50 ? setStickyClass('fixed-top') : setStickyClass('');
        }
    };

    return (
        <>

            {/* Banner Section */}
            <div className="container">

                <div className="main_div">
                    <div className="banner_imag">
                        <img className="all-products-hero__image"
                            src="https://2406023.fs1.hubspotusercontent-na1.net/hubfs/2406023/all-products-header-compressed.webp"
                            alt="" width="894" height="760" />
                    </div>
                    <div className="banner_content">
                        <h1 style={{color:'rgb(46, 71, 93)', fontSize:48}}>What is HubSpot?</h1>
                        <p>HubSpot is a CRM platform that’s designed to scale with your business. From a one-person business to
                            a
                            2,000+ employee enterprise, The HubSpot CRM platform has the marketing, sales, customer service,
                            operations, and content management features you need to build the best experience for your
                            customers.
                        </p>
                        <div className="btn_collection">
                            <div className="btn1 ">
                                <button className="bt">Get a Demo</button>
                            </div>
                            <div className="btn1 ">
                                <button className="btn2">Get Started Free</button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <!-- Platform Features --> */}

                <h2 className="text-center my-5">Popular HubSpot Platform Features</h2>


                <div className="Platform_Features">


                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card Popular-feature-card">
                                <div className="card-body">
                                    <h5 className="card-title">Free CRM</h5>
                                    <p className="card-text">Nurture and grow your business with customer relationship management
                                        software
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 ">
                            <div className="card Popular-feature-card">
                                <div className="card-body">
                                    <h5 className="card-title">Live Chat</h5>
                                    <p className="card-text">Connect with visitors in real time to convert leads, close deals, and
                                        provide support.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card   Popular-feature-card  ">
                                <div className="card-body">
                                    <h5 className="card-title">Meeting Scheduler</h5>
                                    <p className="card-text">Add a meeting scheduler link to your emails and website and set more
                                        appointments
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card Popular-feature-card">
                                <div className="card-body ">
                                    <h5 className="card-title">Website Builder</h5>
                                    <p className="card-text">Customize your website with an easy-to-use drag-and-drop website
                                        builder.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            {/* Secondery NavBar Section */}

            <h2 className="text-center my-5">Explore All HubSpot Products</h2>
            <div className="secondNavbar " id="dd"  >
                <div className="container ">
                    <div className="second-bar-itemdiv">
                        <ul>
                            <li>Marketing Hub</li>
                            <li> Sales Hub </li>
                            <li> Service Hub </li>
                            <li> CMS Hub </li>
                            <li> Operations Hub </li>
                            <li> Comparisons</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="card Popular-feature-card mb-3 my-5  " style={{ maxWidth: "5040px " }}>
                    <div className="row g-5">
                        <div className="col-md-4">
                            <img src="https://2406023.fs1.hubspotusercontent-na1.net/hubfs/2406023/Marketing%20Hub%20Illustration.webp"
                                className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body p-5">
                                <h2 className="card-title">Marketing Software for Small to Enterprise Businesses</h2>
                                <p className="card-text">Marketing software to help you attract the right audience, convert more
                                    visitors into customers, and run complete inbound marketing campaigns at scale.</p>
                                <div className="btn_collection">
                                    <div className="btn1 ">
                                        <button className="bt">Get a Demo</button>
                                        <button className="btn2">Get Started Free</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                {/* <!-- Product Listing --> */}

                <div className="row  row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                    <div className="col">
                        <div className="p-3">
                            <h4>Ads Software</h4>
                            <p>Use CRM data to create highly targeted ad campaigns and report valuable insights.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Google Ads</h4>
                            <p>Bring in more leads with Google Ads using CRM and web analytics data to inform your strategy.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Exit Intent Forms</h4>
                            <p>Turn website visitors into leads with customizable popup forms. No coding necessary.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Blog Software</h4>
                            <p>Publish blog content that drives traffic and conversions with integrated blogging tools.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Marketing Analytics & Dashboard Software</h4>
                            <p>Measure performance for marketing campaigns with built-in analytics, reports, and dashboards.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Dedicated IP Address</h4>
                            <p>Ensure your marketing emails get delivered using a dedicated IP.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Online Form Builder</h4>
                            <p>Fill your CRM with leads from your website using a powerful online form builder.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Free Landing Page Builder</h4>
                            <p>Create and test beautiful landing pages that generate leads and look great on any device.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Calls-to-Action</h4>
                            <p>Convert visitors into leads with calls-to-action you can personalize, test, and optimize.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Lead Capture Software</h4>
                            <p>Capture leads and automatically sync them to your CRM with HubSpot forms.</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-3 ">
                            <h4>Social Media Management Software</h4>
                            <p>Prioritize social interactions to spend more time with the people who matter most.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Free Email Hosting</h4>
                            <p>Engage customers and boost clickthrough rates with easy-to-create personalized emails.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Squeeze Page Builder</h4>
                            <p>Use a drag-and-drop builder to create responsive squeeze pages that turn clicks into
                                subscribers</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Behavioral Targeting</h4>
                            <p>Personalize marketing outreach at scale with behavioral targeting features.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Ad ROI</h4>
                            <p>Get started quickly with simple ad creation and seamless lead syncing.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Campaigns</h4>
                            <p>View, manage, and act on campaign priorities directly within your marketing software.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Email Marketing Tools</h4>
                            <p>Create, personalize, and optimize marketing emails without waiting on designers or IT.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Form Maker</h4>
                            <p>Leverage a user-friendly interface to create lead-capture forms with no coding required.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Drag and Drop Email Builder</h4>
                            <p>Create beautiful, personalized emails with our CRM-connected drag and drop email builder.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Newsletter Builder</h4>
                            <p>Create beautiful, engaging emails and send them to targeted contact lists.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Ad Management</h4>
                            <p>Connect your HubSpot CRM with popular ad platforms and leverage data to maximize campaign
                                impact.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Transactional Email Software</h4>
                            <p>Use automated transactional emails to send receipts, welcome messages, and more.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>SEO Marketing Software</h4>
                            <p>Use in-editor SEO recommendations to increase organic search traffic.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Pop-Up Forms</h4>
                            <p>Capture new subscribers and leads with customizable pop-up forms. No code required.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Marketing Automation Software</h4>
                            <p>Spend less time on busy work by automating email campaigns, lead scoring, and more.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Chatbot Builder Software</h4>
                            <p>Qualify leads, book meetings, provide customer support, and scale conversations with
                                chatbots.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Contact Database & Management Software</h4>
                            <p>Keep records up to date with ease. Add contacts and log sales activity with a single click.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Lead Management & Tracking Software</h4>
                            <p>Manage all your lead records in one centralized database to streamline outreach.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Team Email</h4>
                            <p>Connect team email addresses to a universal inbox for easy and efficient collaboration.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Live Chat Software</h4>
                            <p>Connect with visitors in real time to convert leads, close deals, and provide support.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Video Hosting</h4>
                            <p>Embed videos and measure their performance on marketing, sales, and service collateral.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>List Segmentation</h4>
                            <p>Create a targeted list of contacts to deliver more personalized marketing campaigns.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Lead Management & Tracking Software</h4>
                            <p>Manage all your lead records in one centralized database to streamline outreach.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>WordPress Plugin</h4>
                            <p>Access HubSpot's full suite of tools and features on your Wordpress site with this
                                plugin.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>ABM Software</h4>
                            <p>Unite your marketing and sales teams with collaborative tools for account-based buying.
                            </p>
                        </div>
                    </div>
                </div>




                <div className="card Popular-feature-card mb-3 my-5 " style={{ maxWidth: "5040px " }}>
                    <div className="row g-5">
                        <div className="col-md-4">
                            <img src="	https://2406023.fs1.hubspotusercontent-na1.net/hubfs/2406023/Sales%20Hub%20Illustration.webp"
                                className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body p-5">
                                <h2 className="card-title">Sales Software for Small to Enterprise Businesses</h2>
                                <p className="card-text">Powerful sales software to help teams close more deals, deepen
                                    relationships, and manage their pipeline more effectively.</p>
                                <div className="btn_collection">
                                    <div className="btn1 ">
                                        <button className="bt">Get a Demo</button>
                                        <button className="btn2">Get Started Free</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <div className="row  row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                    <div className="col">
                        <div className="p-3">
                            <h4>Ads Software</h4>
                            <p>Use CRM data to create highly targeted ad campaigns and report valuable insights.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Google Ads</h4>
                            <p>Bring in more leads with Google Ads using CRM and web analytics data to inform your strategy.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Exit Intent Forms</h4>
                            <p>Turn website visitors into leads with customizable popup forms. No coding necessary.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Blog Software</h4>
                            <p>Publish blog content that drives traffic and conversions with integrated blogging tools.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Marketing Analytics & Dashboard Software</h4>
                            <p>Measure performance for marketing campaigns with built-in analytics, reports, and dashboards.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Dedicated IP Address</h4>
                            <p>Ensure your marketing emails get delivered using a dedicated IP.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Online Form Builder</h4>
                            <p>Fill your CRM with leads from your website using a powerful online form builder.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Free Landing Page Builder</h4>
                            <p>Create and test beautiful landing pages that generate leads and look great on any device.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Calls-to-Action</h4>
                            <p>Convert visitors into leads with calls-to-action you can personalize, test, and optimize.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Lead Capture Software</h4>
                            <p>Capture leads and automatically sync them to your CRM with HubSpot forms.</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-3 ">
                            <h4>Social Media Management Software</h4>
                            <p>Prioritize social interactions to spend more time with the people who matter most.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Free Email Hosting</h4>
                            <p>Engage customers and boost clickthrough rates with easy-to-create personalized emails.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Squeeze Page Builder</h4>
                            <p>Use a drag-and-drop builder to create responsive squeeze pages that turn clicks into
                                subscribers</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Behavioral Targeting</h4>
                            <p>Personalize marketing outreach at scale with behavioral targeting features.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Ad ROI</h4>
                            <p>Get started quickly with simple ad creation and seamless lead syncing.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Campaigns</h4>
                            <p>View, manage, and act on campaign priorities directly within your marketing software.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Email Marketing Tools</h4>
                            <p>Create, personalize, and optimize marketing emails without waiting on designers or IT.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Form Maker</h4>
                            <p>Leverage a user-friendly interface to create lead-capture forms with no coding required.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Drag and Drop Email Builder</h4>
                            <p>Create beautiful, personalized emails with our CRM-connected drag and drop email builder.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Newsletter Builder</h4>
                            <p>Create beautiful, engaging emails and send them to targeted contact lists.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Ad Management</h4>
                            <p>Connect your HubSpot CRM with popular ad platforms and leverage data to maximize campaign
                                impact.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Transactional Email Software</h4>
                            <p>Use automated transactional emails to send receipts, welcome messages, and more.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>SEO Marketing Software</h4>
                            <p>Use in-editor SEO recommendations to increase organic search traffic.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Pop-Up Forms</h4>
                            <p>Capture new subscribers and leads with customizable pop-up forms. No code required.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Marketing Automation Software</h4>
                            <p>Spend less time on busy work by automating email campaigns, lead scoring, and more.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Chatbot Builder Software</h4>
                            <p>Qualify leads, book meetings, provide customer support, and scale conversations with
                                chatbots.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Contact Database & Management Software</h4>
                            <p>Keep records up to date with ease. Add contacts and log sales activity with a single click.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Lead Management & Tracking Software</h4>
                            <p>Manage all your lead records in one centralized database to streamline outreach.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Team Email</h4>
                            <p>Connect team email addresses to a universal inbox for easy and efficient collaboration.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Live Chat Software</h4>
                            <p>Connect with visitors in real time to convert leads, close deals, and provide support.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Video Hosting</h4>
                            <p>Embed videos and measure their performance on marketing, sales, and service collateral.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>List Segmentation</h4>
                            <p>Create a targeted list of contacts to deliver more personalized marketing campaigns.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Lead Management & Tracking Software</h4>
                            <p>Manage all your lead records in one centralized database to streamline outreach.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>WordPress Plugin</h4>
                            <p>Access HubSpot's full suite of tools and features on your Wordpress site with this
                                plugin.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>ABM Software</h4>
                            <p>Unite your marketing and sales teams with collaborative tools for account-based buying.
                            </p>
                        </div>
                    </div>
                </div>




                <div className="card Popular-feature-card mb-3 my-5 " style={{ maxWidth: "5040px" }}>
                    <div className="row g-5">
                        <div className="col-md-4">
                            <img src="	https://2406023.fs1.hubspotusercontent-na1.net/hubfs/2406023/Service%20Hub%20Illustration.webp"
                                className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body p-5">
                                <h2 className="card-title">Service Software for Small to Enterprise Businesses</h2>
                                <p className="card-text">Customer service software that helps you deepen customer relationships,
                                    connect to the front office, and drive team efficiency.</p>
                                <div className="btn_collection">
                                    <div className="btn1 ">
                                        <button className="bt">Get a Demo</button>
                                        <button className="btn2">Get Started Free</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="row  row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                    <div className="col">
                        <div className="p-3">
                            <h4>Ads Software</h4>
                            <p>Use CRM data to create highly targeted ad campaigns and report valuable insights.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Google Ads</h4>
                            <p>Bring in more leads with Google Ads using CRM and web analytics data to inform your strategy.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Exit Intent Forms</h4>
                            <p>Turn website visitors into leads with customizable popup forms. No coding necessary.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Blog Software</h4>
                            <p>Publish blog content that drives traffic and conversions with integrated blogging tools.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Marketing Analytics & Dashboard Software</h4>
                            <p>Measure performance for marketing campaigns with built-in analytics, reports, and dashboards.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Dedicated IP Address</h4>
                            <p>Ensure your marketing emails get delivered using a dedicated IP.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Online Form Builder</h4>
                            <p>Fill your CRM with leads from your website using a powerful online form builder.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Free Landing Page Builder</h4>
                            <p>Create and test beautiful landing pages that generate leads and look great on any device.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Calls-to-Action</h4>
                            <p>Convert visitors into leads with calls-to-action you can personalize, test, and optimize.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Lead Capture Software</h4>
                            <p>Capture leads and automatically sync them to your CRM with HubSpot forms.</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-3 ">
                            <h4>Social Media Management Software</h4>
                            <p>Prioritize social interactions to spend more time with the people who matter most.</p>
                        </div>
                    </div>

                </div>





                <div className="card Popular-feature-card mb-3 my-5 " style={{ maxWidth: " 5040px " }}>
                    <div className="row g-5">
                        <div className="col-md-4">
                            <img src="	https://2406023.fs1.hubspotusercontent-na1.net/hubfs/2406023/CMS%20Hub%20Illustration.webp"
                                className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body p-5">
                                <h2 className="card-title">CMS Software for Small to Enterprise Businesses</h2>
                                <p className="card-text">Content management software that's flexible for marketers, powerful for
                                    developers, and gives your customers a personalized, secure experience.</p>
                                <div className="btn_collection">
                                    <div className="btn1 ">
                                        <button className="bt">Get a Demo</button>
                                        <button className="btn2">Get Started Free</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row  row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                    <div className="col">
                        <div className="p-3">
                            <h4>Ads Software</h4>
                            <p>Use CRM data to create highly targeted ad campaigns and report valuable insights.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Google Ads</h4>
                            <p>Bring in more leads with Google Ads using CRM and web analytics data to inform your strategy.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Exit Intent Forms</h4>
                            <p>Turn website visitors into leads with customizable popup forms. No coding necessary.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Blog Software</h4>
                            <p>Publish blog content that drives traffic and conversions with integrated blogging tools.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Marketing Analytics & Dashboard Software</h4>
                            <p>Measure performance for marketing campaigns with built-in analytics, reports, and dashboards.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Dedicated IP Address</h4>
                            <p>Ensure your marketing emails get delivered using a dedicated IP.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Online Form Builder</h4>
                            <p>Fill your CRM with leads from your website using a powerful online form builder.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Free Landing Page Builder</h4>
                            <p>Create and test beautiful landing pages that generate leads and look great on any device.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Calls-to-Action</h4>
                            <p>Convert visitors into leads with calls-to-action you can personalize, test, and optimize.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Lead Capture Software</h4>
                            <p>Capture leads and automatically sync them to your CRM with HubSpot forms.</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-3 ">
                            <h4>Social Media Management Software</h4>
                            <p>Prioritize social interactions to spend more time with the people who matter most.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Free Email Hosting</h4>
                            <p>Engage customers and boost clickthrough rates with easy-to-create personalized emails.</p>
                        </div>
                    </div>



                </div>







                <div className="card Popular-feature-card mb-3 my-5 " style={{ maxWidth: "5040px" }}>
                    <div className="row g-5">
                        <div className="col-md-4">
                            <img src="https://2406023.fs1.hubspotusercontent-na1.net/hubfs/2406023/Operations%20Hub%20Illustration.webp"
                                className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body p-5">
                                <h2 className="card-title">Operations Software for Small to Enterprise Businesses</h2>
                                <p className="card-text">Operations software that lets you easily sync, clean, and curate
                                    customer data, and automate business processes.</p>
                                <div className="btn_collection">
                                    <div className="btn1 ">
                                        <button className="bt">Get a Demo</button>
                                        <button className="btn2">Get Started Free</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="row  row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                    <div className="col">
                        <div className="p-3">
                            <h4>Ads Software</h4>
                            <p>Use CRM data to create highly targeted ad campaigns and report valuable insights.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Google Ads</h4>
                            <p>Bring in more leads with Google Ads using CRM and web analytics data to inform your strategy.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Exit Intent Forms</h4>
                            <p>Turn website visitors into leads with customizable popup forms. No coding necessary.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Blog Software</h4>
                            <p>Publish blog content that drives traffic and conversions with integrated blogging tools.</p>
                        </div>
                    </div>
                </div>



                <div className="card Popular-feature-card mb-3 my-5 " style={{ maxWidth: "5040px" }}>
                    <div className="row g-5">
                        <div className="col-md-4">
                            <img src="https://2406023.fs1.hubspotusercontent-na1.net/hubfs/2406023/All-Products-Comparisons%20(1).webp"
                                className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body p-5">
                                <h2 className="card-title">HubSpot Comparisons</h2>
                                <p className="card-text">Check out head-to-head comparisons of HubSpot’s marketing, customer
                                    service, sales, content management, and CRM features vs. other leading software
                                    platforms.</p>
                                <div className="btn_collection">
                                    <div className="btn1 ">
                                        <button className="bt">Get a Demo</button>
                                        <button className="btn2">Get Started Free</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="row  row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                    <div className="col">
                        <div className="p-3">
                            <h4>Ads Software</h4>
                            <p>Use CRM data to create highly targeted ad campaigns and report valuable insights.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Google Ads</h4>
                            <p>Bring in more leads with Google Ads using CRM and web analytics data to inform your strategy.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Exit Intent Forms</h4>
                            <p>Turn website visitors into leads with customizable popup forms. No coding necessary.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Blog Software</h4>
                            <p>Publish blog content that drives traffic and conversions with integrated blogging tools.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Marketing Analytics & Dashboard Software</h4>
                            <p>Measure performance for marketing campaigns with built-in analytics, reports, and dashboards.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Dedicated IP Address</h4>
                            <p>Ensure your marketing emails get delivered using a dedicated IP.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Online Form Builder</h4>
                            <p>Fill your CRM with leads from your website using a powerful online form builder.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Free Landing Page Builder</h4>
                            <p>Create and test beautiful landing pages that generate leads and look great on any device.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Calls-to-Action</h4>
                            <p>Convert visitors into leads with calls-to-action you can personalize, test, and optimize.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Lead Capture Software</h4>
                            <p>Capture leads and automatically sync them to your CRM with HubSpot forms.</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-3 ">
                            <h4>Social Media Management Software</h4>
                            <p>Prioritize social interactions to spend more time with the people who matter most.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Free Email Hosting</h4>
                            <p>Engage customers and boost clickthrough rates with easy-to-create personalized emails.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Squeeze Page Builder</h4>
                            <p>Use a drag-and-drop builder to create responsive squeeze pages that turn clicks into
                                subscribers</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Behavioral Targeting</h4>
                            <p>Personalize marketing outreach at scale with behavioral targeting features.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Ad ROI</h4>
                            <p>Get started quickly with simple ad creation and seamless lead syncing.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Campaigns</h4>
                            <p>View, manage, and act on campaign priorities directly within your marketing software.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Email Marketing Tools</h4>
                            <p>Create, personalize, and optimize marketing emails without waiting on designers or IT.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Form Maker</h4>
                            <p>Leverage a user-friendly interface to create lead-capture forms with no coding required.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Drag and Drop Email Builder</h4>
                            <p>Create beautiful, personalized emails with our CRM-connected drag and drop email builder.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Newsletter Builder</h4>
                            <p>Create beautiful, engaging emails and send them to targeted contact lists.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Ad Management</h4>
                            <p>Connect your HubSpot CRM with popular ad platforms and leverage data to maximize campaign
                                impact.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Transactional Email Software</h4>
                            <p>Use automated transactional emails to send receipts, welcome messages, and more.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>SEO Marketing Software</h4>
                            <p>Use in-editor SEO recommendations to increase organic search traffic.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Pop-Up Forms</h4>
                            <p>Capture new subscribers and leads with customizable pop-up forms. No code required.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Marketing Automation Software</h4>
                            <p>Spend less time on busy work by automating email campaigns, lead scoring, and more.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Chatbot Builder Software</h4>
                            <p>Qualify leads, book meetings, provide customer support, and scale conversations with
                                chatbots.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Contact Database & Management Software</h4>
                            <p>Keep records up to date with ease. Add contacts and log sales activity with a single click.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h4>Lead Management & Tracking Software</h4>
                            <p>Manage all your lead records in one centralized database to streamline outreach.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Team Email</h4>
                            <p>Connect team email addresses to a universal inbox for easy and efficient collaboration.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Free Live Chat Software</h4>
                            <p>Connect with visitors in real time to convert leads, close deals, and provide support.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 ">
                            <h4>Video Hosting</h4>
                            <p>Embed videos and measure their performance on marketing, sales, and service collateral.
                            </p>
                        </div>
                    </div>


                </div>


            </div>


            {/* <!-- Frequently Asked Questions --> */}


            <div className="Frequently-Asked-Questions">
                <div className="container">

                    <div className="button-div">
                        <h2 className="text-center my-5">Frequently Asked Questions</h2>

                        <div className="py-2">
                            <button className="hsg-accordion__label" aria-controls="hsg-accordion__content-0"
                                aria-expanded="false">
                                <h3 className="hsg-accordion__label-text">What is the HubSpot CRM platform?</h3>
                            </button>
                        </div>

                        <div className="py-2">
                            <button className="hsg-accordion__label" aria-controls="hsg-accordion__content-0"
                                aria-expanded="false">
                                <h3 className="hsg-accordion__label-text" id="card-text">What does HubSpot do?</h3>

                            </button>
                        </div>

                        <div className="py-2">
                            <button className="hsg-accordion__label" aria-controls="hsg-accordion__content-0"
                                aria-expanded="false">
                                <h3 className="hsg-accordion__label-text">Why is HubSpot so popular?</h3>
                            </button>
                        </div>

                        <div className="py-2">
                            <button className="hsg-accordion__label" aria-controls="hsg-accordion__content-0"
                                aria-expanded="false">
                                <h3 className="hsg-accordion__label-text">What kind of software is HubSpot?W</h3>
                            </button>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}
