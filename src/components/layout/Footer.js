import React from 'react';
import { CardFooter } from "reactstrap";

const Footer = () => {
    return (
        <CardFooter className="text-muted" >
            copyright &copy; {new Date().getFullYear()} 서울보트
        </CardFooter>
    );
};

export default Footer;
