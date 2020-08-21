const PROJECTS = [
    {
        id: 1,
        mobile: false,
        title: 'Stay At Home',
        devTime: '(03/2020 – 04/2020)',
        description: 'Web application designed during COVID-19 escalation for sharing indoor activities. Developed in two-person team with JIRA and Scrum. My responsibilites: frontend design, implementation, facebook API integration, backend API integration including token storage and websocket integration. This app was hosted on Heroku for 1 week and we got 80 users in total and maximum peak of 40 users logged in at the same time.',
        techStack: 'HTML5, CSS3, React, React Router, Context API, Hooks, styled-components, flexbox, react-bootstrap, JSON Web Token, WebSocket',
        imgSrc: [
            'stayathome-screen1.png',
            'stayathome-screen2.png',
            'stayathome-screen3.png',
            'stayathome-screen4.png'
        ],
        source: 'https://github.com/devstarman/StayAtHome',
        liveDemo: 'https://stayathome.filipogonowski.pl/'
    },
    {
        id: 2,
        mobile: true,
        title: 'Click Eat',
        devTime: '(07/2019 – 12/2019)',
        description: 'Mobile application for ordering food online. My responsibilities: creating mock-ups, fontend development including Facebook, backend API, token storage and payment card API integration. Developed in two-person team using Scrum and JIRA. This app was part of application to startup contest organised by Lower Silesian Development Fund in November 2019 (we became finalists of the competition).',
        techStack: 'React Native, React Navigation, Expo, npm, lottie, JWT',
        imgSrc: [
            'clickeat-mid-screen1.png',
            'clickeat-mid-screen2.png',
            'clickeat-mid-screen3.png',
            'clickeat-mid-screen4.png',
            'clickeat-mid-screen5.png'
        ],
        source: '',
        liveDemo: ''
    },
    {
        id: 3,
        mobile: false,
        title: 'JuweApp',
        devTime: '(03/2019 – 05/2019)',
        description: 'People counting system for YouWro Students\' Festival 2019 with sound sensors and web interface. Developed in a five-person team using Scrum and Kanban. Frontend was based on react-admin framework. My responsibilities included creation of frontend web application, backend, database, SMS API and Google Auth integration, creating system architecture with second tech leader. The app successfully counted around 5,000 festival attendees.',
        techStack: 'JavaScript, React, react-admin, REST, npm, Node.js, MySQL',
        imgSrc: [
            'juweapp-min-screen1.png',
            'juweapp-min-screen2.png',
            'juweapp-min-screen3.png',
            'juweapp-min-screen4.png'
        ],
        source: '',
        liveDemo: ''
    },
    {
        id: 4,
        mobile: false,
        title: 'ESFDS',
        devTime: '(04/2019 – 06/2019)',
        description: 'Web application designed for applications creation and management with various user roles. Inspired by paper-based applications in the current university funding system. Created use case diagrams, mock-ups and database model. Developed frontend application using React and react-admin and backend API using Node.js and Knex.',
        techStack: 'JavaScript, React, react-admin, Node.js, Knex, PostgreSQL',
        imgSrc: [
            'esfds-min-screen3.png',
            'esfds-min-screen1.png',
            'esfds-min-screen2.png',
            'esfds-min-screen4.png'
        ],
        source: 'https://github.com/devstarman/ESFDS',
        liveDemo: ''
    }
];

export default PROJECTS;