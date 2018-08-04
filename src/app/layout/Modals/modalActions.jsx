export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";

export const modalOpen = (modalType, modalProps) => {
  return {
    type: MODAL_OPEN,
    payload: {
      modalType,
      modalProps
    }
  }
}

export const modalClose = () => {
  return {
    type: MODAL_CLOSE
  }
}