import Button from "../../ui/Button"
import Modal from "../../ui/Modal"
import { useState } from "react"
import CreatePharmacyForm from "./CreatePharmacyForm"

function AddItem() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <Modal>
      <Modal.Open opens="item-form">
        <Button onClick={() => setIsOpenModal(!isOpenModal)}>
          Add new medication
        </Button>
      </Modal.Open>
      <Modal.Window name="item-form">
        <CreatePharmacyForm />
      </Modal.Window>
    </Modal>
  )
}

export default AddItem
