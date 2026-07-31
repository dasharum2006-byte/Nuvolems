//для плеера менять с play на stop
document.getElementById('play-img').src='assets/znachki/pause.svg';

document.getElementById('play-img').src='assets/znachki/playarrow.svg';

// 
const moreVertBtn = document.querySelector('.morevert');
const settingsPlayerMenu = document.getElementById('settings-player')

//вешаем клик на три точки
moreVertBtn.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    settingsPlayerMenu.classList.toggle('show');
}
);
document.addEventListener('click', () => {
    settingsPlayerMenu.classList.remove('show');
});

const audioPlayer = document.getElementById('audio');
const soundBtn = document.querySelector('.sound');
const soundImg = document.getElementById('sound-img');
// выключен звук или нет Мы создаем переменную isMuted (переводится как «Звук выключен?»). 
// При старте сайта мы пишем туда значение false (то есть «Нет, звук не выключен, музыка поёт»).
let isMuted = false
if (soundBtn && soundImg) {
    //вешаем клик на иконку динамика Приставь ухо к кнопке звука (soundBtn) и сиди карауль. Как только пользователь 
    // кликнет по ней (click), сразу запускай код, который написан в фигурных скобках».
    soundBtn.addEventListener('click', (event) => {
        //не даем клику закрыть наше всплывающее окно раньше времени
        //  Когда мы кликаем по динамику, этот клик пытается «бахнуть» по всему сайту, из-за чего скрытое окошко ползунка могло бы испугаться и 
        // резко закрыться. Эта строчка ставит невидимый щит и говорит клику: «Оставайся строго на кнопке звука, не лети дальше по экрану».
        event.stopPropagation();
        // переключаем флаг восклицательный знак в JS означает слово «наоборот». Эта строчка переворачивает нашу шпаргалку. Если там было написано false (звук поёт), 
        // она стирает это и пишет true (звук выключен). Если кликнешь ещё раз — она перевернёт true обратно в false. Чистый выключатель!
        isMuted = !isMuted;

        // если тег успешно нашелся то глушим его в браузере  Если наш скрытый музыкальный плеер (audioPlayer) существует, мы заглядываем в его встроенную системную настройку muted 
        // (без звука) и передаем ей значение из нашей шпаргалки (true или false). Браузер послушно рубит звук в твоих наушниках.
        if (audioPlayer) {
            audioPlayer.muted = isMuted;
        }
        if (isMuted) {
            soundImg.src = 'assets/znachki/volumeoff.svg';
        } else {
            soundImg.src = 'assets/znachki/volumeup.svg';
        }
        //  !!!!!!!!!!!!!!!11
        // ползунок в 0 не уходит автоматически когда нажимаешь на кнопку
        // !!!!!!!!!!!!!!!1
    });
}
