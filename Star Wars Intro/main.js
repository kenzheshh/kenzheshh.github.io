
document.getElementById('start-intro-button').addEventListener('click', function() {
  document.getElementById('star-wars-intro').style.display = 'block';
  this.style.display = 'none';
  setTimeout(function() {
    var audioElement = document.getElementById('myAudio');
    audioElement.play();
  }, 2000);

  setTimeout(function() {
    document.getElementById("skip-container").style.display = "block";
  }, 2000);
});

function playHoverSound() {
  var hoverAudio = document.getElementById('hoverAudio');
  hoverAudio.volume = 0.5;
  hoverAudio.currentTime = 0;
  hoverAudio.play();
}

document.getElementById('skipIntroButton').addEventListener('click', function() {
    document.getElementById('star-wars-intro').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('myAudio').pause();
    this.style.display = "none"
  });


  window.onload = function() {
    var skipIntroButton = document.getElementById('skipIntroButton');
    skipIntroButton.addEventListener('mousedown', playHoverSound);
  }

  const MIN_RGB_VAL = 50;

  function createStar(x, y) {
    var star = document.createElement("div");
    star.className = 'stars';

    star.style.left = x + 'px';
    star.style.top = y + 'px';
    var rgb = Math.floor(Math.random() * (256 - MIN_RGB_VAL)) + MIN_RGB_VAL;

    var size = Math.floor(Math.random() * 3) + 1 + 'px';
    star.style.width = size;
    star.style.height = size;

    var rgbValue = 'rgb(' + rgb + ',' + rgb + ',' + rgb + ')';

    star.style['background'] = 'radial-gradient(' + rgbValue + ',#090909)';
    

    var shineDelay = Math.random() * 2 + 's';
    star.style.animationDelay = shineDelay + ', ' + shineDelay;

    return star;
  }

  
  // function generateStars() {
  //   var starContainer = document.getElementById('bodystars');
  //   for (var i = 0; i < 100; i++) {
  //     var x = Math.floor(Math.random() * window.innerWidth);
  //     var y = Math.floor(Math.random() * window.innerHeight);
  //     var star = createStar(x, y);
  //     starContainer.appendChild(star);
  //   }
  // }



  function addStarsToBackground(numStars) {
    const background = document.body;
    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const star = createStar(x, y);
      background.appendChild(star);
    }
  }


 
  



  addStarsToBackground(400);
  




  // function showSkipButton() {
  //   setTimeout(function () {
  //     document.getElementById("skipIntroButton").style.display = "block";
  //   }, 9000); // Time in milliseconds (5000 ms = 5 seconds)
  // }

  // document.getElementById('skipIntroButton').addEventListener('click', function() {
  //   document.getElementById('star-wars-intro').style.display = 'none';
  //   document.getElementById('main-content').style.display = 'block';
  //   document.getElementById('myAudio').pause();
  // });


 


 

  document.getElementById('start-intro-button').addEventListener('click', function() {
    document.getElementById('star-wars-intro').style.display = 'block';
    this.style.display = 'none';
  });
  
  // document.getElementById("skipIntroButton").addEventListener("click", function () {
  //   document.querySelector(".intro-text").classList.remove("start");
  //   document.querySelector(".main-logo").classList.remove("start");
  //   document.querySelector(".intro-text").style.display = "none";
  //   document.querySelector(".main-logo").style.display = "none";
  //   this.style.display = "none";
  // });
  
  // const MIN_RGB_VAL = 50;
  
  // function createStar(x, y) {
  //   var star = document.createElement("div");
  //   star.className = "stars";
  //   star.style.left = x + "px";
  //   star.style.top = y + "px";
  //   return star;
  // }
  
  // function generateStars() {
  //   var starContainer = document.getElementById('star-container');
  //   for (var i = 0; i < 100; i++) {
  //     var x = Math.floor(Math.random() * window.innerWidth);
  //     var y = Math.floor(Math.random() * window.innerHeight);
  //     var star = createStar(x, y);
  //     starContainer.appendChild(star);
  //   }
  // }
  
  // Wait for the intro-text animation to complete, then generate stars and display the star container
  // setTimeout(function() {
  //   generateStars();
  //   document.getElementById('star-container').style.display = 'block';
  //   document.getElementById('main-content').style.display = 'block';
  //   document.getElementById('skip-button').style.display = 'block';
  // }, 2000);
  
  