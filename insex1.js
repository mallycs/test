const myFamaly = {
father: 'Sergey',
Mother: 'Anna'
}
myFamaly.brother = 'Sergey'
myFamaly.girl = 'Yulya'

console.log(myFamaly)
delete myFamaly.girl
console.log(myFamaly)
myFamaly['Dog'] = 'Kurt'
console.log(myFamaly)