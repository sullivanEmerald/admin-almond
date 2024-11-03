import FormLayoutChildren from "../types/layout";

const FormLayout: React.FC<FormLayoutChildren> = ({ children }) => {
    return (
        <div className="formDesignSetup">
            {children}
        </div>
    );
};

export default FormLayout;
