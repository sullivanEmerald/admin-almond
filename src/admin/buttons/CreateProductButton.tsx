import useProductDisabledButton from "../Hooks/useDisabledButton"

const CreateProductButton = ({ label }: { label: string }) => {

    const { isDisabled } = useProductDisabledButton()

    return (
        <button type="submit" disabled={isDisabled}>
            {label}
        </button>
    )
}

export default CreateProductButton