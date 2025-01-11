import LandingPageIndex from '../landing/components/landingIndex'
type LandingPageOutletProps = {
    children: React.ReactNode;
};

const LandingPageOutlet: React.FC<LandingPageOutletProps> = ({ children }) => {
    return (
        <>
            <section className='landingPageOutlet'>
                <aside>
                    <LandingPageIndex />
                </aside>
                <main>
                    {children}
                </main>
            </section>
        </>
    );
};

export default LandingPageOutlet;
