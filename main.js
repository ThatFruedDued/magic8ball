(function(){
  let as = "It is certain.:It is decidedly so.:Without a doubt.:Yes - definitely.:You may rely on it.:As I see it, yes.:Most likely.:Outlook good.:Yes.:Signs point to yes.::Reply hazy, try again.:Ask again later.:Better not tell you now.:Cannot predict now.:Concentrate and ask again.::Don't count on it.:My reply is no.:My sources say no.:Outlook not so good.:Very doubtful.";
  let cd = false;
  let ad = false;
  document.addEventListener("keydown", function(e){
    if(e.keyCode === 16){
      cd = true;
    } else if(e.keyCode === 18){
      ad = true;
    }
  });
  document.addEventListener("keyup", function(e){
    if(e.keyCode === 16){
      cd = false;
    } else if(e.keyCode === 18){
      ad = false;
    }
  });
  document.addEventListener("contextmenu", e => e.preventDefault());
  function qs(s){
    return document.querySelectorAll(s);
  }
  qs("#p")[0].addEventListener("click", function(){
    if(!cd && !ad){
      qs("#r")[0].textContent = as.split("::").join(":").split(":")[Math.floor(Math.random() * 20)];
    } else if(cd && !ad){
      qs("#r")[0].textContent = as.split("::")[0].split(":")[Math.floor(Math.random() * 10)];
    } else if(cd && ad){
      qs("#r")[0].textContent = as.split("::")[1].split(":")[Math.floor(Math.random() * 5)];
    } else if(!cd && ad){
      qs("#r")[0].textContent = as.split("::")[2].split(":")[Math.floor(Math.random() * 5)];
    }
  });
}());
