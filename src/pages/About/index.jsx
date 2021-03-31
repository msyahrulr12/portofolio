import React, { Fragment } from 'react'
import MyImage from '../../assets/image/myself/me.png'

const About = () => {
    return (
        <Fragment>
            <div id="about">
                <div className="title text-center">
                    <h2>ABOUT ME</h2>
                </div>
                <div id="description" className="row">
                    <div className="col-lg-5 col-md-4 col-sm-12">
                        <div className="image">
                            <figure>
                                <img src={MyImage} alt="Muhammad Syahrul Ramadhan"/>
                                <figcaption>Image caption</figcaption>
                            </figure>
                            {/* <img src={MyImage} width="100%" alt=""/> */}
                        </div>
                    </div>
                    <div className="profile col-lg-7 col-md-8 col-sm-12">
                        <div className="profile-text">
                            <span><b>Nama</b> : Muhammad Syahrul Ramadhan</span>
                        </div>
                        <div className="profile-text">
                            <span><b>Job</b> : Junior Web Developer</span>
                        </div>
                        <div className="profile-text">
                            <span><b>Birth Of Date</b> : 01 December 2001</span>
                        </div>
                        <div className="profile-text">
                            <div className="hobby"><b>Hobby</b> : <span class="iconify" data-icon="la:guitar" data-inline="false"></span> <span class="iconify" data-icon="bx:bx-book-reader" data-inline="false"></span> <span class="iconify" data-icon="fluent:music-note-2-24-filled" data-inline="false"></span></div>
                        </div>
                        <div className="profile-text">
                            <span><b>Address</b> : Jl. HE EDI SUKMA bata alam lido, Cigombong, Bogor, Jawa Barat 16110</span>
                        </div>
                        <div className="profile-text">
                            <div>
                                <b>Short Of Me</b> : 
                                <p>Hello World</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About
