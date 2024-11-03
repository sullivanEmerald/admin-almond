import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import IconPair from "../types/icon"

export const conbineIcons : React.FC<IconPair> =  ({ iconFirst, iconSecond}) => {
    return (
        <>
            <span>
                <FontAwesomeIcon icon={iconFirst} />
                <FontAwesomeIcon icon={iconSecond} />
            </span>
        </>
    )
}

export default conbineIcons;