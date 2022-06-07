process.stdin.setRawMode(true)
process.stdin.setEncoding('utf8')

process.stdin.on('data', (key) => {
  if (key === "b") {
    process.stdout.write("\x07" + "BEEP! \n")
  } else if (key === "\u0003") {
    process.exit()
  } else {
    console.log(`setting timer for ${key} seconds...`)
    setTimeout(() => {
      process.stdout.write("\x07" + "BEEP! \n");
    }, key * 1000)
  }
})