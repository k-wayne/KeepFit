$(document).ready(function(){
  $(".clickable").click(function(){
    $("img").show();
  })
})
$(document).ready(function(){
  $(".clickable").click(function(){
    $("#arms-showing").slideToggle();
    $("#arms-hidden").slideToggle();
  });
});
$(document).ready(function(){
  $(".click").click(function(){
    $("img").show();
  });
});
$(document).ready(function(){
  $(".click").click(function(){
    $("#legs-showing").slideToggle();
    $("#legs-hidden").slideToggle();
  });
});
$(document).ready(function(){
  $(".touch").click(function(){
    $("img").show();
  });
});
$(document).ready(function(){
  $(".touch").click(function(){
    $("#abs-showing").slideToggle();
    $("#abs-hidden").slideToggle();
  });
});
$(document).ready(function(){
  $(".touchable").click(function(){
    $("img").show();
  });
});
$(document).ready(function(){
  $(".touchable").click(function(){
    $("#lo-showing").slideToggle();
    $("#lo-hidden").slideToggle();
  });
});
$(document).ready(function(){
  $(".showable").click(function(){
    $("img").show();
  });
});
$(document).ready(function(){
  $(".showable").click(function(){
    $("#up-showing").slideToggle();
    $("#up-hidden").slideToggle();
  });
});
window.onload = function () {
  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;
  buttonStart.onclick = function() {
     clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  }
  function startTimer () {
    tens++;
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9){
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  }
}
