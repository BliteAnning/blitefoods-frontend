import Header from '../../components/Header';
import ExploreMenu from '../../components/ExploreMenu'
import {useState} from 'react'
import DisplayFood from '../../components/DisplayFood';
import AppDownload from '../../components/AppDownload';

const Home = () => {
    const [category, setCategory] = useState('All')

    return ( 
        <div className="home">
            <Header />
            <ExploreMenu category={category} setCategory={setCategory}/>
            <DisplayFood category={category} />
            <AppDownload />
        </div>
     );
}
 
export default Home;