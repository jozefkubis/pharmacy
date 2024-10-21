import { useQuery } from "@tanstack/react-query"
import { getPharmacy } from "../../services/apiPharmacy"

export function useReadAllRows() {
  const {
    isLoading,
    data: pharmacy,
    error,
  } = useQuery({
    queryKey: ["pharmacy"],
    queryFn: getPharmacy,
  })

  return { isLoading, pharmacy, error }
}