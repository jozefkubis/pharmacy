import styled from "styled-components"
import { formatCurrency } from "../../utils/helpers"
import { useDeleteRow } from "./useDeleteRow"
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2"
import { useState } from "react"
import CreatePharmacyForm from "./CreatePharmacyForm"
import { useInsertItem } from "./useInsertItem"

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.6fr 1.5fr 1.5fr 1fr 1.5fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`

const StoreItem = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  margin: 0 auto;
`

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
  margin: 0 auto;
`

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
  margin: 0 auto;
`

const Div = styled.div`
  margin: 0 auto;
`

const Span = styled.span`
  margin: 0 auto;
`

function PharmacyRow({ pharmacy }) {
  const { isDeleting, deleteRow } = useDeleteRow()
  const { isInserting, insertItem } = useInsertItem()
  const [showForm, setShowForm] = useState(false)

  const {
    id: medicationId,
    code,
    name,
    prescription,
    description,
    regularPrice,
    discount,
    image,
  } = pharmacy

  function handleDuplicate() {
    insertItem({
      code,
      name: `copy of ${name}`,
      prescription,
      description,
      regularPrice,
      discount,
      image,
    })
  }

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <StoreItem>{code}</StoreItem>
        <Div>{name}</Div>
        <Div>{prescription === true ? "Yes" : "No"}</Div>
        <Div>{description}</Div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <Span>&mdash;</Span>
        )}

        <Div>
          <button onClick={() => setShowForm((show) => !show)}>
            <HiPencil />
          </button>
          <button onClick={handleDuplicate} disabled={isInserting}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => deleteRow(medicationId)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </Div>
      </TableRow>
      {showForm && (
        <CreatePharmacyForm
          medicationToEdit={pharmacy}
          setShowForm={setShowForm}
        />
      )}
    </>
  )
}

export default PharmacyRow
