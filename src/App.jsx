import moment from 'moment/moment';
import { images } from './components/card/images.data';

import Card from './components/card/Card';
import { useEffect, useState } from 'react';

function App() {
    const [imageData, setImageData] = useState(images);
    const [deletedItems, setDeletedItems] = useState([]);
    const [visibleItemCount, setVisibleItemCount] = useState(images.length);

    useEffect(() => {
        const storedData = localStorage.getItem('imageData');
        const storedDeletedItems = localStorage.getItem('deletedItems');
        const storedVisibleItemCount = localStorage.getItem('visibleItemCount');

        if (storedData) {
            setImageData(JSON.parse(storedData));
        }
        if (storedDeletedItems) {
            setDeletedItems(JSON.parse(storedDeletedItems));
        }
        if (storedVisibleItemCount) {
            setVisibleItemCount(Number(storedVisibleItemCount));
        }
    }, []);

    const handleRemoveItem = itemId => {
        const updatedData = imageData.filter(image => image.id !== itemId);
        setImageData(updatedData);

        const deletedItem = imageData.find(image => image.id === itemId);
        setDeletedItems(prevDeletedItems => [...prevDeletedItems, deletedItem]);

        localStorage.setItem('imageData', JSON.stringify(updatedData));
        localStorage.setItem('deletedItems', JSON.stringify([...deletedItems, deletedItem]));

        setVisibleItemCount(prevCount => prevCount - 1);
        localStorage.setItem('visibleItemCount', visibleItemCount - 1);
    };

    const handleRestoreItems = () => {
        const restoredData = JSON.parse(localStorage.getItem('deletedItems'));
        setImageData(prevImageData => [...prevImageData, ...restoredData]);
        setDeletedItems([]);

        localStorage.setItem('imageData', JSON.stringify([...imageData, ...restoredData]));

        setVisibleItemCount(prevCount => prevCount + restoredData.length);
        localStorage.setItem('visibleItemCount', visibleItemCount + restoredData.length);
    };

    var date = moment().format('L, h:mm a');

    return (
        <div className='container'>
            <div className='d-flex jcc aic flex-col mb-50'>
                <div className='d-flex jcc aic flex-col'>
                    <h1 className='title'>
                        Visible images: {visibleItemCount}/{images.length}
                    </h1>
                    <div>{date}</div>
                </div>
                <div className='wrapper'>
                    {imageData.map(image => (
                        <Card key={image.id} image={image} onRemoveItem={handleRemoveItem} />
                    ))}
                </div>
                <button
                    className='restoreButton'
                    onClick={handleRestoreItems}
                    disabled={deletedItems.length ? false : true}>
                    {deletedItems.length ? 'Restore' : 'No images to restore'}
                </button>
            </div>
        </div>
    );
}

export default App;
