import React from 'react';
import styles from './Home.module.css';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail, AiOutlineGithub } from 'react-icons/ai';
import { GrDocumentPdf } from 'react-icons/gr';

const Home = () => (
    <main>
        <article>
            <h1>Hello.</h1>
            <section className={styles["section"]}>
                <p>I'm Filip, <strong>JavaScript Developer</strong> from Wrocław, Poland. I like to work with web technologies such as <strong>React, React Native, and Node.js</strong>. 
                I am a B.Eng. Computer Science student at Wroclaw University of Science and Technology (graduating in September 2020).</p>
            </section>
            <section className={styles["section"]}>
                <p><strong>I've been working with JavaScript since January 2019.</strong> I like minimalist design 
                and keeping code simple and clean. Previously I was also developing my programming skills in Java and <strong>I completed 2 internships at Credit Suisse and PGS Software </strong>
                as Java Developer.</p>
            </section>
            <section className={styles["section"]}>
                <p>
                    <FiPhone /> +48 790 520 171<br />
                    <AiOutlineMail /> <a href="mailto:hello@filipogonowski.pl" className={styles.link}>hello@filipogonowski.pl</a><br />
                    <GrDocumentPdf /> <a href="/assets/filip_ogonowski_cv_2020.pdf" className={styles.link}>Get my CV</a><br />
                    <AiOutlineGithub /> <a href="https://github.com/devstarman" className={styles.link}>GitHub</a>
                </p>
            </section>
        </article>
    </main>
);

export default Home;