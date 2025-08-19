    const timeLine =[
    {fecha: '2014', titulo: 'Mi primera consola', descripcion: 'Me regalaron una xbox 360.'},
    {fecha: '2020', titulo: 'Fallecimiento de mi abuela', descripcion: 'Fallece mi abuela por condiciones de salud.'},
    {fecha: '2023', titulo: 'Pereja', descripcion: 'Conoci a mi pareja.'},
    {fecha: '2024', titulo: 'Perdida de amigos', descripcion: 'Mis amigos cercanos me dejaron de hablar.'},
    {fecha: '2025', titulo: 'Universidad', descripcion: 'Entre a la universidad (EAN).'},
    {fecha: '2025', titulo: 'Estancamiento', descripcion: 'A nivel de programacion tuve un gran periodo de estancamiento que no me permitio dar prioridad ni mejorar.'},
];

const lineaTiempo = document.querySelector('.activitys')

timeLine.forEach((evento, index) => {
    const direction = index %  2 === 0  ? 'left' : 'right';
    const eventElement = document.createElement('div');
    eventElement.className = `event ${direction}`;
    eventElement.innerHTML = `
        <div class="event-date">${evento.fecha}</div>
        <div class="event-content">
            <h3>${evento.titulo}</h3>
            <p>${evento.descripcion}</p>
            
        </div>
    `;
    lineaTiempo.appendChild(eventElement);
});
