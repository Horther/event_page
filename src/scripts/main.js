AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000*60*60*24;
    const horasEmMS = 1000*60*60;
    const minutosEmMs = 1000*60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento /diaEmMs);

    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMS);

    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMS) / minutosEmMs);

    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    document.getElementById('counter').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteOEvento < 0){
        clearInterval(contaHoras);
        document.getElementById('counter').innerHTML = 'Evento expirado';
    }

}, 1000);