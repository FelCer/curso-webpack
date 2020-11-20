import appendElement from './render.js';
import makeMessage from './make-message.js';

const waitTime = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Han pasado 3 segundos");
    }, 3000)
});

module.exports = {
    firstMessage: "Hola js desde un módulo.",
    delayMessage: async () => {
        const message = await waitTime;
        console.log(message);

        // const element = document.createElement('p');
        // element.textContent = message;
        appendElement(makeMessage(message));
    }
}