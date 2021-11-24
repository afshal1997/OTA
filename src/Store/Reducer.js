const modalReducer = (state = { isModalOpen: false }, action) => {
  if (action.type === "CHANGE_MODAL") {
    return {
      isModalOpen: action.payload,
    };
  }

  return state;
};
export { modalReducer };
