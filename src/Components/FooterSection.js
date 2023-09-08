import React from 'react'
import { Link } from "react-router-dom";

export default function FooterSection() {
    return (
        <>
            <footer className='footer-section'>
                <div className='hsg-footer__layout'>

                    <div className='footer-main-div'>

                        <div className='footer-left-dive'>

                            <section className='hsg-footer__nav-column hsg-footer__nav-column-left'>
                            <h2 class="hsg-footer__nav-heading">
                                    <button class="hsg-footer__nav-toggle" tabindex="-1" aria-disabled="true" aria-expanded="true">Popular Features</button>
                                </h2>
                                <div>
                              
                                    <ul style={{minWidth:250}} >

                                        <li className='footer-nav-items'><Link to="/AllProductsAndFeatures">All Products and Features</Link></li>

                                        <li className='footer-nav-items'><a>Free Meeting Scheduler App</a></li>

                                        <li className='footer-nav-items'><a>Social Media Tools</a></li>

                                        <li cllasName='footer-nav-items'><a>Email Tracking Software</a></li>

                                        <li className='footer-nav-items'><a>Sales Email Automation</a></li>

                                        <li className='footer-nav-items'><a>Ads Software</a></li>

                                        <li className='footer-nav-items'><a>Email Marketing Software</a></li>

                                        <li className='footer-nav-items'><a>Lead Management Software</a></li>

                                        <li className='footer-nav-items'><a>Pipeline Management Tools</a></li>

                                    </ul>
                                </div>
                            </section>
                            <div  className='second-ul-left'>
                                <ul>
                                    <li className='footer-nav-items'><Link to="/FreeWebsiteBuilder">Free Website Builder</Link></li>
                                    <li className='footer-nav-items'><Link to="/SalesEmailTemplates">Sales Email Templates</Link></li>
                                    <li className='footer-nav-items'><Link to="/HelpDeskSoftware">Help Desk Software</Link></li>
                                    <li className='footer-nav-items'><Link to="/SalesEmailTemplates">Free Online Form Builder</Link></li>
                                    <li className='footer-nav-items'><Link to="/FreeChatbotBuilder">Free Chatbot Builder</Link></li>
                                    <li className='footer-nav-items'><Link to="/FreeLiveChatSoftware">Free Live Chat Software</Link></li>
                                    <li className='footer-nav-items'><Link to="/MarketingAnalytics">Marketing Analytics</Link></li>
                                    <li className='footer-nav-items'><Link to="/FreeLandingPageBuilder">Free Landing Page Builder</Link></li>
                                    <li className='footer-nav-items'><Link to="/FreeWebHosting">Free Web Hosting</Link></li>
                                </ul>


                            </div>

                        </div>

                        
                        <div className='footer-right-dive'>

                            <div className='hsg-footer__nav-full'>

                                <section className='hsg-footer__nav-column'>

                                    <h2 class="hsg-footer__nav-heading">
                                        <button class="hsg-footer__nav-toggle" tabindex="-1" aria-disabled="true" aria-expanded="true">Free Tools</button>
                                    </h2>
                                    <ul style={{minWidth:250}}>
                                        <li className='footer-nav-items'><a>Website Grader</a></li>
                                        <li className='footer-nav-items'><a>Make My Persona</a></li>
                                        <li className='footer-nav-items'><a>Email Signature Generator</a></li>
                                        <li className='footer-nav-items'><a>Brand Kit Generator</a></li>
                                        <li className='footer-nav-items'><a>Blog Ideas Generator</a></li>
                                        <li className='footer-nav-items'><a>Invoice Template Generator</a></li>
                                        <li className='footer-nav-items'><a>Marketing Plan Generator</a></li>
                                        <li className='footer-nav-items'><a>Free Business Templates</a></li>
                                        <li className='footer-nav-items'><a>Industry Benchmark Data</a></li>
                                        <li className='footer-nav-items'><a>Software Comparisons</a></li>
                                        <li className='footer-nav-items'><a>Library</a></li>
                                        <li className='footer-nav-items'><a>Website Themes & Templates</a></li>
                                        <li className='footer-nav-items'><a>Campaign Assistant</a></li>

                                    </ul>

                                </section>


                            </div>

                            <div className='hsg-footer__nav-full'>

                                <section className='hsg-footer__nav-column'>

                                    <h2 class="hsg-footer__nav-heading">
                                        <button class="hsg-footer__nav-toggle" tabindex="-1" aria-disabled="true" aria-expanded="true">Company</button>
                                    </h2>
                                    <ul style={{minWidth:200}}>
                                        <li className='footer-nav-items'><a>About Us</a></li>
                                        <li className='footer-nav-items'><Link to="/Carees">Careers</Link></li>
                                        <li className='footer-nav-items'><a>Management Team</a></li>
                                        <li className='footer-nav-items'><a>Board of Directors</a></li>
                                        <li className='footer-nav-items'><a>Investor Relations</a></li>
                                        <li className='footer-nav-items'><a>Blog</a></li>
                                        <li className='footer-nav-items'><a>Contact Us</a></li>

                                    </ul>

                                </section>

                            </div>

                            <div className='hsg-footer__nav-split'>
                                <section className='hsg-footer__nav-column'>
                                    <h2 class="hsg-footer__nav-heading">
                                        <button class="hsg-footer__nav-toggle" tabindex="-1" aria-disabled="true" aria-expanded="true">Customers</button>
                                    </h2>
                                    <ul style={{minWidth:250}}>
                                        <li className='footer-nav-items'><a>Customer Support</a></li>
                                        <li className='footer-nav-items'><a>Join a Local User Group</a></li>

                                    </ul>

                                </section>

                                <section className='hsg-footer__nav-column'>
                                    <h2 class="hsg-footer__nav-heading">
                                        <button class="hsg-footer__nav-toggle" tabindex="-1" aria-disabled="true" aria-expanded="true">Partners</button>
                                    </h2>
                                    <ul>
                                        <li className='footer-nav-items'><a>All Partner Programs</a></li>
                                        <li className='footer-nav-items'><a>Solutions Partner Program</a></li>
                                        <li className='footer-nav-items'><a>App Partner Program</a></li>
                                        <li className='footer-nav-items'><a>HubSpot for Startups</a></li>
                                        <li className='footer-nav-items'><a>Affiliate Program</a></li>
                                    </ul>
                                </section>


                            </div>


                        </div>

                    </div>
                </div>


                <section class="hsg-footer__contact-links social-cl">
                    <ul class="hsg-footer__social">

                        <li>
                            <a href="https://www.facebook.com/hubspot?hubs_content=www.hubspot.com/products&amp;hubs_content-cta=hstc_facebook" target="_blank" class="ga_nav_link hstc_facebook" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="30" fill="#b6c7d6" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" /> </svg>
                                {/* <span class="hidden-social">Facebook</span> */}
                            </a>

                        </li>
                        <li>
                            <a href="https://www.instagram.com/hubspot/?hubs_content=www.hubspot.com/products&amp;hubs_content-cta=hstc_instagram" target="_blank" class="ga_nav_link hstc_instagram" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="30" fill="#b6c7d6" class="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /> </svg>
                                {/* <span class="hidden-social">Instagram</span> */}
                            </a>

                        </li>
                        <li>
                            <a href="https://youtube.com/user/HubSpot?hubs_content=www.hubspot.com/products&amp;hubs_content-cta=hstc_youtube" target="_blank" class="ga_nav_link hstc_youtube" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Youtube">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="30" fill="#b6c7d6" class="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" /> </svg>
                                {/* <span class="hidden-social">Youtube</span> */}
                            </a>

                        </li>
                        <li>
                            <a href="https://twitter.com/HubSpot?hubs_content=www.hubspot.com/products&amp;hubs_content-cta=hstc_twitter" target="_blank" class="ga_nav_link hstc_twitter" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Twitter">

                                {/* <span class="hidden-social">Twitter</span> */}
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/hubspot?hubs_content=www.hubspot.com/products&amp;hubs_content-cta=hstc_linkedin" target="_blank" class="ga_nav_link hstc_linkedin" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Linkedin">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="30" fill="#b6c7d6" class="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /> </svg>
                                {/* <span class="hidden-social">Linkedin</span> */}
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@HubSpot?hubs_content=www.hubspot.com/products&amp;hubs_content-cta=hstc_medium" target="_blank" class="ga_nav_link hstc_medium" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Medium">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="30" fill="#b6c7d6" class="bi bi-medium" viewBox="0 0 16 16"> <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" /> </svg>
                                {/* <span class="hidden-social">Medium</span> */}
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@hubspot?hubs_content=www.hubspot.com/products&amp;hubs_content-cta=hstc_medium" target="_blank" class="ga_nav_link hstc_medium" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Tiktok">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="#b6c7d6" class="bi bi-tiktok" viewBox="0 0 16 16"> <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" /> </svg>
                                {/* <span class="hidden-social">Tiktok</span> */}
                            </a>
                        </li>
                    </ul>
                </section>

                <section class="hsg-footer__bottom">
                    <div class="hsg-footer__apps">


                        <a class="ga_nav_link hsg-footer__app" href="https://apps.apple.com/us/app/hubspot/id1107711722?hubs_content=www.hubspot.com/products&amp;hubs_content-cta=hsg-footer__app" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Download on the App Store">
                            <img class="homepage-mobile-footer-apple" src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/app%20store%20high%20res.png" alt="Download on the App Store" loading="lazy" />
                        </a>
                        <a class="ga_nav_link hsg-footer__app" href="https://play.google.com/store/apps/details?id=com.hubspot.android&amp;hl=en_US&amp;hubs_content=www.hubspot.com/products&amp;hubs_content-cta=hsg-footer__app" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Get it on Google Play">
                            <img class="homepage-mobile-footer-google" src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/google%20play%20high%20res.png" alt="Get it on Google Play" loading="lazy" />
                        </a>

                    </div>
                    <div class="hsg-footer__logo">
                        <a href="https://www.hubspot.com/?hubs_content=www.hubspot.com/products&amp;hubs_content-cta=null" class="ga_nav_link" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="HubSpot Logo">
                            <img loading="lazy" src="https://www.hubspot.com/hubfs/WBZ-1165%20Global%20Nav%20Redesign/Wordmark-White.svg" alt="HubSpot" /></a>
                        <p>Copyright © 2023 HubSpot, Inc.</p>
                    </div>
                    <div class="hsg-footer__copyright">
                        <ul>
                            <li><a href="https://legal.hubspot.com/legal-stuff?hubs_content=www.hubspot.com/products&amp;hubs_content-cta=Legal%20Stuff" class="ga_nav_link" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Legal Stuff">
                                Legal Stuff</a></li>
                            <li><a href="https://legal.hubspot.com/privacy-policy?hubs_content=www.hubspot.com/products&amp;hubs_content-cta=Privacy%20Policy" class="ga_nav_link" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Privacy Policy">
                                Privacy Policy</a></li>
                            <li><a href="https://legal.hubspot.com/security?hubs_content=www.hubspot.com/products&amp;hubs_content-cta=Security" class="ga_nav_link" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Security">
                                Security</a></li>
                            <li class="hs-hidden-separator"><a href="https://legal.hubspot.com/website-accessibility?hubs_content=www.hubspot.com/products&amp;hubs_content-cta=Website%20Accessibility" class="ga_nav_link" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Website Accessibility">
                                Website Accessibility</a></li>
                            <li class="hs-footer-cookie-settings" hidden="">
                                <a href="javascript:void(0)?hubs_content=www.hubspot.com/products&amp;hubs_content-cta=null"></a>
                            </li>
                        </ul>
                    </div>
                </section>
            </footer>
        </>
    )
}
