import styled from "styled-components"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import FileInput from "../../ui/FileInput"
import Textarea from "../../ui/Textarea"
import Form from "../../ui/Form"

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
  return (
    <Form>
      <FormRow>
        <Label htmlFor="code">Code</Label>
        <Input type="number" id="code" />
      </FormRow>

      <FormRow>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" />
      </FormRow>

      <FormRow>
        <Label htmlFor="NoOfPcs">No. of pcs</Label>
        <Input type="number" id="NoOfPcs" />
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Price</Label>
        <Input type="number" id="regularPrice" />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input type="number" id="discount" defaultValue={0} />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description of Item</Label>
        <Textarea type="text" id="description" defaultValue="" />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Item image</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>

        <Button>Edit item</Button>
      </FormRow>
    </Form>
  )
}
export default CreateStoreForm
