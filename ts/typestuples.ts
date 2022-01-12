type auto = [string,number];

const prius : auto = ['toyota', 2015]
const civic : auto = ['honda', 2016]

console.log('el prius es marca', prius[0], 'y modelo', prius[1])
console.log('el civic es marca', civic[0], 'y modelo', civic[1])


type auto2 = [string,number];

const prius2 : auto = ['toyota', 2015]
const [marca,modelo]=prius;

console.log("la marca del prius es:",marca);
console.log("el modelo del prius es:",modelo);
