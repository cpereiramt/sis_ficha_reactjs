import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './modal.css'

const Modal = ({ isShowing, hide, password, setPassword}) => isShowing ? ReactDOM.createPortal(

   <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button>Acessar</button>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;