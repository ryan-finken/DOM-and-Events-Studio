// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function (){
    document.getElementById('takeoff').addEventListener('click', function () {
        if (window.confirm('Confirm that the shuttle is ready for takeoff.')) {
            document.getElementById('flightStatus').innerHTML = 'Shuttle in flight.';
            document.getElementById('shuttleBackground').style.backgroundColor = 'blue';
            document.getElementById('spaceShuttleHeight').innerHTML = (
                String(Number(spaceShuttleHeight.innerHTML) + 10000)
            );
        }
    });

    document.getElementById('landing').addEventListener('click', function () {
        window.alert('The shuttle is landing. Landing gear engaged.');
        document.getElementById('flightStatus').innerHTML = 'The shuttle is landing. Landing gear engaged.';
        document.getElementById('shuttleBackground').style.backgroundColor = 'green';
        document.getElementById('spaceShuttleHeight').innerHTML = 0;
    });

    document.getElementById('missionAbort').addEventListener('click', function () {
        if (window.confirm('Confirm that you want to abort the mission.')) {
            document.getElementById('flightStatus').innerHTML = 'Mission aborted.';
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
        }
    });

    let rocket = document.getElementById('rocket');
    rocket.style.position = 'absolute';
    rocket.style.marginLeft = '0px';
    rocket.style.marginTop = '0px';

    document.getElementById('left').addEventListener('click', function () {
        rocket.style.marginLeft = String(Number(rocket.style.marginLeft.slice(0, -2)) - 10) + 'px';
    });
    
    document.getElementById('right').addEventListener('click', function () {
        rocket.style.marginLeft = String(Number(rocket.style.marginLeft.slice(0, -2)) + 10) + 'px';
    });
    
    document.getElementById('up').addEventListener('click', function () {
        rocket.style.marginTop = String(Number(rocket.style.marginTop.slice(0, -2)) - 10) + 'px';
    });

    document.getElementById('down').addEventListener('click', function () {
        rocket.style.marginTop = String(Number(rocket.style.marginTop.slice(0, -2)) + 10) + 'px';
        console.log(rocket.style.marginTop);
    });
    
});