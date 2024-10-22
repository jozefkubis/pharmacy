import { useMutation, useQueryClient } from "@tanstack/react-query"
import { insertPharmacyItem } from "../../services/apiPharmacy"
import toast from "react-hot-toast"

export function useInsertItem() {
  const queryClient = useQueryClient()

  const { isLoading: isInserting, mutate: insertItem } = useMutation({
    mutationFn: insertPharmacyItem,
    onSuccess: () => {
      toast.success("Pharmacy item inserted!")
      queryClient.invalidateQueries({ queryKey: ["pharmacy"] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isInserting, insertItem }
}
