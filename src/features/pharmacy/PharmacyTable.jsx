import styled from "styled-components"
import { useReadAllRows } from "./useReadAllRows"
import Spinner from "../../ui/Spinner"
import PharmacyRow from "./PharmacyRow"

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.5fr 1.5fr 1.5fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`
const Div = styled.div`
  margin: 0 auto;
`

function PharmacyTable() {
  const { isLoading, pharmacyData } = useReadAllRows()

  if (isLoading) return <Spinner />

  return (
    <Table role="table">
      <TableHeader role="row">
        <Div></Div>
        <Div>Code</Div>
        <Div>Medication</Div>
        <Div>Prescription</Div>
        <Div>Group</Div>
        <Div>Price</Div>
        <Div>Discount</Div>
        <Div></Div>
      </TableHeader>
      {pharmacyData.map((pharmacy) => (
        <PharmacyRow key={pharmacy.id} pharmacy={pharmacy} />
      ))}
    </Table>
  )
}

export default PharmacyTable
