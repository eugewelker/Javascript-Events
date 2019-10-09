//new function
function changeMainHtml()
{
  var main= document.querySelector('#main');
  var sentence1= "hello, thank you for changing me";
  var sentence2= "hello, I am a different sentence";

    if(main.innerHTML==sentence1)
    {
      main.innerHTML=sentence2;
      main.style.padding="50px";
      main.style.color="black";
    }
      else {
        main.innerHTML=sentence1;
        main.style.padding="0px";
        main.style.color="red";
            }
  }

//NOTAS: diferentes triggers ----> onclick ondblckick onmousedown onmousemove onmouseout onmouseover onmouseup onwheel

//HTML5 events: ondrag ondragend ondragenter ondragleave ondragover ondragstart on drop onscroll
