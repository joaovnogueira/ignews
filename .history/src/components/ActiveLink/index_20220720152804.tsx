import { Link } from "prismic-dom";
import { ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink(props: ActiveLinkProps) {
    return (
        <Link>  

        </Link>     
    )
}