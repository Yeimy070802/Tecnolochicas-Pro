let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app,{
loop:true,
delay: 75,
});

typewriter
.pauseFor(2500)
.typeString(' "La ciencia puede divertirnos y fascinarnos, pero es la INGENIERÍA la que cambia el mundo" <br> -Isaac Asimov')
.pauseFor(200)
.deleteChars(10)
.start();