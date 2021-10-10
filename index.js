const init = () => {
    fetch('http://localhost:3000/victims')
    .then(resp => resp.json())
    .then(data => renderVictim(data))
}

function renderVictim(victims){
        victims.forEach(victim => {
          
    const names = document.getElementById('name')
    names.innerText = victim.name;

    const age = document.getElementById('age')
    age.innerText = victim.age;

    const locaton = document.getElementById('location')
    locaton.innerText = victim.location

    const story = document.getElementById('story')
    story.innerText = victim.story

    const mouseOver = document.getElementById('name')

    mouseOver.addEventListener('mouseenter', function( event ) {
        event.target.style.color = "red";

        setTimeout(function () {
            event.target.style.color= "";
        }, 500);
    }, false)


   

    const images = document.getElementsByClassName('album-image')

    images.addEventListener('click', () => {
        const photo =document.getElementById('track-detail')
            photo.append(photoHolder);
    })
    
});




}




document.addEventListener('DOMContentLoaded', init)