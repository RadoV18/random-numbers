import React from "react";
import "./NavbarDropdown.scss";

const NavbarDropdown = ({ title, list }) => {
    return (
        <div className="dropdown">
            <button className="dropdown__button">{title}</button>
            <ul className="dropdown__content">
                {list.map((element, index) => (
                    <li className="dropdown__element" key={"element-" + index}>
                        <a className="dropdown__link" href={element.link}>{element.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavbarDropdown;
