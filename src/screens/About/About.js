import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

import StudentActivitiesList from '../../components/StudentActivitiesList/StudentActivitiesList';

const About = () => (
    <main>
        <article>
            <section className={styles["section"]}>
                <h1>Skills/Technologies</h1>
                <span>
                    Only the most important elements are listed below, the tech stack is also mentioned in the <Link className={styles.link} to={"/projects"}>Projects</Link> section.
                </span><br />
                <ul className={styles["list"]}>
                    <li><strong>Main stack:</strong> JavaScript, HTML5, CSS3 (flexbox, grid), React, React Native</li>
                    <li><strong>React-related:</strong> React Router/React Navigation, Redux/Context API, Hooks</li>
                    <li><strong>Familiarity:</strong> Jest, Node.js, Express, SQL, MongoDB, REST API, Knex</li>
                    <li><strong>Tools:</strong> GIT, VS Code, Postman, JIRA, npm/yarn, Webpack, Heroku</li>
                    <li><strong>Other:</strong> XML/JSON, Agile/Scrum, UML, SOLID, functional paradigm, English C1</li>
                </ul>
            </section>
            <section className={styles["section"]}>
                <h1>Work Experience</h1>
                <span>
                    I completed 2 internships as a Java Developer. More details can be found in my <a href="/assets/filip_ogonowski_cv_2020.pdf" className={styles.link}>CV</a>.
                </span>
                <ul className={styles["list"]}>
                    <li>
                        <strong>PGS Software S.A. (August 2015)</strong><br />
                        <span>Java Developer (Internship)</span><br />
                    </li>
                    <li>
                        <strong>Credit Suisse Group AG (July 2014 - September 2014)</strong><br />
                        <span>Java Developer (Internship)</span><br />
                    </li>
                </ul>
                <span>After the 2015 internship, I was mainly focused on student activities. I returned to active programming and switched my main language from Java to JavaScript 
                    in January 2019. My current level and progress are presented in the <Link className={styles.link} to={"/projects"}>Projects</Link> section.</span>
            </section>
            <section className={styles["section"]}>
                <h1>Education</h1>
                <strong>Wroclaw University of Science and Technology</strong> <br />
                Computer Science (B.Eng.) (2012 - present)<br />
                Planned graduation in September 2020 (curriculum already completed).<br />
                Thesis: Program using evolutionary methods for travelling salesman problem.<br />
                Technologies: C++, Qt, GIT, UML, evolutionary algorithms, design patterns. 
            </section>
            <section className={styles["section"]}>
                <h1>Student Activities</h1>
                During my time at university, I was highly involved in student activities where I have gained a substantial amount of interpersonal skills 
                such as time management, teamwork, communication and public speaking/presentation abilities. The most significant positions are listed below. Some of the details can be found in my <a href="/assets/filip_ogonowski_cv_2020.pdf" className={styles.link}>CV</a>.
                <StudentActivitiesList />
            </section>
        </article>
    </main>
);

export default About;