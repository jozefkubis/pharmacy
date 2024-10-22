import PharmacyTable from "../features/pharmacy/PharmacyTable"
import Row from "../ui/Row"
import Heading from "../ui/Heading"
import { useState } from "react"
import Button from "../ui/Button"
import CreatePharmacyForm from "../features/pharmacy/CreatePharmacyForm"

export default function Pharmacy() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Pharmacy list</Heading>
      </Row>

      <Row>
        <PharmacyTable />

        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "Add new medication"}
        </Button>
        {showForm && <CreatePharmacyForm />}
      </Row>
    </>
  )
}
