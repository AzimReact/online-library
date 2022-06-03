import { Link } from "react-router-dom";

export default function NotFoundPage () {
    return (
        <div>
            <h1> 
                This page doesn't exist. Go - <Link to="/"> Home </Link>
            </h1>
        </div>
    )
}



