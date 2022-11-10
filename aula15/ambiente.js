let num = [ 5,8,9,2,3]

num.push(3)
num.sort()
num.push(10)
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso veotor tem ${num.length} elementos`)
console.log (`O primeiro valor é ${num[0]}`)

let pos = num.indexOf(5)
if (pos == -1) { 
    console.log('O valor não foi encontrado')
  }  else {
    console.log(`O valor esta na posição ${pos}`)
}

