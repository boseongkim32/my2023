import React, {useState} from 'react'
import styles from './Main.module.css'
import captions from './captions.js'

export default function Main() {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [overlayMonth, setOverlayMonth] = useState('january');

    const toggleOverlay = (month) => {
        if (!overlayVisible) {
            setOverlayMonth(month);
        }
        setOverlayVisible(!overlayVisible);
    };

  return (
    <>
        <div className={styles.gridContainer}>
            {gridItems.map(item => (
                <Grid
                    key={item.month}
                    month={item.month}
                    description={item.description}
                    toggleOverlay={toggleOverlay}
                />
            ))}
       </div>
       {overlayVisible && <Overlay month={overlayMonth} toggleOverlay={toggleOverlay}/>}
    </>
  );
}

const Grid = ({month, description, toggleOverlay}) => {
    return (
        <div className={styles.gridCard}>
            <p className={styles.month}> {month} </p>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={`/${month}0.jpg`} alt={`${month}`}/>
            </div>
            <p className={styles.imageLocation}> {description} </p>
            <button className={styles.button} onClick={() => toggleOverlay(month)}> Details </button>
        </div>
    );
}

const Overlay = ({month, toggleOverlay}) => {
    const [overlayIndex, setOverlayIndex] = useState(0);

    const handleNext = () => {
        setOverlayIndex((overlayIndex + 1) % 4);
    };

    const handlePrevious = () => {
        if (overlayIndex === 0) {
            setOverlayIndex(3);
        } else {
            setOverlayIndex(overlayIndex - 1);
        }
    };
        
    return (
        <div className={styles.overlay}>
            <div className={styles.overlayContent}>
                <div className={styles.overlayImageContainer}>
                    <img className={styles.overlayImage} src={`/${month}${overlayIndex}.jpg`} alt={`${month}`}/>
                </div>
                <div className={styles.overlayCaptionContainer}>
                    <p className={styles.overlayCaption}> {captions[`${month}${overlayIndex}`]} </p>
                </div>
                <button className={styles.overlayButtonRight} onClick={handleNext}> {'>'} </button>
                <button className={styles.overlayButtonLeft} onClick={handlePrevious}> {'<'} </button>
                <button className={styles.overlayClose} onClick={() => toggleOverlay(month)}> X </button>
            </div>
        </div> 
    );
}

const gridItems = [
    { month: 'january', description: 'hello' },
    { month: 'febuary', description: 'no' },
    { month: 'march', description: 'yes' },
    { month: 'april', description: 'no' },
    { month: 'may', description: 'fuck' },
    { month: 'june', description: 'mhm' },
    { month: 'july', description: 'ohno' },
    { month: 'august', description: 'lol'},
    { month: 'september', description: 'yes'},
    { month: 'october', description: 'oh' },
    { month: 'november', description: 'yes' },
    { month: 'december', description: 'lol' },
];



