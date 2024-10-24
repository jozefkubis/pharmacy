import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Input from "../../ui/Input"
import Spinner from "../../ui/Spinner"
import { useSettings } from "./useSettings"
// import { useUpdateSetting } from "./useUpdateSetting"

function UpdateSettingsForm() {
  const { isLoading, settings: { minOrderSize, maxOrderSize, shipping } = {} } =
    useSettings()
  //   const { isUpdating, updateSetting } = useUpdateSetting()

  if (isLoading) return <Spinner />

  //   function handleUpdate(e, field) {
  //     const { value } = e.target

  //     if (!value) return
  //     updateSetting({ [field]: value })
  //   }

  return (
    <Form>
      <FormRow label="Minimum order size">
        <Input
          type="number"
          id="min-order"
          defaultValue={minOrderSize}
          //   disabled={isUpdating}
          //   onBlur={(e) => handleUpdate(e, "minOrderSize")}
        />
      </FormRow>

      <FormRow label="Maximum order size">
        <Input
          type="number"
          id="max-order"
          defaultValue={maxOrderSize}
          //   disabled={isUpdating}
          //   onBlur={(e) => handleUpdate(e, "maxOrderSize")}
        />
      </FormRow>

      <FormRow label="Shipping costs">
        <Input
          type="number"
          id="shipping"
          defaultValue={shipping}
          //   disabled={isUpdating}
          //   onBlur={(e) => handleUpdate(e, "shipping")}
        />
      </FormRow>
    </Form>
  )
}

export default UpdateSettingsForm
