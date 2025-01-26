import Logo from "@/admin/components/logo"
import Navigation from "../contents/nav"
import AsideStructure from "../middleware/asideStructure"

const Aside = () => {
  return (
    <>
      <AsideStructure>
        <Logo />
        <Navigation />
      </AsideStructure>
    </>
  )
}

export default Aside