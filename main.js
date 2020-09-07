const pads = document.querySelectorAll('.pads');
const mainAudio = document.querySelector('audio');
const audios = [
    ['Clap',81],['Closed Hat',65],['Kick',87],['Crash',83],['Open Hat',69],['Snare',68]
]

audios.forEach((audio, i) => {

    window.addEventListener('keydown', (e) => {

        if(e.keyCode == audios[i][1] && e.keyCode == pads[i].dataset.key) {
            mainAudio.src = `audio/${audios[i][0]}.wav`;
            mainAudio.currentTime = 0;
            mainAudio.play();

            pads[i].style.transition = 'transform 0.2s, box-shadow 0.2s';
            pads[i].style.transform = 'scale(1.05)';
            pads[i].style.boxShadow = '0px 0px 25px floralwhite';

            setTimeout(() => {
                pads[i].style.transform = 'scale(1)';
                pads[i].style.boxShadow = '0px 0px 10px floralwhite';}
            ,200)
        }
    })
})