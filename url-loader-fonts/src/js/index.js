import '../css/estilos.css'
import { firstMessage, delayMessage } from './message.js'
import platziImg from '../img/platzi.png';

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('height', 50);
img.setAttribute('width', 50);
document.body.append(img);

document.write(firstMessage);
delayMessage();
