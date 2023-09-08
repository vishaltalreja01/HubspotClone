import { RiVideoFill } from "react-icons/ri";
import React, { useState } from "react";
import { BiSolidPhone } from "react-icons/bi";
import { BsFillCheckCircleFill, BsFillCircleFill } from "react-icons/bs";
import './MarketingHub.css'
const MarketingHub = () => {

    const [dark, setDark] = useState("drive");
    const [content, setContent] = useState({
        text: "Tools that help  you reach your audience at the right time and place",
        img: "https://53.fs1.hubspotusercontent-na1.net/hubfs/53/MH1_Attract%20Attention.png",
    });


    return (
        <>

            <div>
                <div className="py-3 px-32 mb-7">
                    <a href="/" className="no-underline text-sm font-medium text-teal-500">
                        Home
                    </a>
                    <span className="ml-6 text-teal-500 font-medium text-lg">&gt;</span>
                    <p className="inline ml-4 font-light text-sm">Marketing Hub</p>
                </div>
                <div className="flex m-auto max-w-5xl">
                    <div className="img-div">
                        <img
                            src="https://www.hubspot.com/hs-fs/hubfs/Marketing-Hub-Featured-Image-EN@2x.png?width=1212&height=922&name=Marketing-Hub-Featured-Image-EN@2x.png"
                            alt="Marketing hub"
                            className="max-w-lg ml-4"
                        />
                    </div>
                    <div className="flex flex-col w-[50%] ml-6">
                        <span>
                            {" "}
                            <img
                                src="https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg"
                                alt=""
                                className="w-6 h-6 inline mb-2 "
                            />{" "}
                            <p className="leading-4.5 font-medium text-2xl inline ml-2">
                                Marketing Hub<sup>TM</sup>
                            </p>
                        </span>
                        <h1
                            className="leading-6 font-bold text-blue-950 text-4xl mt-6"
                        // style={{ fontFamily: "LexendDeca HalvericaNeue" }}
                        >
                            Marketing Software
                        </h1>
                        <div className="flex mt-10">
                            <button className="py-2 px-2 bg-orange-500 text-md text-white rounded-md">
                                Get a demo
                            </button>
                            <button className="ml-4 py-2 px-2 text-md bg-white text-orange-500 border-2 border-orange-500 rounded-md">
                                Get started free
                            </button>
                        </div>
                        {/* <div className="mt-10">
            <button className="py-3 px-3 border border-grey-300 cursor-pointer bg-transparent rounded-sm">
              <h1 className="inline font-bold text-sm">Product Description</h1>{" "}
              <span className="ml-52 text-blue-500 font-semibold text-2xl">
                +
              </span>
            </button>
            <button className="py-3 px-3 border border-grey-300 bg-transparent cursor-pointer rounded-sm mt-2 ">
              <h1 className="inline font-bold text-sm pr-1">
                Pricing Overview
              </h1>{" "}
              <span className="ml-56 text-blue-500 font-semibold text-2xl">
                +
              </span>
            </button>
            <button className="py-3 px-3 border border-grey-300 bg-transparent rounded-sm cursor-pointer mt-2">
              <h1 className="inline font-bold text-sm pr-7">Features</h1>{" "}
              <span className="ml-64 text-blue-500 font-semibold text-2xl">
                +
              </span>
            </button>
          </div> */}
                        <div className="accordion pt-10" id="accordionExample">
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header pb-0 border-gray-100  border-2 font-bold">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Product Description
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        This is the first item's accordion body. It
                                        is shown by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing
                                        and hiding via CSS transitions. You can modify any of this
                                        with custom CSS or overriding our default variables. It's also
                                        worth noting that just about any HTML can go within the{" "}
                                        <code>.accordion-body</code>, though the transition does limit
                                        overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header pb-0 border-gray-100  border-2 font-bold">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Pricing Overview
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        This is the second item's accordion body It
                                        is hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing
                                        and hiding via CSS transitions. You can modify any of this
                                        with custom CSS or overriding our default variables. It's also
                                        worth noting that just about any HTML can go within the{" "}
                                        <code>.accordion-body</code>, though the transition does limit
                                        overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header pb-0 border-gray-100  border-2 font-bold">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Features
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        This is the third item's accordion body. It
                                        is hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing
                                        and hiding via CSS transitions. You can modify any of this
                                        with custom CSS or overriding our default variables. It's also
                                        worth noting that just about any HTML can go within the{" "}
                                        <code>.accordion-body</code>, though the transition does limit
                                        overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trustedby pt-28 m-auto max-w-4xl">
                    <h1 className="text-center text-blue-950 text-base font-bold">
                        TRUSTED BY
                    </h1>
                    <div className="logos flex mt-5">
                        <img
                            src="https://www.hubspot.com/hubfs/WW%20Logo%20for%20HS%20Website%20(2).png"
                            alt=""
                            className="h-11 w-24"
                        />
                        <img
                            src="https://www.hubspot.com/hubfs/Marinemax%20Logo%20for%20HS%20Website%20(1).png"
                            alt=""
                            className="h-10 w-20 ml-6"
                        />
                        <img
                            src="https://www.hubspot.com/hubfs/Fast%20Signs%20Logo%20for%20HS%20Website-1.png"
                            alt=""
                            className="h-10 w-20 ml-6"
                        />
                        <img
                            src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/Monday.com%20Logo.png"
                            alt=""
                            className="h-10 w-20 ml-6"
                        />
                        <img
                            src="https://www.hubspot.com/hubfs/Fergals/Case%20Study%20Logos/Casio%20Logo.png"
                            alt=""
                            className="h-7 mt-2 w-20 ml-6"
                        />
                        <img
                            src="https://www.hubspot.com/hubfs/amika%20for%20HS%20Website.png"
                            alt=""
                            className="h-10 w-20 ml-5"
                        />
                        <img
                            src="https://www.hubspot.com/hubfs/Reddit.png"
                            alt=""
                            className="h-10 w-20 ml-6"
                        />
                        <img
                            src="https://www.hubspot.com/hubfs/Rakuten%20Advertising%20for%20HS%20Website.png"
                            alt=""
                            className="h-10 w-20 ml-6"
                        />
                    </div>
                </div>
                <div className="flex m-auto max-w-5xl">
                    <div className="content max-w-[50%] mt-24">
                        <h2 className="text-3xl font-bold text-blue-950 max-w-md">
                            All your marketing tools and data — connected in one place.
                        </h2>
                        <p className="mt-8  text-blue-950 text-base font-normal leading-6.8">
                            Many marketers are in a crisis of disconnection. Constantly-changing
                            channels make it hard to connect with customers. Silos make it hard
                            to connect your teams. Disparate systems make it hard to connect
                            your data. But it doesn’t have to be that way.
                        </p>
                        <p className="mt-4  text-blue-950 text-base font-normal leading-6.8">
                            Marketing Hub is the connected way to market. It links your tools
                            and experiences to unite your teams, all on top of a platform that
                            connects your data. All of those bridges mean deeper connections
                            with your customers and better results.
                        </p>
                    </div>
                    <div className="my-auto ml-20 pb-16">
                        <img
                            src="https://play.vidyard.com/UNS5Wg4tj59YcDjPNK6V9L.jpg"
                            alt=""
                            className="mt-40 h-56"
                        />
                        <RiVideoFill className="relative bottom-32 left-44 text-5xl text-blue-400 rounded-xl" />
                    </div>
                </div>
            </div>

            <div className="bg-blue-100 pt-28 pb-24">
                <h1 className="text-center text-blue-950 font-bold leading-3 text-3xl pb-16">
                    Marketing Software That's Easy to Use and Love
                </h1>
                <div class="flex">
                    <ul class="flex ml-36 border-b-2 border-blue-950  ">
                        <li
                            className={`cursor-pointer p-2 ml-16 mr-40 border-b-4 text-blue-950 ${dark === "drive" ? "font-bold border-blue-950" : ""
                                } whitespace-nowrap`}
                            onClick={() => {
                                setDark("drive");
                                setContent({
                                    text: " Tools that help  you reach your audience at the right time and place",
                                    img: "https://53.fs1.hubspotusercontent-na1.net/hubfs/53/MH2_Convert%20Leads_EN.png",
                                });
                            }}
                        >
                            Drive Revenue
                        </li>
                        <li
                            className={`cursor-pointer p-2 mr-40  border-b-2  text-blue-950 ${dark === "resources" ? "font-bold border-blue-950" : ""
                                }  whitespace-nowrap `}
                            onClick={() => {
                                setDark("resources");
                                setContent({
                                    text: "Stay organized, aligned, and scale engagement across all of your touchpoints",
                                    img: "https://53.fs1.hubspotusercontent-na1.net/hubfs/53/MH1_Attract%20Attention.png",
                                });
                            }}
                        >
                            Save Time and Resources
                        </li>
                        <li
                            className={`cursor-pointer p-2 mr-40  border-b-2  text-blue-950 ${dark === "optimize" ? "font-bold border-blue-950" : ""
                                }  whitespace-nowrap `}
                            onClick={() => {
                                setDark("optimize");
                                setContent({
                                    text: "Make strategic business decisions that optimize your marketing efforts",
                                    img: "https://53.fs1.hubspotusercontent-na1.net/hubfs/53/MH3_Report%20and%20Customize_EN.png",
                                });

                            }}
                        >
                            Measure and Optimize
                        </li>
                    </ul>
                </div>
                <div className="pt-10 m-auto max-w-5xl flex pb-16">
                    <h3 className="font-semibold text-blue-950 max-w-lg ml-4 text-2xl">
                        {content.text}
                    </h3>
                    <img
                        src={content.img}
                        alt=""
                        height={360}
                        width={750}
                        className="ml-24"
                    />
                </div>
                <div className="w-[70%] alignCentered">
                    <h2 className="font-bold text-lg text-blue-950 pt-4">
                        POPULAR FEATURES:
                    </h2>
                    <div className="flex mt-8">
                        <div className="max-w-1/3">
                            <a
                                href="/"
                                className="no-underline text-md  text-teal-700 font-bold "
                            >
                                Forms
                            </a>
                            <p className="text-blue-950 mt-3 ">
                                Generate leads from your <br /> website using a powerful online
                                form builder.
                            </p>
                        </div>
                        <div className="max-w-1/3 ml-5">
                            <a
                                href="/"
                                className="no-underline text-md  text-teal-700 font-bold "
                            >
                                Live Chat
                            </a>
                            <p className="text-blue-950 mt-3 text-md">
                                Help site visitors with targeted <br />
                                welcome messages and chat automations.
                            </p>
                        </div>
                        <div className="w-1/3 ml-5">
                            <a
                                href="/"
                                className="no-underline text-md  text-teal-700 font-bold "
                            >
                                Salesforce Integration
                            </a>
                            <p className="text-blue-950 mt-3 text-md">
                                Connect HubSpot to Salesforce for a fast, reliable,
                                bi-directional sync — no technical work required.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="transform -translate-y-1/2 bg-white py-2 px-4 alignCentered my-0  z-50 text-center absolute rounded-full h-16"
                style={{ boxShadow: "0 2px 10px 0 rgba(33, 51, 67, 0.12)" }}
            >
                <h2 className="text-sm font-semibold">
                    Have questions? Give us a call and we'll walk you through it.
                </h2>
                <BiSolidPhone className="inline mr-2 relative bottom-[20px]" />
                <a
                    href="/"
                    className="no-underline text-md cursor-pointer relative bottom-[20px] text-teal-700 font-bold "
                >
                    +1 857-829-5060
                </a>
            </div>
            <div className='opacity-90 m-auto h-[38vh] text-white' style={{ backgroundImage: ' url(https://53.fs1.hubspotusercontent-na1.net/hubfs/53/assets/hubspot.com/core-2020/sales/multi-col%20bg%20image.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', zIndex: '1', backgroundPosition: '50%', position: 'absolute', left: '0', right: '0' }}>
                <h1 className='text-center pt-24 font-bold text-3xl leading-3' style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>It’s already easy to use. But we’re still here for you.</h1>
                <p className='text-center mt-8 font-bold text-md ' style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>Because you shouldn’t have to figure it out all on your own.</p>
            </div>
            <div className='bg-black h-56'>
            </div>
            <div className="flex left-28 w-[80vw] absolute translate-y-[-50px] z-10">
                <div className="py-1 px-4 w-[32%] pt-4 border-2 border-gray-400  bg-white">
                    <h1 className="text-center font-bold text-blue-950 mb-3 text-2xl">24/7 Customer Support</h1>
                    <p className=" text-blue-950 text-md">HubSpot's award-winning customer support team is ready to help you with all your technical questions, and can be reached by live chat, email, or phone depending on your plan.</p>
                </div>
                <div className="py-1 px-4 w-[32%] pt-4 border-2 border-gray-400  bg-white">
                    <h1 className="text-center font-bold text-blue-950 mb-3 text-2xl">Services</h1>
                    <p className=" text-blue-950 text-md">Get up and running quickly with a personalized onboarding plan. Then maximize results along the way with premium training, ongoing consulting, and technical services.</p>
                </div>
                <div className="py-1 px-4 w-[32%] pt-4 border-2 border-gray-400  bg-white">
                    <h1 className="text-center font-bold text-blue-950 mb-3 text-2xl">Education</h1>
                    <p className=" text-blue-950 text-md">From blog articles to online courses to comprehensive certifications, HubSpot has a library of free educational content to help your whole team stay ahead of the curve as you grow.</p>
                </div>
            </div>
            <div className="bg-blue-100 pt-80 ">
                <div className="m-auto w-[75vw]">
                    <h1 className="text-center mb-3 text-blue-950 font-bold text-3xl">
                        Marketing Software That Grows With You
                    </h1>
                    <p className="text-center text-blue-950 mb-4">
                        Start with free tools and upgrade as you grow, or hit the ground
                        running with one of our <br /> premium editions.
                    </p>
                    <div className="flex pt-2">
                        <div className="w-[25%] pt-3 px-2 rounded-md border-t-4 border-gray-500 border-l border-r border-b border-solid bg-white pb-24 ">
                            <h1 className="pb-2 text-center font-bold text-xl text-blue-950">
                                Free
                            </h1>
                            <p className="mb-1 text-center text-sm text-gray-600">
                                100% free. <br /> No credit card required.
                            </p>
                            <hr className="mb-2 w-52 " />
                            <a
                                href="/"
                                className="text-center no-underline ml-8 text-sm font-bold text-teal-700"
                            >
                                Popular Features
                            </a>
                            <ul className="mt-6">
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Email marketing
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1 " />
                                    Forms
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Landing pages mb-1
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Live chat mb-1
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Blog
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Facebook, Google <br />
                                    <span className="ml-6">& LinkedIn ads</span>
                                    mb-1
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Contact management
                                </li>
                            </ul>
                        </div>
                        <div className="w-[25%] ml-4 pt-3 px-2 rounded-md border-t-4 border-yellow-500 border-l border-r border-b border-solid bg-white pb-24 ">
                            <h1 className="pb-2 text-center font-bold text-xl text-blue-950">
                                Starter
                            </h1>
                            <p className="mb-4 text-center text-sm text-gray-600">
                                Starting at $45/month
                            </p>
                            <hr className="mb-3 w-52 " />
                            <a
                                href="/"
                                className="text-center no-underline ml-8 text-sm font-bold text-teal-700"
                            >
                                Popular Features
                            </a>
                            <ul className="mt-6">
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Email marketing
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1 " />
                                    Forms
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Landing pages mb-1
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Live chat mb-1
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Blog
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Facebook, Google <br />
                                    <span className="ml-6">& LinkedIn ads</span>
                                    mb-1
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Contact management
                                </li>
                            </ul>
                        </div>
                        <div className="w-[25%] ml-4 pt-3 px-2 rounded-md border-t-4 border-teal-500 border-l border-r border-b border-solid bg-white pb-24 ">
                            <h1 className="pb-2 text-center font-bold text-xl text-blue-950">
                                Professional
                            </h1>
                            <p className="mb-4 text-center text-sm text-gray-600">
                                Starting at $800/month
                            </p>
                            <hr className="mb-3 w-52 " />
                            <a
                                href="/"
                                className="text-center no-underline ml-8 text-sm font-bold text-teal-700"
                            >
                                Popular Features
                            </a>
                            <ul className="mt-6">
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Email marketing
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1 " />
                                    Forms
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Landing pages mb-1
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Live chat mb-1
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Blog
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Facebook, Google <br />
                                    <span className="ml-6">& LinkedIn ads</span>
                                    mb-1
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Contact management
                                </li>
                            </ul>
                        </div>
                        <div className="w-[25%] ml-4 pt-3 px-2 rounded-md border-t-4 border-blue-400 border-l border-r border-b border-solid bg-white pb-24 ">
                            <h1 className="pb-2 text-center font-bold text-xl text-blue-950">
                                Enterprise
                            </h1>
                            <p className="mb-4 text-center text-sm text-gray-600">
                                Starting at $3,600/month .
                            </p>
                            <hr className="mb-3 w-52 " />
                            <a
                                href="/"
                                className="text-center no-underline ml-8 text-sm font-bold text-teal-700"
                            >
                                Popular Features
                            </a>
                            <ul className="mt-6">
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Email marketing
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1 " />
                                    Forms
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Landing pages mb-1
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Live chat mb-1
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Blog
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Facebook, Google <br />
                                    <span className="ml-6">& LinkedIn ads</span>
                                    mb-1
                                </li>
                                <li>
                                    <BsFillCheckCircleFill className="inline mx-2 text-gray-500 text-sm mb-1" />
                                    Contact management
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="icons flex mt-8 justify-center pb-3">
                        <BsFillCircleFill className="mx-2 text-teal-500" />
                        <BsFillCircleFill className="mx-2 text-teal-300" />
                        <BsFillCircleFill className="mx-2 text-teal-300" />
                    </div>
                    <div className="flex btn-div justify-center pb-16">
                        <button className="py-2 px-2 bg-orange-500 text-md text-white rounded-md">
                            Get a demo of premium editions
                        </button>
                        <button className="py-2 px-2 text-md bg-white text-orange-500 ml-4 border-2 border-orange-500 rounded-md">
                            Get started with free tools
                        </button>
                    </div>
                </div>
                <div>
                    <p className="text-sm text-center  text-blue-950 ">
                        For more detailed information on product packaging and the limits that apply, please see our Product and Services Catalog here. Price shown
                        in USD and<br/> subject to applicable tax.
                    </p>
                    <h1 className="font-bold text-blue-950 text-center mt-4 pb-8">
                        CONSISTENTLY PRAISED BY HUBSPOT USERS ON REVIEW SITE G2.COM
                    </h1>
                    <div className="flex justify-center pb-20">
                        <img
                            src="https://www.hubspot.com/hubfs/G2%20badges%20all/G2%20badges%20Winter%202023/badge-leader-winter-2023.png"
                            alt=""
                            className="h-28 w-auto mx-3"
                        />
                        <img
                            src="https://www.hubspot.com/hubfs/G2%20badges%20all/G2%20badges%20Winter%202023/bagde-momentum-leader-winter-2023.png"
                            alt=""
                            className="h-28 w-auto mx-3"
                        />
                        <img
                            src="https://www.hubspot.com/hubfs/G2%20badges%20all/G2%20badges%20Winter%202023/badge-best-usability-enterprise-winter-2023.png"
                            alt=""
                            className="h-28 w-auto mx-3"
                        />
                        <img
                            src="https://www.hubspot.com/hubfs/G2%20badges%20all/G2%20badges%20Winter%202023/badge-best-results-enterprise-winter-2023.png"
                            alt=""
                            className="h-28 w-auto mx-3"
                        />
                        <img
                            src="https://www.hubspot.com/hubfs/G2%20badges%20all/G2%20badges%20Winter%202023/badge-best-relationship-enterprise-winter-2023.png"
                            alt=""
                            className="h-28 w-auto mx-3"
                        />
                        <img
                            src="https://www.hubspot.com/hubfs/G2%20badges%20all/G2%20badges%20Winter%202023/badge-leader-mid-market-winter-2023.png"
                            alt=""
                            className="h-28 w-auto mx-3"
                        />
                        <img
                            src="https://www.hubspot.com/hubfs/G2%20badges%20all/G2%20badges%20Winter%202023/badge-leader-small-business-winter-2023.png"
                            alt=""
                            className="h-28 w-auto mx-3"
                        />
                    </div>
                </div>
            </div>
            <div className='bg-white m-auto w-[80%] pb-24'>
                <h1 className='pt-1 font-bold text-3xl text-center'>How HubSpot Customers Are Connecting</h1>
                <p className='pt-3 text-center text-sm pb-8'>Don’t just take our word for it. Here’s what some of our customers say about how Marketing Hub helps them drive revenue, save time and <br />resources, and measure and optimize investments.</p>
                <div className="flex outerdiv">
                    <div className='innerdiv flex justify-center'>
                        <img src="https://f.hubspotusercontent00.net/hubfs/53/Kettlebell%20Kings%20Logo.png" alt="" className='relative bottom-[-87%] h-12 w-auto' />
                    </div>
                    <div className='innerdiv flex justify-center ml-5'>
                        <img src="https://www.hubspot.com/hubfs/ViSENZE-logo.png" alt="" className='relative bottom-[-87%] h-12 w-auto' />
                    </div>
                    <div className='innerdiv flex justify-center ml-5'>
                        <img src="https://www.hubspot.com/hubfs/ResellerRatings-logo.png" alt="" className='relative bottom-[-87%] h-12 w-auto' />
                    </div>
                </div>
                <h1 className='font-bold pt-16 text-blue-950 text-xl text-center'>Drive revenue, save time and resources, and optimize your investments with Marketing Hub.</h1>
                <div className="flex mt-4 justify-center">
                    <button className="py-2 px-2 w-36 bg-orange-500 text-md text-white rounded-md">
                        Get a demo
                    </button>
                    <button className="ml-4 py-2 px-2 w-36 text-md bg-white text-orange-500 border-2 border-orange-500 rounded-md">
                        Get started free
                    </button>
                </div>
            </div>
            <div className="bg-blue-100 pt-20 pb-16 ">
                <h2 className="font-bold text-center text-2xl text-blue-950 pb-8">
                    Frequently Asked Questions
                </h2>
                {/* <div className="boxes">
      <div className="question-box">
        <span className="greater">&gt;</span>
        <p className="text-sm font-bold pt-1">How much HubSpot's marketing software cost?</p>
      </div>
      <div className="question-box">
        <span className="greater">&gt;</span>
        <p className="text-sm font-bold pt-1">What are popular marketing software features?</p>
      </div>
    </div>
    <div className="boxes">
      <div className="question-box">
        <span className="greater">&gt;</span>
        <p className="text-sm font-bold pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic.?</p>
      </div>
      <div className="question-box">
        <span className="greater">&gt;</span>
        <p className="text-sm font-bold pt-1">Lorem ipsum dolor sit amet consectetur?</p>
      </div>
    </div>
    <div className="boxes">
      <div className="question-box">
        <span className="greater">&gt;</span>
        <p className="text-sm font-bold pt-1">Lorem ipsum dolor sit, amet consectetur adipisicing?</p>
      </div>
      <div className="question-box">
        <span className="greater">&gt;</span>
        <p className="text-sm font-bold pt-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          cumque?
        </p>
      </div>
    </div>
    <div className="boxes">
      <div className="question-box">
        <span className="greater">&gt;</span>
        <p className="text-sm font-bold pt-1">Lorem ipsum dolor sit, amet consectetur adipisicing?</p>
      </div>
      <div className="question-box">
        <span className="greater">&gt;</span>
        <p className="text-sm font-bold pt-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          cumque?
        </p>
      </div>
    </div>
    <div className="boxes">
      <div className="question-box">
        <span className="greater">&gt;</span>
        <p className="text-sm font-bold pt-1">Lorem ipsum dolor sit, amet consectetur adipisicing?</p>
      </div>
      <div className="question-box">
        <span className="greater">&gt;</span>
        <p className="text-sm font-bold pt-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          cumque?
        </p>
      </div>
    </div>
    <div className="boxes">
      <div className="question-box">
        <span className="greater">&gt;</span>
        <p className="text-sm font-bold pt-1">Lorem ipsum dolor sit amet.?</p>
      </div>
      <div className="question-box">
        <span className="greater">&gt;</span>
        <p className="text-sm font-bold pt-1">Lorem ipsum dolor sit amet.?</p>
      </div>
    </div> */}
                <div className="flex m-auto w-[90%]">
                    <div className="accordion pt-10 mx-3 w-1/2" id="accordionExample">
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header pb-0 border-gray-100  border-2 font-bold">
                                <button
                                    className="accordion-button text-sm"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    How much Hubspot's marketing software cost?
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse "
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    This is the first item's accordion body. It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we
                                    use to style each element.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item  mb-3">
                            <h2 className="accordion-header pb-0 border-gray-100  border-2 font-bold">
                                <button
                                    className="accordion-button collapsed text-sm"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    Does Hubspot's marketing software integrate with Salesforce and
                                    other third part tools?
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    This is the second item's accordion body It is hidden by
                                    default, until the collapse plugin adds the appropriate classes
                                    that we use to style each element
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header pb-0 border-gray-100  border-2 font-bold">
                                <button
                                    className="accordion-button collapsed text-sm"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    Can i customize the data in my Marketing Hub account?
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    This is the third item's accordion body. It is hidden by
                                    default, until the collapse plugin adds the appropriate classes
                                    that we use to style each element.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion pt-10 w-1/2  mx-3" id="accordionExample">
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header pb-0 border-gray-100  border-2 font-bold">
                                <button
                                    className="accordion-button text-sm"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="true"
                                    aria-controls="collapseFour"
                                >
                                    How much Hubspot's marketing software cost?
                                </button>
                            </h2>
                            <div
                                id="collapseFour"
                                className="accordion-collapse collapse "
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    This is the first item's accordion body. It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we
                                    use to style each element.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item  mb-3">
                            <h2 className="accordion-header pb-0 border-gray-100  border-2 font-bold">
                                <button
                                    className="accordion-button collapsed text-sm"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                >
                                    Does Hubspot's marketing software integrate with Salesforce and
                                    other third part tools?
                                </button>
                            </h2>
                            <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    This is the second item's accordion body It is hidden by
                                    default, until the collapse plugin adds the appropriate classes
                                    that we use to style each element
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header pb-0 border-gray-100  border-2 font-bold">
                                <button
                                    className="accordion-button collapsed text-sm"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix"
                                    aria-expanded="false"
                                    aria-controls="collapseSix"
                                >
                                    Can i customize the data in my Marketing Hub account?
                                </button>
                            </h2>
                            <div
                                id="collapseSix"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    This is the third item's accordion body. It is hidden by
                                    default, until the collapse plugin adds the appropriate classes
                                    that we use to style each element.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-950 text-white pb-24 ">
                <div className="m-auto w-[80%]">
                    <h1 className="font-bold text-center text-3xl pt-16">
                        You may also like ...
                    </h1>
                    <p className="text-center mt-4 mb-4">
                        Marketing Hub is one piece of HubSpot’s complete CRM platform to help
                        your business grow better. Each product is powerful alone, but they’re
                        even better when used together.
                    </p>
                </div>
                <div id="carouselExample" className="carousel slide mt-8 mx-auto w-[80%]">
                    <div className="carousel-inner ">
                        <div
                            className="carousel-item active mx-72"
                            style={{ height: "480px" }}
                        >
                            <div
                                className="bg-white flex flex-col p-3 rounded-md"
                                style={{ width: "380px" }}
                            >
                                <img
                                    src="https://www.hubspot.com/hubfs/product_icons_2022/SalesHub_Icon_Gradient_RGB_24px.svg"
                                    alt=""
                                    className="w-8 h-auto mx-40"
                                />
                                <h1 className="font-bold text-2xl text-blue-950 text-center pt-2 pb-2">
                                    Sales Hub
                                </h1>
                                <p className=" text-blue-950 text-md pb-3">
                                    Sales CRM software to help you get deeper insights into
                                    prospects, automate the tasks you hate, and close more deals
                                    faster.
                                    <a
                                        href="/"
                                        className="no-underline block pt-8 text-md font-bold text-teal-600"
                                    >
                                        Learn about Sales Hub
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item mx-72" style={{ height: "480px" }}>
                            {" "}
                            <div
                                className="bg-white flex flex-col p-3 rounded-md"
                                style={{ width: "380px" }}
                            >
                                <img
                                    src="https://www.hubspot.com/hubfs/product_icons_2022/SalesHub_Icon_Gradient_RGB_24px.svg"
                                    alt=""
                                    className="w-8 h-auto mx-40"
                                />
                                <h1 className="font-bold text-2xl text-blue-950 text-center pt-2 pb-2">
                                    Service Hub
                                </h1>
                                <p className=" text-blue-950 text-md pb-3">
                                    Customer service management software to help you connect with customers, exceed expectations, and turn them into promoters who grow your business.


                                    <a
                                        href="/"
                                        className="no-underline block pt-8 text-md font-bold text-teal-600"
                                    >
                                        Learn about Service Hub
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item mx-72" style={{ height: "480px" }}>
                            {" "}
                            <div
                                className="bg-white flex flex-col p-3 rounded-md"
                                style={{ width: "380px" }}
                            >
                                <img
                                    src="https://www.hubspot.com/hubfs/product_icons_2022/SalesHub_Icon_Gradient_RGB_24px.svg"
                                    alt=""
                                    className="w-8 h-auto mx-40"
                                />
                                <h1 className="font-bold text-2xl text-blue-950 text-center pt-2 pb-2">
                                    CMS Hub
                                </h1>
                                <p className=" text-blue-950 text-md pb-3">
                                    Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.


                                    <a
                                        href="/"
                                        className="no-underline block pt-8 text-md font-bold text-teal-600"
                                    >
                                        Learn about CMS Hub
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default MarketingHub;
