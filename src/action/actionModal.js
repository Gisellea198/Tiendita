import { types } from "../type/type";

const showModal = () => {
  return (dispatch) => {
    dispatch({
      type: types.showModal,
      payload: true,
    });
  };
};

const hideModal = () => {
  return (dispatch) => {
    dispatch({
      type: types.showModal,
      payload: false,
    });
  };
};
const Modal = { showModal, hideModal };
export default Modal;
