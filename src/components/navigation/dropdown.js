import React from "react"
import { Link } from "gatsby"
import ageIcon from "../../images/icons-temp/B_leeftijd.png"
import typeIcon from "../../images/icons-temp/C_type.png"
import themeIcon from "../../images/icons-temp/D_thema.png"

const Dropdown = ({items, label = "", type = ""}) => {

    let iconUrl = "";
    if (type == "age") {
        iconUrl = ageIcon;
    } else if (type == "type") {
        iconUrl = typeIcon;
    } else if (type == "theme") {
        iconUrl = themeIcon;
    }

    return (
        <>
            <img src={iconUrl} alt={type} />
            {label}
            <ul className="uk-navbar-nav">
                {items.map((item, i) => {
                    return (
                        <li>
                            <Link
                             to={`/${type}/${item.node.strapiId}`}
                            >
                            {item.node.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )

}

export default Dropdown