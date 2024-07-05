import Banner from './banner'
import HouseList from './houseList';

const jsx = <div>Hi</div>

const App = () => {
    return (
    <>
        {/* {jsx} This shows an example of a jsx string assigned to a constant and then displayed*/}
        <Banner>
            <div>
                Providing houses all over the world.
            </div>
        </Banner>
        <HouseList/>
    </>
    )
}

export default App;