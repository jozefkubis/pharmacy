import Input from "../../ui/Input"
import Button from "../../ui/Button"
import FileInput from "../../ui/FileInput"
import Textarea from "../../ui/Textarea"
import Form from "../../ui/Form"
import { useInsertItem } from "./useInsertItem"
import { useForm } from "react-hook-form"
import FormRow from "../../ui/FormRow"
import { useUpdateItem } from "./useUpdateItem"
import Select from "../../ui/Select"

function CreateStoreForm({ medicationToEdit = {}, setShowForm }) {
  const { isInserting, insertItem } = useInsertItem()
  const { isUpdating, updateItem } = useUpdateItem()
  const { id: editId, ...editValues } = medicationToEdit
  const isEditSession = Boolean(editId)
  const isWorking = isInserting || isUpdating

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    // getValues,
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  })

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0]

    if (isEditSession)
      updateItem(
        { newMedicationData: { ...data, image: image }, id: editId },
        {
          onSuccess: () => {
            reset()
            setShowForm(false)
          },
        }
      )
    else insertItem({ ...data, image: image }, { onSuccess: () => reset() })
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
          disabled={isWorking}
          {...register("code", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Medication" error={errors.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Prescription" error={errors.prescription?.message}>
        <Select
          id="prescription"
          disabled={isWorking}
          defaultValue={isEditSession ? editValues.prescription : ""}
          {...register("prescription", {
            required: !isEditSession ? "This field is required" : false,
          })}
        >
          <option value="" disabled>
            ...
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </Select>
      </FormRow>

      <FormRow label="Group of drugs" error={errors.description?.message}>
        <Textarea
          type="text"
          id="description"
          disabled={isWorking}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Price" error={errors.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
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
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>

        <Button disabled={isWorking}>
          {isEditSession ? "Save changes" : "Add new item"}
        </Button>
      </FormRow>
    </Form>
  )
}
export default CreateStoreForm
