import { CreateProduct } from "@/admin/types/product"
import { useMutation } from "@tanstack/react-query"

export const useProductMutation = () => {

    const mutation = useMutation({
        mutationFn: (data: CreateProduct) => 
    })
}