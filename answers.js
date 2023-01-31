// przyspiesz to gowno
// czemu to nie jest responsywne?

var lastq = ""

function a(){
    alert("Przyglądaj się odpowiedziom")
    a = document.getElementsByClassName("room-code header-item-container-sizing animated fadeIn anim-300-duration")[0].innerHTML.split(">")
    code = a[1].replace("</span", "") + a[2]
    Array.from(document.getElementsByTagName("p")).forEach(function(element){
        element.style.color = "white";
    })
    var jqxhr = $.getJSON("https://api.quizit.online/quizizz/answers?pin=" + code, function() {
        while(true){
            var q = document.getElementsByClassName("textContainer")[0].innerHTML.split(">")[2].replace("</p", "")
            if(lastq != q){
                lastq = q
                findQuestion(q, jqxhr["responseJSON"])
            }
        }
    })
}

function findQuestion(a, json){
    console.log(json)
    Array.from(json['data']['answers']).forEach(function(element){
        if(element['question']['text'].split(">")[1].replace("</p", "") == a){
            var ans = element['answers']
            Array.from(document.getElementsByTagName("p")).forEach(function(ement){
                Array.from(ans).forEach(function(e){
                    if(e['text'].split(">")[1].replace("</p", "") == ement.innerHTML){
                        ement.style.color = "#000001"
                    }
                })
            })
        }
    })
}

alert("Hackzizz się wczytuje, poczekaj ok. 5-7 sekund")
setTimeout(a, 6000)