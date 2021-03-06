
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {
      functionToRunWhenThingsAreDone(data)
    } else {
      functionToRunWhenThingsAreDone(undefined)
    }
  });
};

const printOutCatBreed = breed => {
  console.log(breed) 
};


module.exports = breedDetailsFromFile