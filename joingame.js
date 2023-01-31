function appendButton(){
    /*var input = document.getElementsByClassName("check-room-input")[0];
    var parent = document.getElementsByClassName("proceed-game-action-wrapper")[0];
    var hzbutton = document.createElement("button");
        <button aria-label="Połącz z Hackzizzem" isfloating="true" class="check-room-button text-unselectable" data-cy="joinGame-button" type="submit" data-v-0b83923f=""><!----><span class="visible" data-v-0b83923f="">Połącz z Hackzizzem</span></button>
    hzbutton.setAttribute("aria-label", "Dołącz z Hackzizzem")
    hzbutton.isFloating = true
    hzbutton.classList = "check-room-button text-unselectable hzbutton"
    hzbutton.setAttribute("data-cy", "hz-button")
    hzbutton.setAttribute("data-v-0b83923f", "")
    hzbutton.onclick = function () {
        var jqxhr = $.getJSON("https://api.quizit.online/quizizz/answers?pin=" + input.value, function() {
            chrome.storage.sync.set(jqxhr, function() {
                //alert("Ustawiono quiz z " + jqxhr["data"]["answers"].length.ToString() + " pytaniami")
            });
        })
    }
    parent.appendChild(hzbutton)

    var span = document.createElement("span")
    span.className = "visible"
    span.innerHTML = "Hackzizz"
    hzbutton.appendChild(span)*/
    document.getElementsByClassName("check-room-button text-unselectable")[0].innerHTML = "Hackzizz it!"
}

setTimeout(appendButton, 1000)