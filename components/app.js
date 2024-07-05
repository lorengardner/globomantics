import Banner from './banner'

const jsx = <div>Hi</div>

const App = () => {
    return (
    <div>
        {/* {jsx} This shows an example of a jsx string assigned to a constant and then displayed*/}
        <Banner>
            <div>
                Providing houses all over the world.
            </div>
        </Banner>
    </div>
    )
}

export default App;