import React from 'react';
import Modal from "react-modal";

const AddFile = ({val, modalIsOpen, closeModal, customStyles}) => {

    if(val === 1) {
        return (
            <Modal
          className="modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-body">
            <h2>
              Add Book
            </h2>
            <form className="file-form">
                <input type='file' required />
                <button type='submit'>Attach</button>
            </form>
            <form className='file-details'>
                <label>
                    Title:
                    <input type='text'
                    placeholder='Book Title'
                    required />
                </label>
            </form>
            </div>
          <button type="button" onClick={closeModal}>close</button>
        </Modal>
        )
    } else if(val === 2) {
        return (
            <Modal
          className="modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-body">
            <h2>
              Add Video
            </h2>
            </div>
          <button type="button" onClick={closeModal}>close</button>
        </Modal>
        )
    } else if(val === 3) {
        return (
            <Modal
          className="modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-body">
            <h2>
              Add Pastpaper
            </h2>
            </div>
          <button type="button" onClick={closeModal}>close</button>
        </Modal>
        )
    } else if(val === 4) {
        return (
            <Modal
          className="modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-body">
            <h2>
              Add Quiz
            </h2>
            </div>
          <button type="button" onClick={closeModal}>close</button>
        </Modal>
        )
    } else if(val === 5) {
        return (
            <Modal
          className="modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-body">
            <h2>
              Add Practical
            </h2>
            </div>
          <button type="button" onClick={closeModal}>close</button>
        </Modal>
        )
    } else {
        return (
            <Modal
          className="modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-body">
            <h2>
              Add Assignment
            </h2>
            <div className='coming-soon'>Coming Soon</div>
            </div>
          <button type="button" onClick={closeModal}>close</button>
        </Modal>
        )
    }

}

export default AddFile;