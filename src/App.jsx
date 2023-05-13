import Card from './components/card/Card';

import {
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
    eleventh,
    twelfth,
} from './assets/images';

function App() {
    return (
        <div className='container'>
            <div className='wrapper'>
                <Card image={first} />
                <Card image={second} />
                <Card image={third} />
                <Card image={fourth} />
                <Card image={fifth} />
                <Card image={sixth} />
                <Card image={seventh} />
                <Card image={eighth} />
                <Card image={ninth} />
                <Card image={tenth} />
                <Card image={eleventh} />
                <Card image={twelfth} />
            </div>
        </div>
    );
}

export default App;
