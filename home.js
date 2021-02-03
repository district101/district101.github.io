var linkto;
var newwindow;


function take(dec, url, wins) {
    if(dec === true) {
        if(newwindow === true) {
            window.open(linkto)
        } else {
            location.replace(linkto)   
        }
        take(false, false, false)
    } else if(dec === false) {
        document.getElementById('takebg').style.display = 'none'
        document.getElementById('take').style.display = 'none'
    } else {
        linkto = url;
        newwindow = wins;
        document.getElementById('taketext').title = url
        document.getElementById('taketext').innerHTML = 'If you click below, you will go to ' + dec + ' (<smalltext>' + url + '</smalltext>)'
        document.getElementById('takebg').style.display = 'inline'
        document.getElementById('take').style.display = 'inline'
    }
}