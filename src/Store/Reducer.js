const modalReducer = (state = { isModalOpen: false, isScheduleCall: false }, action) => {
  if (action.type === "GET_STARTED") {
    return {
      isModalOpen: action.payload,
      isScheduleCall:false
    };
  }
  if (action.type === 'SCHEDULE_CALL') {
    return {
      isModalOpen: action.payload.isModalOpen,
      isScheduleCall: action.payload.isScheduleCall,
    };
  }

  return state;
};
export { modalReducer };
