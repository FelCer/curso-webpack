import '../css/estilos.css'
import { firstMessage, delayMessage } from './message.js'
// import platziImg from '../img/platzi.png';
// import platziVideo from '../video/que-es-core.mp4'
import exampleJson from '../json/example.json';
// import renderDom from '../js/render.js';
// import '../css/main.less'

import Teachers from './components/teachers.js';

import React from 'react';
import { render } from 'react-dom';

render(<Teachers data={exampleJson} />, document.getElementById('container'));


const $button = document.getElementById('loadModule')

$button.addEventListener('click', async () => {

    const { deafult: alert } = await import('./alert.js');
    alert();
});

// // images
// const img = document.createElement('img');
// img.setAttribute('src', platziImg);
// img.setAttribute('height', 50);
// img.setAttribute('width', 50);
// renderDom(img);

// // video
// const video = document.createElement('video');
// video.setAttribute('src', platziVideo);
// video.setAttribute('width', 480);
// video.setAttribute('controls', true);
// video.setAttribute('autoplay', true);
// renderDom(video);

// exampleJson.teachers.forEach((teacher) => {
//     const element = document.createElement("li");
//     element.textContent = teacher.name;
//     renderDom(element);
// });

document.write(firstMessage);
delayMessage();
