



let inputTime = process.argv.splice(2)

let alarmbeep = (input) => {

  if(!input) {
    return;
  } 

  for (let second of input) {
    let beepTime = parseInt(second)
    if (beepTime < 0 || isNaN(beepTime)) {
      continue;
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, beepTime * 1000)
    }
  }
  return;
}

alarmbeep(inputTime);


