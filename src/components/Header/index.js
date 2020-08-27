import React, { useState } from 'react'

import logo from '../../assets/logo.svg'
import styles from './styles.module.css'
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'

export default function(){
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className={"col text-center " + styles.containerLogo}>
                        <img src={logo} className="img-fluid" alt="Porta do Ceu" />
                    </div>
                </div>
            </div>
            <Navbar className={styles.navbar} light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="m-auto" navbar>
                        <NavItem>
                            <NavLink to="/components/">INÍCIO</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/components/">ROUPAS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/components/">ACESSÓRIOS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/components/">CALÇADOS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/components/">CONTATO</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}