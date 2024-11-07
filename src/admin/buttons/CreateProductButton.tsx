// import useStore from "../stores/store"


const CreateProductButton = ({label} : { label : string}) => {
    // const data = useStore((state) => state.data)
    return (
        <button type="submit">{label}</button>
    )
}

export default CreateProductButton