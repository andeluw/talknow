import { useRef } from "react";
import Modal from "./Modal";

const EditPostModal = ({
  triggerText,
  triggerClassName,
  action,
  inputValue,
  editedPostId,
}) => {
  const editInput = useRef(null);
  const modalRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const content = editInput.current?.value.trim();
    if (!content) return;

    action(content, editedPostId);
    editInput.current.value = "";
    modalRef.current?.close();
  }

  return (
    <Modal
      title="Edit Post"
      triggerText={triggerText}
      triggerClassName={triggerClassName}
      ref={modalRef}>
      <form onSubmit={handleSubmit}>
        <div className="modal-post">
          <textarea
            ref={editInput}
            className="post-textarea"
            defaultValue={inputValue}
          />
          <button type="submit">Edit</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditPostModal;
