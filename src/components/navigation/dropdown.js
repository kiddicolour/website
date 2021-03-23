import React from "react"
import { Link } from "gatsby"
import { useState } from "react"
import ageIcon from "../../images/icons-temp/B_leeftijd.png"
import typeIcon from "../../images/icons-temp/C_type.png"
import themeIcon from "../../images/icons-temp/D_thema.png"

const Dropdown = ({items, label = "", type = ""}) => {

    const [showDropdownState, setShowDropdownState] = useState(false);

    let iconUrl = "";
    if (type == "age") {
        iconUrl = ageIcon;
    } else if (type == "type") {
        iconUrl = typeIcon;
    } else if (type == "theme") {
        iconUrl = themeIcon;
    }

    const toggleDropdown = () => {
        if (showDropdownState == false) {
            setShowDropdownState(true);
            document.addEventListener('click', hideDropdown);
        } else {
            setShowDropdownState(false);
        }
        console.log(showDropdownState);
    }

    const hideDropdown = () => {
        setShowDropdownState(false);
        document.removeEventListener('click', hideDropdown);
    }

    return (
        <>
            <div onClick={() => toggleDropdown()} style={{height: "100%", display: "flex", alignItems: "center"}}>
                <img src={iconUrl} alt={type} style={{width: "48px", height: "48px"}} />
                {<p>{label}</p>}
            </div>
            {showDropdownState ? (
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
            ) : (
                null
            )}
        </>
    )

}

export default Dropdown