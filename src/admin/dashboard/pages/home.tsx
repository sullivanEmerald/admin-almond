import Category from "../components/category";

const Dashboard = () => {
  return (
    <>
      <div className="dashboardCategory">
        <Category image='images/dashboard/main.png' />
        <Category image='images/dashboard/home.png' />
        <Category image='images/dashboard/groceries.png' />
        <Category image='images/dashboard/laptop.png' />
        <Category image='images/dashboard/electronics.png' />
        <Category image='images/dashboard/phone.png' />
      </div>
    </>
  )
}

export default Dashboard;