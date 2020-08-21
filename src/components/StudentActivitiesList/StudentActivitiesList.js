import React, { useState } from 'react';
import styles from './StudentActivitiesList.module.css';
import ACTIVITIES from './StudentActivitiesData';

const StudentActivitiesList = (props) => {

    const [buttonVisibility, setButtonVisiblity] = useState(true);
    const [list, setList] = useState(ACTIVITIES);

    const renderedList = list.map((element) => {
        if(element.visibility) {
            if(element.subtitle.length > 0) {
                return (
                    <li key={element.id} className={styles["list-element"]}>
                        <strong>{element.title}</strong><br />
                        {element.subtitle}<br />
                        {element.position + " " + element.time}
                    </li>
                );
            } else {
                return (
                    <li key={element.id} className={styles["list-element"]}>
                        <strong>{element.title}</strong><br />
                        {element.position + " " + element.time}
                    </li>
                );
            }
        } else {
            return null;
        }
    });

    const handleButtonClick = () => {
        if(buttonVisibility) {
            setButtonVisiblity(false);
            setList(list.map((element) => {
                return (
                    {
                        ...element,
                        visibility: true
                    }
                );
            }));
        } else {
            setButtonVisiblity(true);
            setList(list.map((element) => {
                if(element.id < 4) {
                    return element;
                } else {
                    return (
                        {
                            ...element,
                            visibility: false
                        }
                    );
                }
            }));
        }
    }

    return (
        <ul className={styles["list"]}>
            {
                renderedList
            }
            <li>
                <button className={styles.textButton} onClick={handleButtonClick}>
                    {buttonVisibility ? "View all (9 positions)" : "Hide less relevant positions"}
                </button>
            </li>
        </ul>
    );
}

export default StudentActivitiesList;