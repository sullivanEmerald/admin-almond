import FormLayoutChildren from "../types/layout";

const FormLayout: React.FC<FormLayoutChildren> = ({ children, isDashboard }) => {
    return (
        <div className={isDashboard ? 'dashboardFormDesignSetup' : 'formDesignSetup'}>
            {children}
        </div>
    );
};

export default FormLayout;
