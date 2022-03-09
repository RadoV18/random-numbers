import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Table from "../Table/Table";
import Form from "../Form/Form";
import "./Content.scss";
import { setEmptyTable } from "../../redux/actions/table";

const Content = ({ title, algorithm }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setEmptyTable());
    }, [algorithm]);

    return (
        <div className="container">
            <div className="algorithm">
                <h1 className="algorithm__title">{title}</h1>
                <div className="algorithm__content">
                    <Table algorithm={algorithm} />
                    <Form algorithm={algorithm}/>
                </div>
            </div>
        </div>
    );
};

export default Content;
