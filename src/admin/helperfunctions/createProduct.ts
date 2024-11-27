import useStore from "../stores/store"

const isImageValid = (image: any) => {

    return image && typeof image === 'object' && "secure_url" in image && "public_id" in image
}


const isDisabled = Object.entries(useStore.getState().data).some(([key, value]) => {

    if (key === 'subImage') return false

    if (key === 'image') return !isImageValid(value)

    return value === ''
})

export default isDisabled;