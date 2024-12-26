import { useMutation } from "@tanstack/react-query"
import { CreateProduct } from "@/admin/types/product"
import { addProduct } from "./api"


export const useCreateProduct = () => {

    const createProductQuery = useMutation({
        mutationFn: (data: CreateProduct) => addProduct(data!)
    })

    return {
        isLoading: createProductQuery.isPending,
        isSuccess: createProductQuery.isSuccess,
        createProductQuery,
    }
}

export default useCreateProduct;