import React from "react";
import "./NavbarDropdown.scss";
import { Link } from "react-router-dom";

const NavbarDropdown = ({ title, list }) => {
    return (
        <div className="dropdown">
            <button className="dropdown__button">{title}</button>
            <ul className="dropdown__content">
                {list.map((element, index) => (
                    <li className="dropdown__element" key={"element-" + index}>
                        <Link className="dropdown__link" to={element.link}>
                            {element.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavbarDropdown;
