import { useMutation, useQueryClient } from "@tanstack/react-query"
import { insertPharmacyItem } from "../../services/apiPharmacy"
import toast from "react-hot-toast"

export function useUpdateItem() {
  const queryClient = useQueryClient()

  const { isLoading: isUpdating, mutate: updateItem } = useMutation({
    mutationFn: ({ newMedicationData, id }) =>
      insertPharmacyItem(newMedicationData, id),
    onSuccess: () => {
      toast.success("Pharmacy item updated!")
      queryClient.invalidateQueries({ queryKey: ["pharmacy"] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isUpdating, updateItem }
}
