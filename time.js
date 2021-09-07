const clock = document.querySelector(".clock");
const date = document.querySelector(".date");

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function handleTime() {
  const now = new Date();
  const seconds = now.getSeconds().toString().padStart(2,"0");
  const minutes = now.getMinutes().toString().padStart(2,"0");
  const hours = now.getHours().toString().padStart(2,"0");

  const dd = now.getDate().toString().padStart(2,"0");
  const mm = (now.getMonth() + 1).toString().padStart(2,"0");
  const yy = now.getFullYear().toString().substr(-2);
  const day = days[now.getDay()].toString().slice(0, 3);

  date.innerText = `${yy}/${mm}/${dd} ${day}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

handleTime();
setInterval(handleTime, 1000);

