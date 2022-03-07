import React from "react";
import Table from "../Table/Table";
import "./Content.scss";

const Content = ({ title, algorithm }) => {
    return (
        <div className="container">
            <div className="algorithm">
                <h1 className="algorithm__title">{title}</h1>
                <div className="algorithm__content">
                    <Table algorithm={algorithm} />
                    <form></form>
                </div>
            </div>
        </div>
    );
};

export default Content;
