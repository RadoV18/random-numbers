import React from "react";
import NavbarDropdown from "../NavbarDropdown/NavbarDropdown";

import "./Navbar.scss";

const Navbar = () => {
    const dropdownMenus = [
        {
            title: "Métodos No Congruenciales",
            list: [
                {
                    title: "Cuadrados Medios",
                    link: "cuadrados-medios",
                },
                {
                    title: "Productos Medios",
                    link: "productos-medios",
                },
            ],
        },
        {
            title: "Métodos Congruenciales",
            list: [
                {
                    title: "Algoritmo Lineal",
                    link: "lineal",
                },
                {
                    title: "Algoritmo Multiplicativo",
                    link: "multiplicativo",
                },
            ],
        },
    ];

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src="" alt="" />
                <h1>Generación de Números Aleatorios</h1>
            </div>
            <div className="navbar__options">
                <ul className="navbar__list">
                    {dropdownMenus.map((element, index) => (
                        <li
                            key={"dropdown-" + index}
                            className="navbar__dropdown"
                        >
                            <NavbarDropdown
                                title={element.title}
                                list={element.list}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
