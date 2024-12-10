import {useState} from "react";


export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [payload, setPayload] = useState(null);

  const setModal = (show, payload) => {
    setIsOpen(show)
    setPayload(payload)
  };

  return {isOpen, setModal, payload};
}
