import { forwardRef } from "react";

const Modal = forwardRef(
  ({ title, triggerText, triggerClassName, children }, ref) => {
    function open() {
      ref.current?.showModal();
    }

    function close() {
      ref.current?.close();
    }

    return (
      <div>
        <button className={triggerClassName} onClick={open}>
          {triggerText}
        </button>
        <dialog className="modal" ref={ref}>
          <div className="modal-header">
            <h5>{title}</h5>
            <button className="outline-button" onClick={close}>
              Cancel
            </button>
          </div>
          {children}
        </dialog>
      </div>
    );
  }
);

export default Modal;
