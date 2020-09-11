import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">서울보트</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">매물</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">수리</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">보관</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">수리</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/login">로그인</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/signup">회원가입</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
