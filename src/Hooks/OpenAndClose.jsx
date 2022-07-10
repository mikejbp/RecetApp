import React, {useState} from 'react'

function OpenAndClose() {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);


  return (
    <div>OpenAndClose</div>
  )
}

export default OpenAndClose