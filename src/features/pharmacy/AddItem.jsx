import Button from "../../ui/Button"
import Modal from "../../ui/Modal"
import { useState } from "react"
import CreatePharmacyForm from "./CreatePharmacyForm"

function AddItem() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpenModal(!isOpenModal)}>
        {isOpenModal ? "Close" : "Add new medication"}
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreatePharmacyForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  )
}

export default AddItem
