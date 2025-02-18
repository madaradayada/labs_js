let distance = parseInt(prompt("Введіть відстань:"));

if (distance < 10) {
  console.log("Близько");
} else if (distance >= 10 && distance <= 30) {
  console.log("середня відстань");
} else {
  console.log("велика відстань");
}
