import React, { Fragment, useEffect, useState } from 'react'

const Card = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [additionalData, setAdditionalData] = useState({})

    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <Fragment>
            <div className="card-me">
                <div className="card-body-me">
                    <span>Aplikasi</span>
                    <div>{props.cardTitle}</div>
                </div>
                <div className="card-footer-me">
                    <button
                        onClick={() => {
                            setTitle(props.title);
                            setDescription(props.description);
                            setAdditionalData(props.data);
                            // trigger the modal
                            document.getElementById('trigger-modal').click()
                        }}
                    >
                        DETAIL
                    </button>
                </div>
            </div>

            {/* click this when detail is clicked */}
            {/* <label id="trigger-modal" htmlFor="modal-control" style={{ display: 'none' }}></label> */}

            {/* modal */}

            <input type="checkbox" id="modal-control" class="modal" />
            <div role="dialog" aria-labelledby="dialog-title">
                <div class="card">
                    <label for="modal-control" class="modal-close" ></label>
                    <h3 class="section">{title}</h3>
                    <p class="section">{description}</p>
                    <div className="language">
                        <div className="container">
                            Bahasa Pemrograman : &nbsp;
                            {
                                additionalData.language ?
                                    additionalData.language.map((value, index) => {
                                        let comma = additionalData.language.length == index+ 1 ? '' : ', ';
                                        return <span key={index}>{value + comma}</span>
                                    })
                                : ''
                            }
                        </div>
                        <div className="container">
                            Framework : &nbsp;
                            {
                                additionalData.framework ?
                                    additionalData.framework.map((value, index) => {
                                        let comma = additionalData.framework.length == index+ 1 ? '' : ', ';
                                        return <span key={index}>{value + comma}</span>
                                    })
                                : ''
                            }
                        </div>
                    </div>
                    <div className="card-footer">
                        <button
                            onClick={() => {
                                document.getElementsByClassName('modal-close')[0].click()
                            }}
                        >
                            <span class="iconify" data-icon="akar-icons:arrow-left" data-inline="false"></span> CLOSE
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Card
