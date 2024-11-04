import PharmacyTable from "../features/pharmacy/PharmacyTable"
import Row from "../ui/Row"
import Heading from "../ui/Heading"
import AddItem from "../features/pharmacy/AddItem"

export default function Pharmacy() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Pharmacy list</Heading>
      </Row>

      <Row>
        <PharmacyTable />
        <AddItem />
      </Row>
    </>
  )
}
