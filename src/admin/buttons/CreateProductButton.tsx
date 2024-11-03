import useStore from "../stores/store"


const CreateProductButton = ({label} : { label : string}) => {
    const data = useStore((state) => state.data)
    return (
        <button type="submit" disabled={Object.values(data).some((item) => item === '')}>{label}</button>
    )
}

export default CreateProductButton