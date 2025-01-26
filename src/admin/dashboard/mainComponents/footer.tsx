import DashbooardContentLayout from "@/admin/middleware/dashboardContent"

const Footer = () => {
    return (
        <>
            <footer>
                <section className="dashboardFooter">
                    <DashbooardContentLayout>
                        <main>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nobis laudantium ab corporis, sit atque sint, molestias eveniet officiis iure commodi dignissimos omnis optio placeat tempora! Totam maiores deserunt obcaecati?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veritatis eaque ea ipsa distinctio.
                        </main>
                    </DashbooardContentLayout>
                    <aside className="footerAside" id="footerAside">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolorum at expedita necessitatibus consectetur dolor ipsum illum ipsa officiis ut temporibus nulla omnis pariatur perspiciatis deserunt cumque eveniet animi explicabo.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas est adipisci iure deleniti! Voluptatem mollitia
                    </aside>
                </section>
                <section className="footerFooter" id="footerFooter">
                    Welcome officially Almond to Super Admin... &copy; 2025 Sullivan C.J Amadike - Emerald
                </section>
            </footer>
        </>
    )
}

export default Footer