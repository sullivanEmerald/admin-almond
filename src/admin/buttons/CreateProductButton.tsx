import isDisabled from "../helperfunctions/createProduct"


const CreateProductButton = ({label} : { label : string}) => {
    return (
        <button type="submit" disabled={isDisabled}>
            {label}
        </button>  
    )
}

export default CreateProductButton