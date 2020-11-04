import React from 'react'
import { Container, Row, Col, InputGroup, FormControl, Button, Card, Form } from 'react-bootstrap'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaEnvelopeOpen } from 'react-icons/fa'

import Header from '../components/header'
import Footer from '../components/footer'
import ButtonWhatsapp from '../components/buttonWhatsapp'
import HeadSeo from '../components/head'

function Contact() {
    return (
        <div>
            <HeadSeo title={'Ecoraiz | Contatos'} />
            <Header />
            <main id='contact'>
                <section>
                    <Container>
                        <Row>
                            <Col xs={12} lg={4} md={12}>
                                <div>
                                    <h3 className='title title-medium color-black'>
                                        Entre em <span className='color-primary'>contato</span> conosco
                                    </h3>
                                    <p className='paragraph'>
                                        Você pode nos enviar uma mensagem,
                                        <br />
                                        ou clicar nas opções de contatos
                                    </p>
                                </div>
                                <div id='info-contact-links' className='d-flex flex-column'>
                                    <a href="tel:+55">
                                        <Button className='bt-standard'>
                                            <FaPhoneAlt size='18' className='mr-3 color-green' />
                                            (84) 9999-2233
                                        </Button>
                                    </a>
                                    <a href="mailto:name@email.com">
                                        <Button className='bt-standard'>
                                            <FaEnvelope size='18' className='mr-3 color-green' />
                                            contato@ecoraiz.com.br
                                        </Button>
                                    </a>
                                    <a href='https://www.google.com/maps/search/fazenda+tamatanduba/@-3.8779246,-38.5371044,11z' target='_blank'>
                                        <Button className='bt-standard'>
                                            <FaMapMarkerAlt size='18' className='mr-3 color-green' />
                                            Nossa localização
                                        </Button>
                                    </a>
                                </div>
                            </Col>
                            <Col xs={12} lg={8} md={12}>
                                <Card className='card-form mt-lg-0 mt-5'>
                                    <form>
                                        <Row>
                                            <div className='col-lg-6'>
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

                                            <div className='col-lg-6'>
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

                                            <div className='col-lg-6'>
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
                                            <div className='col-lg-6'>
                                                <label className='paragraph ml-1'>Assunto</label>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="basic-addon1">
                                                            <FaEnvelopeOpen size={18} className='color-grey' />
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl
                                                        placeholder="Ex: Solicitar preço dos produtos"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </InputGroup>
                                            </div>

                                            <div className='col-lg-12'>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <label className='paragraph ml-1'>Mensagem</label>
                                                    <Form.Control as="textarea" rows={3} className='pt-3 pr-3' placeholder='Escreva sua mensagem aqui' />
                                                </Form.Group>
                                            </div>
                                        </Row>
                                        <Button className='bt-standard bg-color-green m-0 mt-3'>Enviar Mensagem</Button>
                                    </form>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer />
            <ButtonWhatsapp />
        </div>
    )
}

export default Contact