import { Store } from "../types/store";
import { create } from "zustand";
import { createProductSlice } from "./product";

const useStore = create<Store>()((...a) => ({
    ...createProductSlice(...a)
}))

export default useStore;