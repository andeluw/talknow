import { useRef } from "react";
import Modal from "./Modal";

const AddPostModal = ({ triggerText, triggerClassName, action }) => {
  const addInput = useRef(null);
  const modalRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const content = addInput.current?.value.trim();
    if (!content) return;

    action(content);
    addInput.current.value = "";
    modalRef.current?.close();
  }

  return (
    <Modal
      title="Create Post"
      triggerText={triggerText}
      triggerClassName={triggerClassName}
      ref={modalRef}>
      <form onSubmit={handleSubmit}>
        <div className="modal-post">
          <textarea
            ref={addInput}
            placeholder="What's on your mind?"
            className="post-textarea"
          />
          <button type="submit">Post</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddPostModal;
