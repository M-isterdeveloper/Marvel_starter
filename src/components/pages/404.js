import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

import './reserve.scss';

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p className="error_404">
                   Page doesn't exist
            </p>
            <Link to='/' className="error_404_back-link">
                    Back no main page
            </Link>
        </div>
    )
}

export default Page404;