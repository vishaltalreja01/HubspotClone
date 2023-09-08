import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {
    CgDetailsMore, CgClose
} from "react-icons/cg"



export default function Navbar() {

    const svgBase64 = "PD94bW...";
    const dataSvg = `data:image/svg+xml;base64,base64,${encodeURIComponent(svgBase64)}`
    const nameSpace = {
        xmlns: "http://www.w3.org/2000/svg",
        'xmlns: xlink': "http://www.w3.org/1999/xlink"
    };
    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            // window height changed for the demo
            windowHeight > 50 ? setStickyClass('fixed-top shadow') : setStickyClass('');
        }
    };


    return (

        <header className="nav_header">
            <nav className="nav_top_bar ">
                <div className="container ">
                    <div className="row nav_top_left">
                        <div className="col-md-5">
                            <ul className="top_bar_left_ul  top_bar_ul">
                                <li>English</li>
                                <li>High Contrast</li>
                                <li>Contact Sales</li>
                            </ul>
                        </div>

                        <div className="col-md-5 gap-3 ms-auto">
                            <ul className="top_bar_left_ul  top_bar_ul">
                                <li><i className="fa-solid fa-magnifying-glass"></i></li>
                                <Link to="/Login">Login</Link>
                                <li>Customer Support</li>
                                <li>About</li>
                            </ul>
                        </div>
                    </div>


                    <div id="navbar_top" className={`navbar ${stickyClass}`}>
                        <nav className="hsg-nav-menu">

                            <div className="hsg-page-width-normal">

                                <nav role="navigation">
                                    <div id="menuToggle">

                                        <input type="checkbox" />

                                        <span></span>
                                        <span></span>
                                        <span></span>


                                        <ul id="menu">
                                            <a href="#">
                                                <li>Software</li>
                                            </a>
                                            <a href="#">
                                                <li>Pricing</li>
                                            </a>
                                            <a href="#">
                                                <li>Resources</li>
                                            </a>

                                        </ul>

                                    </div>

                                </nav>


                                <nav class="navbar  navbar-expand-lg bg-body-tertiary">
                                    <div class="container-fluid">
                                        <a class="navbar-brand" href="#">

                                            <div className="nav-logo logo ">

                                                <img id="hsg-nav__logo-mobile" alt="HubSpot" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjdweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgMjcgMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7OmE1hcmtldGluZy9Mb2dvcy9TcHJvY2tldDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJNSEUtUG9zdC1MYXVuY2gtVXBkYXRlcyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Is6YTWFya2V0aW5nL0xvZ29zL1Nwcm9ja2V0IiBmaWxsPSIjZjk1YzM1Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTE5LjYxNDIzMywyMC4xNzcxMTYyIEMxNy41MjI4MDQxLDIwLjE3NzExNjIgMTUuODI3NDI0MSwxOC40OTkzNDU3IDE1LjgyNzQyNDEsMTYuNDI5OTk5NSBDMTUuODI3NDI0MSwxNC4zNjAyOTM3IDE3LjUyMjgwNDEsMTIuNjgyNTIzMiAxOS42MTQyMzMsMTIuNjgyNTIzMiBDMjEuNzA1NjYxOSwxMi42ODI1MjMyIDIzLjQwMTA0MTgsMTQuMzYwMjkzNyAyMy40MDEwNDE4LDE2LjQyOTk5OTUgQzIzLjQwMTA0MTgsMTguNDk5MzQ1NyAyMS43MDU2NjE5LDIwLjE3NzExNjIgMTkuNjE0MjMzLDIwLjE3NzExNjIgTTIwLjc0Nzg3NzUsOS4yMTU1MTQyOSBMMjAuNzQ3ODc3NSw1Ljg4MTkwNzIyIEMyMS42MjcxNzg4LDUuNDcwOTE0NTcgMjIuMjQzMDUzLDQuNTkwNjc4MzMgMjIuMjQzMDUzLDMuNTY5MTI5NjcgTDIyLjI0MzA1MywzLjQ5MjE4MDkxIEMyMi4yNDMwNTMsMi4wODIyOTI3MyAyMS4wNzc0MzM4LDAuOTI4NzgwNTQ1IDE5LjY1Mjc0NzgsMC45Mjg3ODA1NDUgTDE5LjU3NTM1NDgsMC45Mjg3ODA1NDUgQzE4LjE1MDY2ODgsMC45Mjg3ODA1NDUgMTYuOTg1MDQ5NiwyLjA4MjI5MjczIDE2Ljk4NTA0OTYsMy40OTIxODA5MSBMMTYuOTg1MDQ5NiwzLjU2OTEyOTY3IEMxNi45ODUwNDk2LDQuNTkwNjc4MzMgMTcuNjAwOTIzOCw1LjQ3MTI3NDE0IDE4LjQ4MDIyNTEsNS44ODIyNjY3OSBMMTguNDgwMjI1MSw5LjIxNTUxNDI5IEMxNy4xNzEwODM2LDkuNDE1Nzk2OCAxNS45NzQ5NDMyLDkuOTUwMTIzMjEgMTQuOTg4NDU0NSwxMC43MzY1MTA3IEw1LjczOTQ0MDg2LDMuNjE2NTkzMzkgQzUuODAwNDgzMjYsMy4zODQ2Njg0IDUuODQzMzU4MjgsMy4xNDU5MTE1MSA1Ljg0MzcyMTYzLDIuODk0OTI5MTIgQzUuODQ1MTc1MDIsMS4yOTg0MjIyMyA0LjUzOTMwMzY4LDAuMDAyMTU5MzE0ODYgMi45MjUzMTM1NiwxLjg3MzExMTA3ZS0wNiBDMS4zMTIwNTAxNCwtMC4wMDE3OTU5OTUwMSAwLjAwMTgxODYzMTM4LDEuMjkwODcxMTggMS44OTMyOTY1ZS0wNiwyLjg4NzczNzY1IEMtMC4wMDE4MTQ4NDQ3OSw0LjQ4NDYwNDEyIDEuMzA0MDU2NDksNS43ODA4NjcwMyAyLjkxODA0NjYxLDUuNzgyNjY0OSBDMy40NDM4MTA2MSw1Ljc4MzM4NDA1IDMuOTMwNjk2NDIsNS42MzU1OTkyOSA0LjM1NzI2NjUyLDUuMzk1NDA0MTEgTDEzLjQ1NTEyNzUsMTIuMzk5NTM4NyBDMTIuNjgxNTYwNCwxMy41NTUyMDg0IDEyLjIyODEwMjYsMTQuOTM5NTY2OCAxMi4yMjgxMDI2LDE2LjQyOTk5OTUgQzEyLjIyODEwMjYsMTcuOTkwMTg5NCAxMi43MjYyNTIyLDE5LjQzMzUxOCAxMy41Njc3NjUzLDIwLjYyMDQ3MDUgTDEwLjgwMTIzNjUsMjMuMzU4NjIzNyBDMTAuNTgyNTAxMywyMy4yOTM1NDA4IDEwLjM1NTc3MjMsMjMuMjQ4MjM0NiAxMC4xMTUyMzYyLDIzLjI0ODIzNDYgQzguNzg5MzgwNzYsMjMuMjQ4MjM0NiA3LjcxNDIzNTE2LDI0LjMxMTg1MzMgNy43MTQyMzUxNiwyNS42MjM5Mzc1IEM3LjcxNDIzNTE2LDI2LjkzNjM4MTIgOC43ODkzODA3NiwyOCAxMC4xMTUyMzYyLDI4IEMxMS40NDE0NTUsMjggMTIuNTE2MjM3MywyNi45MzYzODEyIDEyLjUxNjIzNzMsMjUuNjIzOTM3NSBDMTIuNTE2MjM3MywyNS4zODY2MTg5IDEyLjQ3MDQ1NTUsMjUuMTYxODg1NCAxMi40MDQ2ODk2LDI0Ljk0NTQyMjEgTDE1LjE0MTQyMzgsMjIuMjM3MTEzNSBDMTYuMzgzNzA5MywyMy4xNzUyNDExIDE3LjkzMDg0MzUsMjMuNzM5MDUyNiAxOS42MTQyMzMsMjMuNzM5MDUyNiBDMjMuNjkzNTM2NywyMy43MzkwNTI2IDI3LDIwLjQ2NjU3MyAyNywxNi40Mjk5OTk1IEMyNywxMi43NzU2NTI3IDI0LjI4NzI0NjcsOS43NTY2NzI2IDIwLjc0Nzg3NzUsOS4yMTU1MTQyOSIgaWQ9Ik1hcmtldGluZy9Mb2dvcy9TcHJvY2tldCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" />
                                                <img id="hsg-nav__logo-desktop" alt="HubSpot" src={"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMzguNjU5NjEgOTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMzOC42NTk2MSA5NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBvbHlnb24gZmlsbD0iIzIxMzM0MyIgcG9pbnRzPSIzNi42NzcyNSw1NC4zMzIxOSAxMS44MDkxOCw1NC4zMzIxOSAxMS44MDkxOCw4MC41Mjg1OSAwLDgwLjUyODU5IDAsMTUuODkwODMgMTEuODA5MTgsMTUuODkwODMgCgkJMTEuODA5MTgsNDIuOTcxMDMgMzYuNjc3MjUsNDIuOTcxMDMgMzYuNjc3MjUsMTUuODkwODMgNDguNDgzNzgsMTUuODkwODMgNDguNDgzNzgsODAuNTI4NTkgMzYuNjc3MjUsODAuNTI4NTkgCSIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTg2LjI2OTM2LDU5LjYzNjM0YzAsNS4zODM0NC00LjM4NTMxLDkuNzYzNzUtOS43Njc1NSw5Ljc2Mzc1Yy01LjM4MzY4LDAtOS43NjYxNi00LjM4MDMxLTkuNzY2MTYtOS43NjM3NQoJCXYtMjcuNjg0OUg1NS41NTMzOXYyNy42ODQ5YzAsMTEuNTUwMjUsOS4zOTc2NCwyMC45NDU1OCwyMC45NDg0MiwyMC45NDU1OGMxMS41NDg0MiwwLDIwLjk0NjA1LTkuMzk1MzMsMjAuOTQ2MDUtMjAuOTQ1NTgKCQl2LTI3LjY4NDloLTExLjE3ODVWNTkuNjM2MzR6Ii8+Cgk8cGF0aCBmaWxsPSIjMjEzMzQzIiBkPSJNMTY5LjI0NTU2LDM0LjgwMTljMC01LjY3NjIxLDMuNzU2OTktNy40NzYxNSw3Ljg3MDI1LTcuNDc2MTVjMy4zMTIwMSwwLDcuNjk0NzIsMi41MjA2OSwxMC41NTQyNCw1LjU4MzYxCgkJbDcuMzMzMjUtOC42NDQ0Yy0zLjY2NDUxLTQuOTUxMi0xMS4wODc5MS04LjM3NDEzLTE3LjE3MDc1LTguMzc0MTNjLTEyLjE2NzMxLDAtMjAuOTMzODUsNy4xMTQyNC0yMC45MzM4NSwxOC45MTEwNgoJCWMwLDIxLjg4MDQ2LDI2Ljc0ODIsMTQuOTQ0NzksMjYuNzQ4MiwyNy4xOTQwNGMwLDMuNzc3NTMtMy42NjYzOCw3LjExMjM2LTcuODY5MzQsNy4xMTIzNgoJCWMtNi42MjE3LDAtOC43Njk2MS0zLjI0MTc0LTExLjgwOTg2LTYuNjY0bC04LjE0MTgyLDguNDYyNzJjNS4xOTEyMiw2LjM5MzczLDExLjYzMDA4LDkuNjM3MzYsMTkuMzIzNjUsOS42MzczNgoJCWMxMS41Mzk0OSwwLDIwLjg0MzI1LTcuMjA0MDUsMjAuODQzMjUtMTguNDYxNDlDMTk1Ljk5MjgsMzcuNzcxNDgsMTY5LjI0NTU2LDQ1LjMzNjI3LDE2OS4yNDU1NiwzNC44MDE5eiIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTMzNC43MjA0OSw3MC4yMDI3OGMtNi42MTY5NywwLTguNDk1MDYtMi44NjA5Ni04LjQ5NTA2LTcuMjQ1OThWNDMuNTQ2NThoMTAuMjg0ODJ2LTkuODM4OTJoLTEwLjI4NDgyCgkJVjIwLjczNTE1bC0xMS4zNTc3OSw1LjA5ODI2djM5LjUzOTMxYzAsMTAuMTA5Myw2Ljk3NDY0LDE1LjIwOTIsMTYuNTQyNjYsMTUuMjA5MmMxLjQzMTIxLDAsMy40MDEyMS0wLjA5MjQ4LDQuNDc1NjgtMC4zNTc2NgoJCWwyLjc3MzYyLTEwLjE5NzA2QzMzNy40MDc3NSw3MC4xMTM1NywzMzUuOTc3MDIsNzAuMjAyNzgsMzM0LjcyMDQ5LDcwLjIwMjc4eiIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTEyOC44OTMyMywzMi4yNzUzM2MtNS41NDY3MywwLTkuNDE4MjksMS42MTAwMi0xMy4xNTczNiw1LjI4MDAzVjE2LjI3Njg1aC0xMS4yMTgwOXYzOS40MzU0NgoJCWMwLDE0Ljc2MDQsMTAuNjcxNjEsMjQuODY5NjMsMjIuNjYyMzYsMjQuODY5NjNjMTMuMzI5MDYsMCwyNS4wMDc3Ny0xMC4yODg5OSwyNS4wMDc3Ny0yNC4xNTIzMgoJCUMxNTIuMTg3OTEsNDIuNzQxOTEsMTQxLjQxODY5LDMyLjI3NTMzLDEyOC44OTMyMywzMi4yNzUzM3ogTTEyOC44MjM1LDY5LjI5MTczYy03LjAyNzU0LDAtMTIuNzIzNzQtNS42OTY0Mi0xMi43MjM3NC0xMi43MjM1MwoJCWMwLTcuMDI2ODksNS42OTYyLTEyLjcyMzUzLDEyLjcyMzc0LTEyLjcyMzUzYzcuMDI2NjcsMCwxMi43MjMzMSw1LjY5NjY0LDEyLjcyMzMxLDEyLjcyMzUzCgkJQzE0MS41NDY4MSw2My41OTUzLDEzNS44NTAxNyw2OS4yOTE3MywxMjguODIzNSw2OS4yOTE3M3oiLz4KCTxwYXRoIGZpbGw9IiMyMTMzNDMiIGQ9Ik0yNTAuNjgzNDYsNTUuODQ3MjRjMC0xMy44NjMzMy0xMS42Nzg3My0yNC4xNTIzMi0yNS4wMDc3OC0yNC4xNTIzMgoJCWMtMTEuOTkwNzUsMC0yMi42NjIzNSwxMC4xMDkyMi0yMi42NjIzNSwyNC44Njk2M1Y5NmgxMS4yMTgwOVY3NC43MjE0OWMzLjczOTA2LDMuNjcwMDEsNy42MTA2Myw1LjI4MDAzLDEzLjE1NzM1LDUuMjgwMDMKCQlDMjM5LjkxNDIyLDgwLjAwMTUyLDI1MC42ODM0Niw2OS41MzQ5NCwyNTAuNjgzNDYsNTUuODQ3MjR6IE0yNDAuMDQyMzQsNTUuNzA4NjVjMCw3LjAyNjg5LTUuNjk2NjQsMTIuNzIzNTMtMTIuNzIzMzEsMTIuNzIzNTMKCQljLTcuMDI3NTQsMC0xMi43MjM3NC01LjY5NjY0LTEyLjcyMzc0LTEyLjcyMzUzYzAtNy4wMjcxLDUuNjk2Mi0xMi43MjM1MywxMi43MjM3NC0xMi43MjM1MwoJCUMyMzQuMzQ1Nyw0Mi45ODUxMywyNDAuMDQyMzQsNDguNjgxNTUsMjQwLjA0MjM0LDU1LjcwODY1eiIvPgoJPHBhdGggZmlsbD0iI0ZGNUMzNSIgZD0iTTI4Ni45MzI0NiwzMS4xNTE1NFYxOS44ODMxMmMyLjk0MTE2LTEuMzg5NTEsNS4wMDIwMS00LjM2NTA4LDUuMDAyMDEtNy44MTg1di0wLjI2MDM4CgkJYzAtNC43NjU1Ny0zLjg5OTQ0LTguNjY0OC04LjY2NDgzLTguNjY0OGgtMC4yNjAxNmMtNC43NjU3OCwwLTguNjY1MjIsMy44OTkyMy04LjY2NTIyLDguNjY0OHYwLjI2MDM4CgkJYzAsMy40NTM0MSwyLjA2MTI4LDYuNDI5NDIsNS4wMDI0MSw3LjgxODcydjExLjI2ODQyYy00LjM3OTI0LDAuNjc2NTYtOC4zODA2NSwyLjQ4MjY5LTExLjY4MjE5LDUuMTQwNzlsLTMwLjkzODg3LTI0LjA2NzU2CgkJYzAuMjAzNTEtMC43ODM3NywwLjM0NjQ1LTEuNTkxMjksMC4zNDczMi0yLjQzODY4YzAuMDA2OTctNS4zOTc5MS00LjM2MzEzLTkuNzc5MzMtOS43NjEyNS05Ljc4NjMxCgkJYy01LjM5ODEzLTAuMDA2NzUtOS43Nzk1Niw0LjM2MzU2LTkuNzg2NTMsOS43NjE0N2MtMC4wMDY1Myw1LjM5NzkxLDQuMzYzNTYsOS43NzkzMyw5Ljc2MTY5LDkuNzg2MDkKCQljMS43NTkyOCwwLjAwMjE4LDMuMzg3MzktMC40OTc0NSw0LjgxNDYxLTEuMzA5MTFsMzAuNDM0NjUsMjMuNjc1NzljLTIuNTg4NTksMy45MDY4NS00LjEwNDI1LDguNTg2OC00LjEwNDI1LDEzLjYyNDUyCgkJYzAsNS4yNzQ1OCwxLjY2NjAyLDEwLjE1MjgxLDQuNDgyMDksMTQuMTY1NzdsLTkuMjU1NzQsOS4yNTU3NGMtMC43MzE2OS0wLjIxOTQyLTEuNDkxMjctMC4zNzMwNC0yLjI5NDg2LTAuMzczMDQKCQljLTQuNDM1NDcsMC04LjAzMTYsMy41OTU5Mi04LjAzMTYsOC4wMzE2czMuNTk2MTMsOC4wMzE2LDguMDMxNiw4LjAzMTZjNC40MzU5LDAsOC4wMzE1OS0zLjU5NTkyLDguMDMxNTktOC4wMzE2CgkJYzAtMC44MDMxNi0wLjE1MzM4LTEuNTYyOTYtMC4zNzMwMi0yLjI5NDY1bDkuMTU1NDktOS4xNTUyOGM0LjE1NTcsMy4xNzI1NSw5LjMzMDY5LDUuMDc4MDMsMTQuOTYyODMsNS4wNzgwMwoJCWMxMy42NDU0NSwwLDI0LjcwNzUyLTExLjA2MjI5LDI0LjcwNzUyLTI0LjcwODE3QzMwNy44NDc3NSw0My4xODU4NywyOTguNzcyODYsMzIuOTgwMzMsMjg2LjkzMjQ2LDMxLjE1MTU0eiBNMjgzLjE0MDIzLDY4LjIwNjI4CgkJYy02Ljk5NjE1LDAtMTIuNjY4NC01LjY3MTM3LTEyLjY2ODQtMTIuNjY3NTNjMC02Ljk5NTk0LDUuNjcyMjQtMTIuNjY3NTMsMTIuNjY4NC0xMi42Njc1MwoJCWM2Ljk5NTMsMCwxMi42Njc1NCw1LjY3MTU4LDEyLjY2NzU0LDEyLjY2NzUzQzI5NS44MDc3Nyw2Mi41MzQ5MiwyOTAuMTM1NTMsNjguMjA2MjgsMjgzLjE0MDIzLDY4LjIwNjI4eiIvPgo8L2c+Cjwvc3ZnPgo="} />
                                            </div>
                                        </a>

                                        <div class="collapse navbar-collapse" id="navbarScroll">
                                            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ scrollHeight: 100 + "px" }}>
                                                <li class="nav-item  dropdown">
                                                    <a class="nav-link dropdown-toggle " aria-current="page" href="#" data-bs-toggle="dropdown" aria-expanded="false">Software</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">Pricing</a>
                                                </li>
                                                <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Resources
                                                    </a>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                                        <li><a class="dropdown-divider"></a></li>
                                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </li>

                                            </ul>
                                            <form class="d-flex" role="search">

                                                <div className=""  >
                                                    <button className="btn btn-primary" type="button">Strat Free get a Demo</button>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </nav>


                            </div>


                        </nav>


                    </div>

                </div>

            </nav>

        </header>



    )

}
