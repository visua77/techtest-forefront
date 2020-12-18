import React from 'react'

const Modal = ({description, modaltoggle, handleModal})=> {
    return(
        <div className={modaltoggle ? 'modal-active' : 'modal'}onClick={handleModal}>
            <div className="modal-wrapper"style={{backgroundImage: `url(https://image.tmdb.org/t/p/w780${description.img})`}}>    
            <span>
            <h3>{description.title}</h3>
            <p className="modal-descr">{description.description}</p>
            </span>
            <span className="close-wrapper"><span className="close-modal">X</span></span>
            </div>
        </div>
    )
}

export default Modal