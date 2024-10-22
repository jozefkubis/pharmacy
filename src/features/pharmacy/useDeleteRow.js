import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deletePharmacyItem } from "../../services/apiPharmacy"
import toast from "react-hot-toast"

export function useDeleteRow() {
  const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteRow } = useMutation({
    mutationFn: deletePharmacyItem,
    onSuccess: () => {
      toast.success("Pharmacy item deleted!")
      queryClient.invalidateQueries({ queryKey: ["pharmacy"] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isDeleting, deleteRow }
}
