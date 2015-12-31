function clicked() {
    console.log('Enter: clicked');
    setTimedTask();
    console.log('Exit: clicked');
}
function setTimedTask() {
    console.log('Enter: setTimedTask');
    setTimeout(function () {
        console.log('Timed task runs');
    }, 1000);
    console.log('Exit: setTimedTask')
}