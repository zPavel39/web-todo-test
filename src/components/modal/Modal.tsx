import React from "react";
import "./Modal.scss";
import FormTask from "../form-task/FormTask";
import { observer } from "mobx-react-lite";

interface propsModal {
  setActiveModal: (activeModal: boolean) => void
  activeModal: boolean
}

const Modal = observer(({...props}:propsModal) => {

  const callbacks = {
    setActiveModal: (e: React.MouseEvent) => {
      props.setActiveModal(!props.activeModal)
    }
  };
  return (
    <div
      className="Modal"
      onClick={callbacks.setActiveModal}
    >
      <div
        className="Modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <FormTask activeModal={props.activeModal} setActiveModal={props.setActiveModal}/>
      </div>
    </div>
  );
});

export default React.memo(Modal);
