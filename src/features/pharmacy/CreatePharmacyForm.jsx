import styled from "styled-components"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import FileInput from "../../ui/FileInput"
import Textarea from "../../ui/Textarea"
import Form from "../../ui/Form"
import { useInsertItem } from "./useInsertItem"
import { useForm } from "react-hook-form"

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`
const Label = styled.label`
  font-weight: 500;
`

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `

function CreateStoreForm() {
  const { handleSubmit, register, reset } = useForm()

  const { isInserting, insertItem } = useInsertItem()

  function onSubmit(data) {
    insertItem(data)
    reset()
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="code">Code</Label>
        <Input
          type="number"
          id="code"
          disabled={isInserting}
          {...register("code", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="name">Medication</Label>
        <Input
          type="text"
          id="name"
          disabled={isInserting}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="prescription">Prescription</Label>
        <Input
          type="text"
          id="prescription"
          disabled={isInserting}
          {...register("prescription", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Group of drugs</Label>
        <Textarea
          type="text"
          id="description"
          disabled={isInserting}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Price</Label>
        <Input
          type="number"
          id="regularPrice"
          disabled={isInserting}
          {...register("regularPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          disabled={isInserting}
          {...register("discount", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Image</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>

        <Button disabled={isInserting}>Insert item</Button>
      </FormRow>
    </Form>
  )
}
export default CreateStoreForm
