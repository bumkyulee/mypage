window.addEventListener('DOMContentLoaded', function()
{
    if (!window.location.href.includes('github')) return;

    const body = document.querySelector('body');
    
    let a = document.createElement('a');
    a.href = 'https://spartacodingclub.kr';
    a.target = '_blank';

    let logo = document.createElement('img');
    logo.src = 'logo_teamsparta.png';
    logo.width = '80';

    if (window.innerHeight - body.clientHeight > 100) {
        a.style.cssText = 'position:absolute; bottom: 30px; left: calc(50% - 40px); width: 80px; height: 0;'
    } else {
        a.style.cssText = 'position:relative; top: 10px; left: calc(50% - 40px); width: 80px; height: 0;'
        logo.style.cssText = 'padding-bottom: 10px;'
    }

    a.appendChild(logo);
    body.appendChild(a);
});
