import React, { Fragment } from 'react'

const Contact = () => {
    return (
        <Fragment>
            <div id="contact">
                <div className="title text-center">
                    <h2>CONTACT ME</h2>
                </div>
                <div className="contact-description">
                    <div className="row">
                        {/* form contact me */}
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <form id="form-contact">
                                <fieldset>
                                    {/* <legend>Contact</legend> */}
                                    <div class="form-group">
                                        <div class="container">
                                            <label for="name">Name</label>
                                            <input type="text" name="name" id="name" autoComplete="off" required/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="container">
                                            <label for="email">Email</label>
                                            <input type="email" name="email" id="email" autoComplete="off" required/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="container">
                                            <label for="title">Title</label>
                                            <input type="text" name="title" id="title" autoComplete="off" required/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="container">
                                            <label for="message">Message</label>
                                            <textarea name="message" id="message" rows="6" autoComplete="off" required></textarea>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <button type="submit">SEND</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>

                        {/* my social media */}
                        <div className="col-lg-6 col-md-4">
                            <div id="social-media">
                                <div className="row">
                                    <div className="col-lg-2 col-md-3 col-sm-4">
                                        <a href="">
                                            <span class="iconify" data-icon="ant-design:google-outlined" data-inline="false"></span>
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4">
                                        <a href="">
                                            <span class="iconify" data-icon="bx:bxl-facebook" data-inline="false"></span>
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4">
                                        <a href="">
                                            <span class="iconify" data-icon="akar-icons:twitter-fill" data-inline="false"></span>
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4">
                                        <a href="">
                                            <span class="iconify" data-icon="bi:whatsapp" data-inline="false"></span>
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4">
                                        <a href="">
                                            <span class="iconify" data-icon="bx:bxl-linkedin" data-inline="false"></span>
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4">
                                        <a href="">
                                            <span class="iconify" data-icon="cib:telegram" data-inline="false"></span>
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4">
                                        <a href="">
                                            <span class="iconify" data-icon="ant-design:phone-filled" data-inline="false"></span>
                                        </a>
                                    </div>
                                    <div className="col-lg-2 col-md-3 col-sm-4">
                                        <a href="">
                                            <span class="iconify" data-icon="ic:baseline-email" data-inline="false"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div id="quote">
                                <div className="quote-say">
                                    <i>“ The great power has a great responsibility “</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact
