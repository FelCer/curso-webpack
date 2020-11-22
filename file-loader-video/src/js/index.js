import '../css/estilos.css'
import { firstMessage, delayMessage } from './message.js'
import platziImg from '../img/platzi.png';
import platziVideo from '../video/que-es-core.mp4';
import render from '../js/render.js';

// images
const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('height', 50);
img.setAttribute('width', 50);
render(img);

// video    
const video = document.createElement('video');
video.setAttribute('src', platziVideo);
video.setAttribute('width', 480);
video.setAttribute('controls', true);
video.setAttribute('autoplay', true);
render(video);

document.write(firstMessage);
delayMessage();
