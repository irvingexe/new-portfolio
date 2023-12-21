import f1 from './f1.jpg'

const projects = new Map([
  ['formula1', {
    route: 'formula1',
    name: 'Formula 1',
    subtitle: 'Live Coverage',
    description: 'Mexico Grand Prix live coverage and box office website.\n\nAs a part of the preparatives for the Mexico Grand Prix, the F1 live coverage site needed a fresher look so fans could follow up the event on these celebration days.',
    image: f1,
    cover: f1,
    imageDetail: f1,
    role: ['Front-End', 'Interaction Design'],
    roleLong: ['Front-End Development', 'Interaction Design/Animation'],
    team: 'Alucina Studio',
    teamURL: 'https://alucinastudio.com/',
    about: 'The purpose of the renewal was to enhance the interactive aspects of the box office so people can have a better look to the new areas and aminities in the Mexico City racetrack.\n\nThe renewal involved new sections, including a full live coverage of the event, and with this create a more attractive experience to incentivize people to join the event and follow up the celebration.',
    next: 'aladin',
    URL: 'https://www.mexicogp.mx/cobertura-2022/',
    index: 1,
    nextIndex: 2
  }],
  ['aladin', {
    route: 'aladin',
    name: 'Aladdin',
    subtitle: 'Marketing & Advertising',
    description: 'Aladdin Broadway musical website.\n\nA digital platform for the show that allows people to learn about the show. Additionally, it provides a convenient way for people to check the show program and purchase tickets online.',
    image: f1,
    cover: f1,
    imageDetail: f1,
    role: ['Front-End'],
    roleLong: ['Front-End Development'],
    team: 'Alucina Studio',
    teamURL: 'https://alucinastudio.com/',
    about: 'The website serves as a highly convenient way for potential audience members to purchase tickets to the show.\n\nIt also offers a range of multimedia features. This includes high-quality photos and videos of the production, which can help to showcase the visual spectacle of the show and give audiences a sense of what it will look like on stage.',
    next: 'cartoober',
    URL: 'https://www.aladdinelmusical.mx/',
    index: 2,
    nextIndex: 3
  }],
  ['cartoober', {
    route: 'cartoober',
    name: 'Cartoober',
    subtitle: 'Live Streaming',
    description: 'Stream as an animated character from your browser.\n\nCross-platform service with a focus on performance and accessibility to make the video creation process easier and more accessible for VTubers.',
    image: f1,
    cover: f1,
    imageDetail: f1,
    role: ['Front-End', 'Character rigging'],
    roleLong: ['Front-End Development', 'Character rigging/Animation'],
    team: 'Alucina Studio',
    teamURL: 'https://alucinastudio.com/',
    about: 'For new content creators, the main obstacle to begin in the streaming industry is not having the best equipment. Cartober aims to simplify streaming video creation for new content creators by providing virtual avatars as a solution to the obstacle of lacking the best equipment.\n\nCartoober is the result of combining cutting-edge technologies like React for building a scalable and flexible front-end, Pixi.js, a 2D rendering engine, to create high-performance graphics and animations, Tensorflow, a machine learning library, for realistic facial expressions and movements for the virtual avatars, and RTMP communication to ensure real-time communication between the platform and viewers, providing the posibility to stream to multiple social media platforms like YouTube and Facebook.',
    next: 'profuturo',
    URL: 'https://www.cartoober.com/',
    index: 3,
    nextIndex: 4
  }],
  ['profuturo', {
    route: 'profuturo',
    name: 'Profuturo',
    subtitle: 'Gamification for employee training',
    description: "Turning training process into an interactive experience.\n\nA solution featuring interactive simulations and role-playing activities to equip employees with deeper client understanding and empathy.",
    image: f1,
    cover: f1,
    imageDetail: f1,
    role: ['Front-End', 'Back-End', 'Animation', 'Game Design'],
    roleLong: ['Front-End Development', 'Back-End Development', 'Animation', 'Game Design'],
    team: 'Alucina Studio',
    teamURL: 'https://alucinastudio.com/',
    about: "Introducing through an interactive experience the step by step of each procedure, but from the client's point of view, showcasing the constraints they may face, with the objective of developing empathy from employees to clients.",
    next: 'lgds',
    index: 4,
    nextIndex: 5
  }],
  ['lgds', {
    route: 'lgds',
    name: 'LGDS',
    subtitle: 'POS',
    description: 'POS software for efficient restaurant management experience.\n\nSince this software was designed from scratch, we took it as an opportunity to learn what the client actually needed and make the software be a natural extension of their proces.',
    image: f1,
    cover: f1,
    imageDetail: f1,
    role: ['Front-End', 'UI/UX Design'],
    roleLong: ['Front-End Development', 'UI/UX Design'],
    about: 'By focusing on the specific requirements of the client, the team was able to create a software that not only met their needs but also improved the overall efficiency of their processes.\n\nThe solution helps to address a common issue faced by many restaurants, feeling overwhelmed by the many options presented by traditional POS systems. By creating a software that is specific to its needs, it provides a more streamlined and user-friendly solution, ultimately contributing to the success and growth of the business.',
    next: 'formula1',
    index: 5,
    nextIndex: 1
  }],
])

export default projects;