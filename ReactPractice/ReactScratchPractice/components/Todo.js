import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false); //Always returns an array with 2 elements

    function deleteHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }

    return (
        <div className={'card'}>
            <h2>{props.text}</h2>
            <div className={'actions'}>
                <button className={'btn'} onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : null}
            {/*onClick prop is defined in the <div> in the Backdrop.js file*/}
            {modalIsOpen ? <Backdrop onClick={closeModalHandler}/> : null}
        </div>
    )
}

export default Todo;