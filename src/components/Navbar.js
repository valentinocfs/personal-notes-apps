import React from 'react';
import NavbarForm from './NavbarForm';

export default function Navbar({ filterNote }) {
    return (
        <header className="header">
            <section className="header-left">
                <p>
                    <a href="/" rel="noreferrer">
                        Notes Apps
                    </a>
                </p>
            </section>
            <section className="header--right">
                <NavbarForm filterNote={filterNote} />
            </section>
        </header>
    );
}
