import React, { Fragment, useState, useEffect } from 'react'
import { Card } from '../../components';

const Portofolio = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [additionalData, setAdditionalData] = useState({})

    /* 
     * title and description when detail button clicked
     */

    // spp
    const [sppTitle, setSppTitle] = useState('Aplikasi Pembayaran SPP');
    const [sppDescription, setSppDescription] = useState('Aplikasi Pembayaran SPP dibuat dengan tujuan untuk memudahkan pembayaran spp di suatu sekolah.');
    const [sppData, setSppData] = useState({
        'language': ['html', 'php', 'css'],
        'framework': ['codeigniter 3']
    });

    // task list
    const [taskListTitle, setTaskListTitle] = useState('Aplikasi Task List');
    const [taskListDescription, setTaskListDescription] = useState('Aplikasi Task List dibuat dengan tujuan untuk memudahkan pekerjaan antara programmer dan PMO.');
    const [taskListData, setTaskListData] = useState({
        'language': ['html', 'php', 'css'],
        'framework': ['codeigniter 3']
    });

    // certification iso
    const [certificationISOTitle, setCertificationISOTitle] = useState('Aplikasi Sertifikasi ISO');
    const [certificationISODescription, setCertificationISODescription] = useState('Aplikasi Sertifikasi dibuat dengan tujuan untuk membuat sertifikat ISO menggunakan template yang sudah tersedia.');
    const [certificationISOData, setCertificationISO] = useState({
        'language': ['html', 'php', 'css'],
        'framework': ['-']
    });

    // quranku
    const [qurankuTitle, setQurankuTitle] = useState('Aplikasi Qur\'anKu');
    const [qurankuDescription, setQurankuDescription] = useState('Aplikasi Qur\'anKu dibuat dengan tujuan untuk memudahkan orang yang ingin membaca Al-Qur\'an di mana saja dan kapan saja. Ketika user membuka salah satu surah, maka surah tersebut akan disimpan ke dalam local storage agar pengguna dapat membaca surah tersebut baik dalam keadaan online maupun offline.');
    const [qurankuData, setQurankuData] = useState({
        'language': ['html', 'css', 'javascript'],
        'framework': ['React JS']
    });

    return (
        <Fragment>
            <div id="portofolio">
                <div className="title text-center">
                    <h2>PORTOFOLIO</h2>
                </div>
                <div className="portofolio-description">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card-me">
                                <div className="card-body-me">
                                    <span>Aplikasi</span>
                                    <div>Pembayaran SPP</div>
                                </div>
                                <div className="card-footer-me">
                                    <button
                                        onClick={() => {
                                            setTitle(sppTitle);
                                            setDescription(sppDescription);
                                            setAdditionalData(sppData);
                                            // trigger the modal
                                            document.getElementById('trigger-modal').click()
                                        }}
                                    >
                                        DETAIL
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card-me">
                                <div className="card-body-me">
                                    <span>Aplikasi</span>
                                    <div>Task List</div>
                                </div>
                                <div className="card-footer-me">
                                    <button
                                        onClick={() => {
                                            setTitle(taskListTitle);
                                            setDescription(taskListDescription);
                                            setAdditionalData(taskListData);
                                            console.log(taskListTitle)
                                            // trigger the modal
                                            document.getElementById('trigger-modal').click()
                                        }}
                                    >
                                        DETAIL
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card-me">
                                <div className="card-body-me">
                                    <span>Aplikasi</span>
                                    <div>Sertifikat ISO</div>
                                </div>
                                <div className="card-footer-me">
                                    <button
                                        onClick={() => {
                                            setTitle(certificationISOTitle);
                                            setDescription(certificationISODescription);
                                            setAdditionalData(certificationISOData);
                                            // trigger the modal
                                            document.getElementById('trigger-modal').click()
                                        }}
                                    >
                                        DETAIL
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card-me">
                                <div className="card-body-me">
                                    <span>Aplikasi</span>
                                    <div>Qur'anku</div>
                                </div>
                                <div className="card-footer-me">
                                    <button
                                        onClick={() => {
                                            setTitle(qurankuTitle);
                                            setDescription(qurankuDescription);
                                            setAdditionalData(qurankuData);
                                            // trigger the modal
                                            document.getElementById('trigger-modal').click()
                                        }}
                                    >
                                        DETAIL
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card-me">
                                <div className="card-body-me">
                                    <span>Aplikasi</span>
                                    <div>Task List</div>
                                </div>
                                <div className="card-footer-me">
                                    <button
                                        onClick={() => {
                                            setTitle(taskListTitle);
                                            setDescription(taskListDescription);
                                            // trigger the modal
                                            document.getElementById('trigger-modal').click()
                                        }}
                                    >
                                        DETAIL
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* click this when detail is clicked */}
            <label id="trigger-modal" htmlFor="modal-control" style={{ display: 'none' }}></label>

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

export default Portofolio
