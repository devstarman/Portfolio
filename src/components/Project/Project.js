import React from 'react';
import styles from './Project.module.css';

const Project = (props) => {

    return (
        <section className={styles["container"]}>
            <div className={styles["text-container"]}>
                <h1 className={styles["title"]}>{props.item.title}</h1>
                <span className={styles["description"]}>
                    {props.item.devTime}<br />
                    {props.item.description}<br />
                    <strong>Tech Stack:</strong> <br />
                    {props.item.techStack}<br />
                    {
                        props.item.source ? 
                            <strong><a href={props.item.source} className={styles["link"]}>Source code</a></strong>
                        :
                            <strong>Source is not available.</strong>
                    }
                    {
                        props.item.liveDemo ?
                            <strong><a href={props.item.liveDemo} className={styles["link"]}>Live demo</a></strong>
                        :
                            ""
                    }
                </span>
            </div>
            <div className={styles["image-container"]}>
                    <img src={require('../../assets/'+props.item.imgSrc[0])} alt="Project screenshot 1" />
                    <img src={require('../../assets/'+props.item.imgSrc[1])} alt="Project screenshot 2" />
                    <img src={require('../../assets/'+props.item.imgSrc[2])} alt="Project screenshot 3" />
                    <img src={require('../../assets/'+props.item.imgSrc[3])} alt="Project screenshot 4" />
            </div>
        </section>
    );
}

export default Project;