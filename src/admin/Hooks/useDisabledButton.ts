import useStore from "../stores/store"


const useProductDisabledButton = () => {

    const data = useStore((state) => state.data)


    const isImageValid = (image: any) => {

        return image && typeof image === 'object' && "secure_url" in image && "public_id" in image
    }


    const isDisabled = Object.entries(data).some(([key, value]) => {


        if (Array.isArray(value)) return false

        if (key === 'image') return !isImageValid(value)

        return value === ''
    })

    return {
        isDisabled
    };

}


export default useProductDisabledButton;