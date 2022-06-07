let array = ["\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  "]

let delay = 0
for (let item of array) {
  setTimeout(() => {
    process.stdout.write(item); 
  }, delay);
  delay += 200
}