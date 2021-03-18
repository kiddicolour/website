import React from "react"
import { Link } from "gatsby"

const Dropdown = ({items, label = "", type = ""}) => {

    return (
        <>
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