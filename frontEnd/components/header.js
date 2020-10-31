import React from 'react'
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link'
import {useRouter} from 'next/router';

function Header() {

    function showMenuMobile() {
        const menu_button_mobile = document.querySelector('.menu_button_mobile')
        const menu = document.querySelector('.menu-links')
        if (menu_button_mobile.classList.contains('menu_button_active')) {
            menu_button_mobile.classList.remove('menu_button_active');
            menu.classList.remove('show_menu');
            document.querySelector('body').style = 'overflow-y: auto';
        } else {
            menu_button_mobile.classList.add('menu_button_active');
            menu.classList.add('show_menu');
            document.querySelector('body').style = 'overflow-y: hidden';
        }
    }

    const router = useRouter()
    function isActive(route){
        if(route == router.pathname){
            return "nav-link-active"
        }else{
            return ''
        }
    }

    return (
        <Navbar className='navbar fixed-top' expand='lg'>
            <Container>
                <Navbar.Brand>
                    <img src={require('../images/logo/logoPrimary.png')} alt='Ecoraiz' title='Ecoraiz' />
                </Navbar.Brand>
                <label className='menu_button_mobile' type='button' onClick={showMenuMobile} >
                    <span className='menu_button_mobile_icon_custom'></span>
                    <span className='menu_button_mobile_icon_custom'></span>
                    <span className='menu_button_mobile_icon_custom'></span>
                </label>
                <Nav className='ml-auto align-items-center menu-links'>
                    <div className='nav-link'>
                        <Link href='/'>
                            <a className={`link ${isActive('/')}`} >Inicio</a>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link href='/about'>
                            <a className={`link ${isActive('/about')}`}>Sobre</a>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link href='/'>
                            <a className={`link ${isActive('')}`}>Receitas</a>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link href='/'>
                            <a className={`link ${isActive('')}`}>Blog</a>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link href='/'>
                            <a className={`link ${isActive('')}`}>Contatos</a>
                        </Link>
                    </div>
                    <Button className='bt-standard bg-color-second bt-standard-second m-0'>Produto</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header