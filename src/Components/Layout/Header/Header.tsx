import ROUTES from "../../../Constants/Routes";

import { Link } from 'react-router-dom';

const Header = () => (
    <>
        <Link to={ROUTES.ROOT} style={{textDecoration: 'none'}}>
            <h1>Tic-Tac-Toe</h1>
        </Link>
    </>
);

export default Header;