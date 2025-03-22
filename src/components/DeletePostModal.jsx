import { useRef } from "react";
import "../App.css";

const DeletePostModal = ({ handleDelete }) => {
  const dialogRef = useRef(null);
  function open() {
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function handleDeletePost() {
    handleDelete();
    close();
  }

  return (
    <div>
      <button className="option-btn" onClick={open}>
        Delete
      </button>
      <dialog className="modal" ref={dialogRef}>
        <div className="modal-delete">
          <h5>Are you sure you want to delete this post?</h5>
          <p>This action cannot be undone</p>
          <div className="modal-delete-buttons">
            <button onClick={close} className="outline-button">
              Cancel
            </button>
            <button onClick={handleDeletePost} className="delete-button">
              Delete
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeletePostModal;
