import routes from "@/admin/apiObject/apis";
import { CreateProduct } from "@/admin/types/product";
import axios from "axios";

const axiosInstance = axios.create({ baseURL: routes.product })

export const addProduct = async (data: CreateProduct) => {
    return (await axiosInstance.post('', data))
};