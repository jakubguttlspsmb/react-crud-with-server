import { Link } from "react-router-dom"

export default function DuchLink(props) {
   
    return (
        <>
            <Link to={`/duch/${props._id}`}>
                <p>{props.name}</p>
            </Link>
        </>
    )
}