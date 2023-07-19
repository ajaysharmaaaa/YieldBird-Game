var bgSVG = `
            <svg id="bg-svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
                height="640" viewBox="0 0 360 640.00001" width="360" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/">
                <rect id="rect5189-8" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    height="640" width="360" y="0" x="0" fill="#d7eef4" />
                <g fill="#333333">
                    <path id="path10590-3-7-0" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m153.94 443.28c-1.6123 0-2.9194 1.2047-2.9194 2.6916v10.868c0 5.5017-2.7017 5.5166-4.9971 5.5166v-11.866c0-2.5165-1.8644-4.5558-4.1642-4.5558-2.2999 0-4.1643 2.0393-4.1643 4.5558v20.342c-2.2954 0-4.9971-0.015-4.9971-5.5165v-9.4802c0-1.4869-1.3071-2.6916-2.9193-2.6916-1.6123 0-2.9193 1.2047-2.9193 2.6916v12.354c0 5.6939 4.6336 9.0964 10.836 9.0964v15.213h8.3285v-23.689c6.2021 0 10.836-3.4012 10.836-9.0952v-13.743c0-1.4869-1.3071-2.6916-2.9193-2.6916z" />
                    <path id="path10590-3-5-8-4" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m225.91 447.5c2.2227 0 4.0245 1.9708 4.0245 4.4028v14.293c2.2182 0 4.8292-0.0145 4.8292-5.3313v-5.9423c0-1.4369 1.2632-2.6012 2.8213-2.6012s2.8213 1.1642 2.8213 2.6012v8.7195c0 5.5027-4.4781 8.7908-10.472 8.7908v20.068h-8.0489v-40.597c0-2.432 1.8018-4.4028 4.0244-4.4028z" />
                    <path id="path10590-3-4-6-4" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m46.842 445.94c-2.2999 0-4.1643 2.0403-4.1643 4.5568v20.342c-2.2954 0-4.9971-0.0161-4.9971-5.5176v-7.2581c0-1.4869-1.307-2.6927-2.9193-2.6927s-2.9193 1.2058-2.9193 2.6927v10.133c0 5.6939 4.6337 9.0952 10.836 9.0952v15.214h8.3285v-17.648c6.2021 0 10.836-3.4013 10.836-9.0952v-5.9699c0-1.4869-1.307-2.6916-2.9193-2.6916s-2.9193 1.2047-2.9193 2.6916v3.095c0 5.5016-2.7017 5.5165-4.9971 5.5165v-17.906c0-2.5165-1.8644-4.5568-4.1642-4.5568z" />
                    <path id="path10590-3-4-6-4-6" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m320.43 445.94c-2.2998 0-4.1642 2.0403-4.1642 4.5568v20.342c-2.2954 0-4.9972-0.0161-4.9972-5.5176v-7.2581c0-1.4869-1.307-2.6927-2.9193-2.6927-1.6122 0-2.9193 1.2058-2.9193 2.6927v10.133c0 5.6939 4.6337 9.0952 10.836 9.0952v15.214h8.3285v-17.648c6.2021 0 10.836-3.4013 10.836-9.0952v-5.9699c0-1.4869-1.307-2.6916-2.9193-2.6916s-2.9193 1.2047-2.9193 2.6916v3.095c0 5.5016-2.7018 5.5165-4.9971 5.5165v-17.906c0-2.5165-1.8644-4.5568-4.1643-4.5568z" />
                </g>
            </svg>
        `;

var fgSVG = `
            <svg id="fg-svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
                height="150" viewBox="0 0 360 150" width="360" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
                xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/">
                <rect style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    height="147.5" width="360" y="2.5" x="0" fill="#ffb380" />
                <path stroke="#333333" stroke-width="5" fill="none" d="m-0.000001625 2.5h360" />
                <circle id="a" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    cx="-9.75" cy="11" r="2.5" fill="#333333" />
                <use xlink:href="#a" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 9.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 18.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(15 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 24.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 33.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(30 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 39.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 48.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(45 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 54.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 63.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(60 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 69.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 78.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(75 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 84.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 93.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(90 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 99.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 108.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(105 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 114.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 123.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(120 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 129.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 138.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(135 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 144.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 153.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(150 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 159.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 168.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(165 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 174.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 183.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(180 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 189.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 198.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(195 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 204.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 213.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(210 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 219.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 228.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(225 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 234.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 243.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(240 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 249.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 258.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(255 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 264.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 273.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(270 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 279.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 288.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(285 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 294.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 303.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(300 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 309.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 318.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(315 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 324.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 333.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(330 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 339.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 348.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(345 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 354.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 363.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(360 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 369.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 378.05 17.2)" height="100%" width="100%" y="0" x="0" />
            </svg>
        `;
var bg = new Image();
// bg.src = "data:image/svg+xml," + encodeURIComponent(bgSVG);
bg.src = "img/back.png";

var fg = new Image();
fg.src = "data:image/svg+xml," + encodeURIComponent(fgSVG);

var dinoGlide = new Image();
dinoGlide.src = "img/bird.png";

var dinoFlap = new Image();
dinoFlap.src = "img/bird.png";

var topBone = new Image();
topBone.src = "img/a.png";

var botBone = new Image();
botBone.src = "img/b.png";

var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var hitboxWidth = 60;
var hitboxHeight = 15;

var spriteOffset_X = -10;
var spriteOffset_Y = -25;

var fgPos_X = 0;

var dinoPos_X = 100;
var dinoPos_Y = 250;
var dinoAngle = 0;
var dinoState = dinoGlide;

var minBoneHeight = -330;
var maxBoneHeight = -160;

