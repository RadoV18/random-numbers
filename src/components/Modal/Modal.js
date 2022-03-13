import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../redux/actions/modal";
import "./Modal.scss";

const Modal = () => {
    const dispatch = useDispatch();
    const errors = useSelector((state) => state.error);
    const displayModal = useSelector((state) => state.modal);

    const toggle = () => {
        dispatch(hideModal());
    };

    return (
        <div className="modal" style={{ display: displayModal ? "block" : "none" }}>
            <div className="modal-content">
                <h1>Error</h1>
                <ul>
                    {errors.map((error, index) => <li key={`error-${index}`}>{error}</li>)}
                </ul>
                <button className="modal__button" onClick={toggle}>Aceptar</button>
            </div>
        </div>
    );
};

export default Modal;
