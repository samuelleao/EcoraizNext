import React from 'react';
import { Card, Col, Container, Row, InputGroup, FormControl, Button } from 'react-bootstrap';
// import ReactFancyBox from 'react-fancybox';
import { FaUser, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

import Header from '../components/header';
import Footer from '../components/footer';
import ButtonWhatsapp from '../components/buttonWhatsapp';

import HeadSeo from '../components/head';

function Product() {
    return (
        <div>
            <HeadSeo title={'Ecoraiz | Produto'} />
            <Header />
            <main id='productPage'>
                <section className='section1 position-relative'>
                    <Container>
                        <Row>
                            <Col xs={12} lg={6} md={12} className='d-flex justify-content-center  flex-column'  >
                                <span className='title-little color-primary'>Ecoraiz</span>
                                <h1 className='title-big  color-black'>O que é?</h1>
                                <p className='paragraph p-big color-grey'>
                                    Macaxeira Descascada, Embalada à Vácuo e Congelada
                                </p>
                            </Col>
                            <Col xs={12} lg={6} md={12} className='d-flex justify-content-center align-items-center' >
                                <img src={require('../images/product/product-illustrator.png')} alt='' title='' />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className='section2 bg-light'>
                    <Row>
                        <Col xs={12} lg={12} md={12} className='d-flex justify-content-center' >
                            <div className='cards-differentials'>
                                <Card>
                                    <Card.Img variant="top" src={require('../images/product/differentials/1.png')} />
                                    <Card.Body>
                                        <Card.Title>
                                            <h3 className='title title-little'>
                                                Qualidade
                                            </h3>
                                        </Card.Title>
                                        <Card.Text>
                                            <p className='paragraph p-medium'>
                                                Produtos cuidadosamente selecionados e beneficiados
                                                de acordo com um Controle de Qualidade, visando atender as
                                                expectativas do mercado consumidor.
                                        </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Img variant="top" src={require('../images/product/differentials/2.png')} />
                                    <Card.Body>
                                        <Card.Title>
                                            <h3 className='title title-little'>
                                                Padronização
                                            </h3>
                                        </Card.Title>
                                        <Card.Text>
                                            <p className='paragraph p-medium'>
                                                Trabalho contínuo com o objetivo de seleção das
                                                sementes, tratos culturais e irrigação, buscando uma padronização
                                                do Campo à Agroindústria..
                                        </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Img variant="top" src={require('../images/product/differentials/3.png')} />
                                    <Card.Body>
                                        <Card.Title>
                                            <h3 className='title title-little'>
                                                Praticidade
                                            </h3>
                                        </Card.Title>
                                        <Card.Text>
                                            <p className='paragraph p-medium'>
                                                Produtos beneficiados e prontos para o preparo no seu
                                                lar.
                                        </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section>
                    <Container>
                        <h1 className='title title-big text-left col-lg-6 col-12'>Veja mais dos nossos produtos e <span className='color-primary'>ambiente de produção</span></h1>
                        <div className='gallery-grid mt-5'>
                            {/* <ReactFancyBox className='gallery-img' thumbnail={require('../images/product/gallery/1.png')} image={require('../images/product/gallery/1.png')} />
                            <ReactFancyBox className='gallery-img' thumbnail={require('../images/product/gallery/2.png')} image={require('../images/product/gallery/2.png')} />
                            <ReactFancyBox className='gallery-img' thumbnail={require('../images/product/gallery/3.png')} image={require('../images/product/gallery/3.png')} />
                            <ReactFancyBox className='gallery-img' thumbnail={require('../images/product/gallery/4.png')} image={require('../images/product/gallery/4.png')} />
                            <ReactFancyBox className='gallery-img' thumbnail={require('../images/product/gallery/5.png')} image={require('../images/product/gallery/5.png')} />

                            <ReactFancyBox className='gallery-img' thumbnail={require('../images/product/gallery/6.png')} image={require('../images/product/gallery/6.png')} />
                            <ReactFancyBox className='gallery-img' thumbnail={require('../images/product/gallery/4.png')} image={require('../images/product/gallery/7.png')} />
                            <ReactFancyBox className='gallery-img' thumbnail={require('../images/product/gallery/8.png')} image={require('../images/product/gallery/8.png')} />
                            <ReactFancyBox className='gallery-img' thumbnail={require('../images/product/gallery/9.png')} image={require('../images/product/gallery/9.png')} />
                            <ReactFancyBox className='gallery-img' thumbnail={require('../images/product/gallery/10.png')} image={require('../images/product/gallery/10.png')} /> */}
                        </div>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col xs={12} lg={6} md={12} className='mb-5'>
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

                            <Col xs={12} lg={6} md={12}>
                                <div className='video' >
                                    <iframe className='border-radius-elements' data-filter_video='video2'
                                        src='https://www.youtube.com/embed/U2dl07OnQy0'
                                        allow='accelerometer; autoplay; 
                                clipboard-write; encrypted-media; 
                                gyroscope; picture-in-picture' >
                                    </iframe>
                                    <div className='video-mask' id='video2' >
                                        <img src={require('../images/video/play-video.svg')} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className='bg-light illustration-branch-left section4'>
                    <Container>
                        <Row>
                            <Col xs={12} lg={6} md={12}>
                                <Card className='card-form'>
                                    <form>
                                        <div>
                                            <label className='paragraph ml-1'>Nome</label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1">
                                                        <FaUser size={18} className='color-grey' />
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                    placeholder="Ex: Júlio Emiliano"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </div>

                                        <div>
                                            <label className='paragraph ml-1'>Telefone</label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1">
                                                        <FaPhoneAlt size={18} className='color-grey' />
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                    placeholder="Ex: (84) 00000-0000"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </div>

                                        <div>
                                            <label className='paragraph ml-1'>Email</label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="basic-addon1">
                                                        <FaEnvelope size={18} className='color-grey' />
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                    placeholder="Ex: ana@gmail.com"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </div>
                                        <Button className='bt-standard bg-color-green m-0 w-100 mt-3'>Solicitar Produto</Button>
                                    </form>
                                </Card>
                            </Col>
                            <Col xs={12} lg={6} md={12} className='d-flex align-items-center second-column pt-lg-0 pb-lg-0 pt-5 pb-5 order-lg-last order-first'>
                                <div>
                                    <h2 className='title title-medium color-black'>Deseja adiquirir nosso 
                                    <br/>
                                    <span className='color-primary'>produto?</span></h2>
                                    <p className='paragraph p-big'>
                                        Você só precisa de preencher o formulário e você estará solicitando o Ecoraiz,
                                        e basta aguardar o retorno em seu email ou whatsapp
                                </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer/>
            <ButtonWhatsapp/>
        </div>
    )
}

export default Product