var scrollSpeed = -3;
var gravity = 0.3;
var lift = -8;
var velocity = 0;

var start = false;
var gameOver = false;
var score = 0;

var bonePtr = 0;
var boneStart = 400;
var flyGap = 180;
var boneGap = 280;
var bones = [
  { x: boneStart, y: getRandomHeight(minBoneHeight, maxBoneHeight) },
  { x: boneStart + boneGap, y: getRandomHeight(minBoneHeight, maxBoneHeight) },
  {
    x: boneStart + 2 * boneGap,
    y: getRandomHeight(minBoneHeight, maxBoneHeight)
  }
];

function getRandomHeight(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function playerInput() {
  if (!start) {
    start = true;
    velocity = lift;
    dinoAngle = -20;
    document.getElementById("ctrl-ctn").style.opacity = 0;
  } else {
    if (!gameOver) {
      velocity = lift;
      dinoAngle = -20;
    }
  }
}

function checkCollision() {
  // set upper bound
  if (dinoPos_Y <= -hitboxHeight) {
    velocity = 0;
  }

  // dino hit the ground
  if (dinoPos_Y + hitboxHeight >= canvas.height - fg.height) {
    velocity = 0;
    dinoPos_Y = canvas.height - fg.height - hitboxHeight;
    setGameOver();
  }

  // dino hit bone
  if (
    dinoPos_X + hitboxWidth >= bones[bonePtr].x &&
    dinoPos_X < bones[bonePtr].x + topBone.width &&
    (dinoPos_Y <= bones[bonePtr].y + topBone.height ||
      dinoPos_Y + hitboxHeight >= bones[bonePtr].y + topBone.height + flyGap)
  ) {
    setGameOver();
  }
}

function replay() {
  start = false;
  gameOver = false;

  score = 0;
  velocity = 0;

  dinoPos_X = 100;
  dinoPos_Y = 250;
  dinoAngle = 0;
  dinoState = dinoGlide;

  bonePtr = 0;
  bones = [
    { x: boneStart, y: getRandomHeight(minBoneHeight, maxBoneHeight) },
    {
      x: boneStart + boneGap,
      y: getRandomHeight(minBoneHeight, maxBoneHeight)
    },
    {
      x: boneStart + 2 * boneGap,
      y: getRandomHeight(minBoneHeight, maxBoneHeight)
    }
  ];

  document.getElementById("ctrl-ctn").style.opacity = 1;

  document.getElementById("gameover-screen").style.visibility = "hidden";
  document.getElementById("gameover-screen").style.opacity = 0;
}

function setGameOver() {
  gameOver = true;
  document.getElementById("gameover-screen").style.visibility = "visible";
  document.getElementById("gameover-screen").style.opacity = 1;
}

function update() {
  // foreground scroll
  if (!gameOver) {
    fgPos_X += scrollSpeed;

    if (fgPos_X <= -canvas.width) {
      fgPos_X = 0;
    }
  }

  // game started
  if (start) {
    velocity += gravity;
    dinoPos_Y += velocity;

    // if velocity is negative show dino flap sprite else show dino falling
    if (velocity < 0) {
      dinoState = dinoFlap;
    } else {
      dinoState = dinoGlide;
      dinoAngle = Math.min(dinoAngle + 2, 90);
    }

    checkCollision();

    if (!gameOver) {
      for (var i = 0; i < bones.length; i++) {
        // scroll bones across screen
        bones[i].x += scrollSpeed;

        // reassign bone object XY after it leaves screen
        if (bones[i].x <= -topBone.width) {
          if (i == 0) {
            bones[0].x = bones[bones.length - 1].x + boneGap;
          } else {
            bones[i].x = bones[i - 1].x + boneGap;
          }

          bones[i].y = getRandomHeight(minBoneHeight, maxBoneHeight);
        }
      }

      // if dino passed through the bone increase score
      if (dinoPos_X >= bones[bonePtr].x + topBone.width) {
        score++;

        if (bonePtr == 2) {
          bonePtr = 0;
        } else {
          bonePtr++;
        }
      }
    }
  }
  render();
}

function render() {
  document.getElementById("scoreboard").innerHTML = score;

  ctx.drawImage(bg, 0, 0);

  for (var i = 0; i < bones.length; i++) {
    ctx.drawImage(topBone, bones[i].x, bones[i].y);
    ctx.drawImage(botBone, bones[i].x, bones[i].y + topBone.height + flyGap);
  }

  ctx.save();
  ctx.translate(
    dinoPos_X + hitboxWidth / 2 + spriteOffset_X,
    dinoPos_Y + hitboxHeight / 2
  );
  ctx.rotate(dinoAngle * Math.PI / 180);
  ctx.drawImage(
    dinoState,
    -hitboxWidth / 2,
    -hitboxHeight / 2 + spriteOffset_Y
  );
  ctx.restore();

  // Show hitbox
  // ctx.fillStyle = "#ff00ff";
  // ctx.fillRect(dinoPos_X, dinoPos_Y, hitboxWidth, hitboxHeight);

  ctx.drawImage(fg, fgPos_X, canvas.height - fg.height);
  ctx.drawImage(fg, fgPos_X + fg.width, canvas.height - fg.height);

  window.requestAnimationFrame(update);
}

document.addEventListener("keydown", function(e) {
  var char = e.which || e.keyCode;
  if (char == 32 || char == 38) {
    e.preventDefault();
    playerInput();
  }
});

document.addEventListener("touchstart", function() {
  playerInput();
});

document.getElementById("replay").addEventListener("click", function() {
  replay();
});

update();