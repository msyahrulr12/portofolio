import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    // state
    const [active, setActive] = useState(window.location.pathname);
    const [show, setShow] = useState(true);

    const updateShow = () => {
        setShow(!show);
    }

    return (
        <Fragment>
            <div
                id="sidebar"
                style={{ display: show == false ? 'none' : 'flex' }}
            >
                <ul className="sidebar-navigation text-center">
                    <li className="sidebar-nav">
                        <Link
                            to="/"
                            className={`nav-link ${active == '/' ? 'active' : ''}`}
                            onClick={() => setActive('/')}
                        >
                            <span class="iconify" data-icon="jam:home-f" data-inline="false"></span>
                        </Link>
                    </li>
                    <li className="sidebar-nav">
                        <Link
                            to="/about"
                            className={`nav-link ${active == '/about' ? 'active' : ''}`}
                            onClick={() => setActive('/about')}
                        >
                            <span class="iconify" data-icon="jam:user-square" data-inline="false"></span>
                        </Link>
                    </li>
                    <li className="sidebar-nav">
                        <Link
                            to="/education"
                            className={`nav-link ${active == '/education' ? 'active' : ''}`}
                            onClick={() => setActive('/education')}
                        >
                            <span class="iconify" data-icon="ic:round-school" data-inline="false"></span>
                        </Link>
                    </li>
                    <li className="sidebar-nav">
                        <Link
                            to="/skill"
                            className={`nav-link ${active == '/skill' ? 'active' : ''}`}
                            onClick={() => setActive('/skill')}
                        >
                            <span class="iconify" data-icon="bx:bx-code-alt" data-inline="false"></span>
                        </Link>
                    </li>
                    <li className="sidebar-nav">
                        <Link
                            to="/portofolio"
                            className={`nav-link ${active == '/portofolio' ? 'active' : ''}`}
                            onClick={() => setActive('/portofolio')}
                        >
                            <span class="iconify" data-icon="jam:document-f" data-inline="false"></span>
                        </Link>
                    </li>
                    <li className="sidebar-nav">
                        <Link
                            to="/contact"
                            className={`nav-link ${active == '/contact' ? 'active' : ''}`}
                            onClick={() => setActive('/contact')}
                        >
                            <span class="iconify" data-icon="ant-design:phone-filled" data-inline="false"></span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div
                className="sidebar-collapse"
                style={{ display: show == true ? 'none' : 'block' }}
                onClick={() => updateShow()}
            >
                <span class="iconify" data-icon="ic:round-table-rows" data-inline="false"></span>
            </div>
        </Fragment>
    )
}

export default Sidebar
