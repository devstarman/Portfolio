import React from 'react';
import styles from './Projects.module.css';
import Project from '../../components/Project/Project';
import PROJECTS from './ProjectsData';

const Projects = () => {

    const renderedProjects = PROJECTS.map((item) => {
        return (
            <Project key={item.id} item={item} />
        );
    });

    return (
        <main>
            <article className={styles["article"]}>
                <section className={styles["textParagraph"]}>
                    <strong>Three out of five projects in this portfolio were developed in teams.</strong> "Stay At Home" and "Click Eat" were developed with 
                    my colleague who is currently a Mid Developer in a software house here in Wrocław. <strong>We used Scrum methodology, JIRA with Kanban 
                    board for the development and GitHub with JIRA-related commits.</strong> "Juwe App" was developed in 5-person team with two developers, 
                    scrum master and two IoT designers for IoT engineers. 
                </section>
                <section className={styles["textParagraph"]}>
                    Because most of the projects were developed in teams <strong>I agreed with my colleague to publish the source code of the most recent project 
                    (Stay At Home) as a sufficient showcase of my current abilities.</strong> I also included the source code of ESFDS which was developed 
                    solely by myself.
                </section>
                <section className={styles["textParagraph"]}>
                    You can also check <a className={styles.link} href="https://github.com/devstarman/Portfolio">the source code of this portfolio page</a> which was developed in React with flexbox, grid, clear CSS Modules separation, 
                    folder structure with component separation and other best practices showing some of my current abilities in the React environment.
                </section>
                <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
                    { renderedProjects }
                </div>
            </article>
        </main>
    );   
}

export default Projects;