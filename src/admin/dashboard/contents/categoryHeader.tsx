
import { admin } from "@/admin/apis/panel";
import { Link } from "react-router-dom";
import HeaderContent from "./headerContent";

const CategoryHeaderContents = () => {
    return (
        <>
            <header className="categoryHeaderContents">
                <div>
                    <Link to={admin.dashboard} replace={true} className='categoryHomeLink'>
                        Home
                    </Link>
                    <span className="searchFilter"> &gt; Search</span>
                </div>
                <HeaderContent />
                <div className="categorySort">
                    <a type="button">Relevance</a>
                    <a type="button">price - high To low</a>
                    <a type="button">price - low To high</a>
                </div>
            </header>
        </>
    )
}

export default CategoryHeaderContents;