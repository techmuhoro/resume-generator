import type { NextPage } from 'next';
import { Header, Footer } from '../../components';

const App: NextPage = () => {
    return (
        <div>
            <Header />
            <p>This is App</p>
            <Footer />
        </div>
    );
};

export default App;
