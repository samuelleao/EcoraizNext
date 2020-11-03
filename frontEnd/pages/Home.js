import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap';
import LastPosts from '../components/lastPosts'
import HeadSeo from '../components/head'

import Header from '../components/header'
import Footer from '../components/footer'
import ButtonWhatsapp from '../components/buttonWhatsapp'

function Home() {
    return (
        <div>
            <HeadSeo title={'Ecoraiz'} />
            <Header />
            <main className='index'>
                <section className='section1 illustration-branch-left'>
                    <Container>
                        <Row>
                            <Col xs={12} lg={6} md={12} className='first-column overflow-hidden'>
                                <div>
                                    <h5 className='title title-big color-black'>
                                        Qualidade <span className='color-second'>Ecoraiz</span>
                                    </h5>
                                    <p className='paragraph color-grey'>
                                        Obtenha de uma experiência incrível ao experimentar
                                        produtos que são selecionados por uma empresa que
                                        se preocupa com sua qualidade.
                                </p>
                                    <Button className='bt-standard bt-standard-second'>Sobre nós</Button>
                                    <img src={require('../images/illustrations/products-illustration.svg')} />
                                </div>
                            </Col>
                            <Col xs={12} lg={6} md={12} className='mt-lg-0 mt-5'>
                                <div className='video' >
                                    <iframe className='border-radius-elements' data-filter_video='video1'
                                        src='https://www.youtube-nocookie.com/embed/hWkYtZxpQUo'
                                        allow='accelerometer; autoplay; 
                                clipboard-write; encrypted-media; 
                                gyroscope; picture-in-picture' >
                                    </iframe>
                                    <div className='video-mask' id='video1' >
                                        <img src={require('../images/video/play-video.svg')} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className='section2 bg-light illustration-branch-right illustration-line-left'>
                    <Container>
                        <Row>
                            <Col xs={12} lg={6} md={12} className='first-column mb-lg-0 mb-5'>
                                <div>
                                    <h5 className='title title-big color-black '>
                                        <span className='color-primary'>Receitas</span> Ecoraiz
                                </h5>
                                    <p className='paragraph color-grey'>
                                        Separamos receitas incriveis que você pode fazer com a Ecoraiz,
                                        pode nos enviar alguma nova
                                        receita também :D
                                </p>
                                    <Button className='bt-standard bt-standard-black'>Ver receitas</Button>
                                </div>
                            </Col>
                            <Col xs={12} lg={6} md={12} className='d-flex justify-content-center'>
                                <img src={require('../images/illustrations/receitas.png')} alt='receitas ecoraiz' title='receitas ecoraiz' />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <LastPosts />
            </main>
            <Footer />
            <ButtonWhatsapp />
        </div>
    )
}

// function RemoveVideoMask() {
//     setInterval(() => {
//         var elem = document.activeElement;
//         var video_filter = document.querySelector(`#${elem.getAttribute('data-filter_video')}`)
//         if (elem && elem.tagName == 'IFRAME') {
//             video_filter.classList.add('d-none')
//         }
//     }, 100);
// }

// RemoveVideoMask()


export default Home