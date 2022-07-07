import React from 'react';
import { Link } from 'react-router-dom';
import Grid from './Grid';
import logo from '../assets/images/Logo-2.png';

const footerAboutLinks = [
    {
        display: 'Gioi thieu',
        path: '/about',
    },
    {
        display: 'Lien he',
        path: '/contact',
    },
    {
        display: 'Tuyen dung',
        path: '/about',
    },
    {
        display: 'Tin tuc',
        path: '/about',
    },
    {
        display: 'He thong',
        path: '/about',
    },
];
const footerCustomerLinks = [
    {
        display: 'Chinh sach doi tra',
        path: '/about',
    },
    {
        display: 'Chinh sach bao hanh',
        path: '/about',
    },
    {
        display: 'Chinh sach hoan tien',
        path: '/about',
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid col={4} mdCol={4} smCol={1} gap={10}>
                    <div>
                        <div className="footer__title">Tong dai ho tro</div>
                        <div className="footer__content">
                            <p>
                                Lien he dat hang <strong>1111111111</strong>
                            </p>
                            <p>
                                Thac mac don hang <strong>1111111111</strong>
                            </p>
                            <p>
                                Gop y , khieu nai <strong>1111111111</strong>
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="footer__title">Ve yolo</div>
                        <div className="footer__content">
                            {footerAboutLinks.map((item, index) => {
                                return (
                                    <p key={index}>
                                        <Link to={item.to}>{item.display}</Link>
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">Cham soc khach hang</div>
                        <div className="footer__content">
                            {footerCustomerLinks.map((item, index) => {
                                return (
                                    <p key={index}>
                                        <Link to={item.to}>{item.display}</Link>
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo"></img>
                            </Link>
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    );
};

export default Footer;
