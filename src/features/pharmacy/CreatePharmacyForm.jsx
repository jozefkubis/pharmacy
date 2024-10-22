import Input from "../../ui/Input"
import Button from "../../ui/Button"
import FileInput from "../../ui/FileInput"
import Textarea from "../../ui/Textarea"
import Form from "../../ui/Form"
import { useInsertItem } from "./useInsertItem"
import { useForm } from "react-hook-form"
import FormRow from "../../ui/FormRow"

function CreateStoreForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm()

  const { isInserting, insertItem } = useInsertItem()

  function onSubmit(data) {
    insertItem({ ...data, image: data.image[0] })
    reset()
  }

  function onError(errors) {
    console.log(errors)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Code" error={errors.code?.message}>
        <Input
          type="number"
          id="code"
          disabled={isInserting}
          {...register("code", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Medication" error={errors.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isInserting}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Prescription" error={errors.prescription?.message}>
        <Input
          type="text"
          id="prescription"
          disabled={isInserting}
          {...register("prescription", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Group of drugs" error={errors.description?.message}>
        <Textarea
          type="text"
          id="description"
          disabled={isInserting}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Price" error={errors.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isInserting}
          {...register("regularPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isInserting}
          {...register("discount", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "This field is required",
          })}
        />
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
