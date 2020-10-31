import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Illustration1 from '../images/illustrations/illustration1.svg'
import { FaFlag, FaStar, FaEye } from 'react-icons/fa'
import Founder from '../images/illustrations/luciano.png'
import HeadSeo from '../components/head'

import Header from '../components/header'
import Footer from '../components/footer'
import ButtonWhatsapp from '../components/buttonWhatsapp'

function About() {
    return (
        <div>
            <HeadSeo title={'Ecoraiz | Sobre'} />
            <Header />
            <main className='about'>
                <section className='section1 illustration-branch-left illustration-branch-left-white'>
                    <div className='illustration-branch-white'></div>
                    <Container>
                        <Col xs={12}>
                            <h5 className='title title-big text-white'>Sobre nós</h5>
                            <p className='paragraph p-big text-white'>
                                Mais que uma empresa! Uma amiga que se preocupa
                        <br />
                        com a qualidade de seu produto
                        </p>
                        </Col>
                    </Container>
                </section>

                <section className='section2'>
                    <Container>
                        <Row>
                            <Col xs={12} lg={6} md={12} className='first-column'>
                                <div>
                                    <h5 className='title title-big color-black '>
                                        <span className='paragraph p-big'>História</span>
                                        <br />
                                    Senta que lá vem  <span className='color-primary'>história!</span>
                                    </h5>
                                    <p className='paragraph color-grey'>
                                        No ano de 1979, o Fundador Paulo Cavalcanti de
                                        Albuquerque desbravou terras da região, hoje denominada Fazenda
                                        Tamatanduba, localizada em Pedro Velho – RN. Sendo um dos pioneiros
                                        Produtores do Setor Canavieiro. Em 2015 iniciou-se uma Diversificação
                                        nas Culturas, nascendo em 2020 a Ecoraiz Agroindústria.
                                </p>
                                </div>
                            </Col>
                            <Col xs={12} lg={6} md={12}>
                                <img className='d-block m-auto' src={Illustration1} />
                            </Col>

                        </Row>
                    </Container>
                </section>

                <section className='section3 illustration-line-right'>
                    <Container>
                        <Row>
                            <Col xs={12} lg={6} md={12} className='cards-goals'>
                                <div className='card-goals'>
                                    <FaFlag size={25} className='color-second mb-4' />
                                    <h5 className='title tile-little color-black'>Missão</h5>
                                    <p className='paragraph p-medium color-grey'>Produzir e Distribuir Produtos e Serviços de Qualidade, atendendo as expectativas dos nossos clientes e parceiros.</p>
                                </div>

                                <div className='card-goals'>
                                    <FaStar size={25} className='color-second mb-4' />
                                    <h5 className='title tile-little color-black'>Valores</h5>
                                    <p className='paragraph p-medium color-grey'>Ética, Transparência e Respeito com Clientes, Colaboradores, Parceiros e Meio Ambiente.</p>
                                </div>

                                <div className='card-goals'>
                                    <FaEye size={25} className='color-second mb-4' />
                                    <h5 className='title tile-little color-black'>Visão</h5>
                                    <p className='paragraph p-medium color-grey'>Ser reconhecida como uma Empresa de Referência no mercado com alto padrão de Qualidade.</p>
                                </div>

                            </Col>
                            <Col xs={12} lg={6} md={12} className='second-column'>
                                <div>
                                    <h5 className='title title-big color-black '>
                                        <span className='paragraph p-big'>Objetivos</span>
                                        <br />
                                    Se for pra fazer, fazemos <br />
                                        <span className='color-second'>bem feito!</span>
                                    </h5>
                                    <p className='paragraph color-grey '>
                                        On the other hand, we denounce with righteous <br />
                                indignation and dislike men who are so beguiled <br />
                                and demoralized
                                by the charms.
                                </p>
                                    <Button className='bt-standard bt-standard-second'>Produto</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>


                <section className='section4'>
                    <Container>
                        <Row>
                            <Col xs={12} lg={6} md={12} >
                                <div className='founder d-block m-auto'>
                                    <img src={Founder} />
                                </div>
                            </Col>
                            <Col xs={12} lg={6} md={12} className='second-column'>
                                <div>
                                    <h5 className='title title-big color-black '>
                                        <span className='paragraph p-big'> <span className='title'> Luciano </span> - Fundador da Ecoraiz</span> <br />
                                        “Força, Foco, Fé e <span className='color-primary'>Trabalho</span>”
                                </h5>
                                    <p className='paragraph color-grey '>
                                        " On the other hand, we denounce with righteous<br />
                                 indignation and dislike men who are so beguiled<br />
                                 and demoralized by the charms."
                                </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer />
            <ButtonWhatsapp />
        </div>
    );
}

export default About;