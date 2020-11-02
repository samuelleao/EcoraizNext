import React, { useEffect} from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Card, Container } from 'react-bootstrap'
import HeadSeo from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import ButtonWhatsapp from '../components/buttonWhatsapp'

function Filter() {
    var button_show_elements = document.querySelectorAll('.blog-categories .bt-standard')
    var categories_elements = document.querySelectorAll('.blog-card')

    button_show_elements.forEach(element => {
        let button_data = element.getAttribute('data-show-category')
        element.addEventListener('click', () => {
            categories_elements.forEach(el => {
                el.classList.remove('effectShow')
                if (button_data == 'todos') {
                    el.classList.add('effectShow')
                }
            })


            let div_show = document.querySelectorAll(`.${button_data}`)


            div_show.forEach(element_show => {
                element_show.classList.add('effectShow')
            })
        })
    })
}



function ActiveButton() {
    var buttons = document.querySelectorAll(`.blog-categories .bt-standard`);
    buttons.forEach(element => {
        element.addEventListener('click', () => {
            for (var i = 0; i <= buttons.length - 1; i++) {
                buttons[i].classList.remove('activeButton')
            }
            element.classList.add('activeButton')
        })
    })
}


const Blog = ()=> {

    useEffect(() =>{
        ActiveButton()
        Filter()
    }, [])

    return (
        <div>
            <HeadSeo title={'Ecoraiz | Blog'} />
            <Header />
            <main id='blog'>
                <section>
                    <Container>
                        <div className='blog-categories'>
                            <button data-show-category='todos' className="bt-standard bg-color-second activeButton">
                                Todos
                            </button>
                            <button data-show-category='curiosidades' className="bt-standard bg-color-second">
                                Curiosidades
                            </button>
                            <button data-show-category='novidades' className="bt-standard bg-color-second">
                                Novidades
                            </button>
                            <button data-show-category='receitas' className="bt-standard bg-color-second">
                                Receitas
                            </button>
                        </div>
                        <div className='posts-area'>
                            <Card className='effectShow blog-card receitas'>
                                <div className='card-img-top'>
                                    <img src={require('../images/blog/blog1.png')} />
                                    <div className='category text-white'>Receitas</div>
                                </div>

                                <Card.Body>
                                    <Card.Title className='color-black title title-little'>Comida orgânica: 9 receitas com ingredientes sustentáveis</Card.Title>
                                    <Card.Text className='paragraph p-medium color-grey'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <div className='blog-card-footer'>
                                        <div className='blog-card-clock'>
                                            <FaClock className='color-grey' size={15} />
                                            <span className='color-grey paragraph p-medium'>12:44</span>
                                        </div>
                                        <div className='blog-card-calendar'>
                                            <FaCalendarAlt className='color-grey' size={15} />
                                            <span className='color-grey paragraph p-medium'>09/12/2020</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card className='effectShow blog-card receitas'>
                                <div className='card-img-top'>
                                    <img src={require('../images/blog/blog2.png')} />
                                    <div className='category text-white'>Receitas</div>
                                </div>

                                <Card.Body>
                                    <Card.Title className='color-black title title-little'>Mandioca: conheça 9 benefícios desse alimento</Card.Title>
                                    <Card.Text className='paragraph p-medium color-grey'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <div className='blog-card-footer'>
                                        <div className='blog-card-clock'>
                                            <FaClock className='color-grey' size={15} />
                                            <span className='color-grey paragraph p-medium'>12:44</span>
                                        </div>
                                        <div className='blog-card-calendar'>
                                            <FaCalendarAlt className='color-grey' size={15} />
                                            <span className='color-grey paragraph p-medium'>09/12/2020</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card className='effectShow blog-card curiosidades'>
                                <div className='card-img-top'>
                                    <img src={require('../images/blog/blog3.png')} />
                                    <div className='category text-white'>Curiosidades</div>
                                </div>

                                <Card.Body>
                                    <Card.Title className='color-black title title-little'>Por que consumir alimentos orgânicos?</Card.Title>
                                    <Card.Text className='paragraph p-medium color-grey'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <div className='blog-card-footer'>
                                        <div className='blog-card-clock'>
                                            <FaClock className='color-grey' size={15} />
                                            <span className='color-grey paragraph p-medium'>12:44</span>
                                        </div>
                                        <div className='blog-card-calendar'>
                                            <FaCalendarAlt className='color-grey' size={15} />
                                            <span className='color-grey paragraph p-medium'>09/12/2020</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card className='effectShow blog-card receitas'>
                                <div className='card-img-top'>
                                    <img src={require('../images/blog/blog4.png')} />
                                    <div className='category text-white'>Receitas</div>
                                </div>

                                <Card.Body>
                                    <Card.Title className='color-black title title-little'>9 receitas vegetarianas e veganas perfeitas...</Card.Title>
                                    <Card.Text className='paragraph p-medium color-grey'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <div className='blog-card-footer'>
                                        <div className='blog-card-clock'>
                                            <FaClock className='color-grey' size={15} />
                                            <span className='color-grey paragraph p-medium'>12:44</span>
                                        </div>
                                        <div className='blog-card-calendar'>
                                            <FaCalendarAlt className='color-grey' size={15} />
                                            <span className='color-grey paragraph p-medium'>09/12/2020</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card className='effectShow blog-card novidades'>
                                <div className='card-img-top'>
                                    <img src={require('../images/blog/blog5.png')} />
                                    <div className='category text-white'>Novidades</div>
                                </div>

                                <Card.Body>
                                    <Card.Title className='color-black title title-little'>Conheça a fazenda tamatanduba</Card.Title>
                                    <Card.Text className='paragraph p-medium color-grey'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <div className='blog-card-footer'>
                                        <div className='blog-card-clock'>
                                            <FaClock className='color-grey' size={15} />
                                            <span className='color-grey paragraph p-medium'>12:44</span>
                                        </div>
                                        <div className='blog-card-calendar'>
                                            <FaCalendarAlt className='color-grey' size={15} />
                                            <span className='color-grey paragraph p-medium'>09/12/2020</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card className='effectShow blog-card'>
                                <div className='card-img-top'>
                                    <img src={require('../images/blog/blog6.png')} />
                                    <div className='category text-white'>Receitas</div>
                                </div>

                                <Card.Body>
                                    <Card.Title className='color-black title title-little'>Comida orgânica: 9 receitas com ingredientes sustentáveis</Card.Title>
                                    <Card.Text className='paragraph p-medium color-grey'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <div className='blog-card-footer'>
                                        <div className='blog-card-clock'>
                                            <FaClock className='color-grey' size={15} />
                                            <span className='color-grey paragraph p-medium'>12:44</span>
                                        </div>
                                        <div className='blog-card-calendar'>
                                            <FaCalendarAlt className='color-grey' size={15} />
                                            <span className='color-grey paragraph p-medium'>09/12/2020</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
            <ButtonWhatsapp />
        </div>
    )
}

export default Blog