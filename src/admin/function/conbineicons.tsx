import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const combineIcons = (icon1: IconDefinition, icon2: IconDefinition) => (
    <span style={{ position: "relative" }}>
        <FontAwesomeIcon
            icon={icon1}
            className='fontawesomeIcon1'
        />
        <FontAwesomeIcon
            icon={icon2}
            className='fontawesomeIcon2'
        />
    </span>
);