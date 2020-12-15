import ROUTES from '../../Constants/Routes';
import Layout from '../Layout/Layout';

import { useHistory } from 'react-router-dom';  

const style = {
    width: '80px',
    margin: '0 auto',
};

const Home = () => {

    const history = useHistory();

    const navigateTo = (route: string) => () => {
        history.push(route);
    };

    return (
        <Layout>
            <div style={style}>
                <button onClick={navigateTo(ROUTES.SOLO)}>Play Game</button>
            </div>
        </Layout>
    )
}

export default Home;