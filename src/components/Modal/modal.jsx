import './modal.scss'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

Modal.setAppElement('#root')

function ModalComponent ({ isOpen }) {

  return (

    <Modal
      isOpen={isOpen}
      contentLabel="Success Modal"
      className="modal__content"
      overlayClassName="modal__overlay"
    >

      <div className="modal__inner">
        <h2>Success</h2>
        <p>Your form has been submitted successfully!</p>
        <Link to="/" className="modal-link" />
      </div>

    </Modal>

  )
  
}

export default ModalComponent