/* eslint-disable @next/next/no-img-element */

/*
.sticky.top-0.z-30.flex.flex-row.items-center.justify-center.bg-white
    .flex.w-full.max-w-6xl.flex-row.items-center.justify-between.p-8
        img.h-12(src='https://cdn.thefemdevs.com/assets/images/icon' alt='FemDevs Logo' async='')
        .flex.hidden.flex-row.items-center.space-x-6(class='md:flex')
            +navlink('https://thefemdevs.com', 'Home')
            +navlink('https://thefemdevs.com/about', 'About')
            +navlink('https://thefemdevs.com/products', 'Products')
            +navlink('mailto:support@thefemdevs.com', 'Contact')(rel="noreferrer" target="_blank")
*/

import React from 'react';

import NavLink from './NavLink';

export default function Nav() {
    return (
        <nav className="sticky top-0 z-30 flex flex-row items-center justify-center bg-white">
            <div className="flex w-full max-w-6xl flex-row items-center justify-between p-8">
                <img className="h-12" src="https://cdn.thefemdevs.com/assets/images/icon" alt="FemDevs Logo" async />
                <div className="hidden flex-row items-center space-x-6 md:flex">
                    <NavLink href="https://thefemdevs.com" text="Home" />
                    <NavLink href="https://thefemdevs.com/about" text="About" />
                    <NavLink href="https://thefemdevs.com/products" text="Products" />
                    <NavLink href="mailto:support@thefemdevs.com" text="Contact" extraAttributes={{ rel: "noreferrer", target: "_blank" }} />
                </div>
            </div>
        </nav>
    );
}
