interface HeaderInterface {
    name : string;
}
const FormHeader : React.FC<HeaderInterface> = ({name}) => {
  return (
    <>
        <p className="Login-header">{name}</p>
    </>
  )
}

export default FormHeader;