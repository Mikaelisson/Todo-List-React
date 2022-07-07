import React from "react";
import Card from "./Card"

function Modal(props){

    function hideModal(e){
        let target = e.target;
        if(target.id === "modal") {
            props.onHideModal()
        }
      }

    return(
        <div onClick={hideModal} id="modal" className={props.show ? "modal d-flex justify-content-center align-items-center" : "d-none"}>
            <Card className="d-flex align-items-center justify-content-center">
                {props.children}
            </Card>
        </div>
    )

}

export default Modal