console.log("1° Exercício\n")

var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
 };

 function descricaoEndereco(end) {
   return `O Usuário mora em ${end.cidade} / ${end.uf}, no bairro ${end.bairro}, na rua "${end.rua}" com n° ${end.rua}`
 }

console.log(descricaoEndereco(endereco))

console.log("\n 2° Exercício \n")

function pares(x, y) {
  for (let i = x; i <= y; i++) {
    i % 2 === 0 && console.log(i);    
  }
}

pares(10, 100)

console.log("\n 3° Exercício \n");



let result = false

function temHabilidade(skills, search) {
  if (skills.indexOf(search) === -1) {
    result = false
  } else {
    result = true
  }
  return console.log(`${result}`)
};

var skills = ["Javascript", "ReactJS", "React Native"]

temHabilidade(skills, "Javascript")

console.log("Exercício 4\n")

function experiencia(x) {
  if ( x <= 1) {
    console.log('Iniciante')
  } else if (x <= 3){
    console.log('Intermediario')
  } else if (x < 7) {
    console.log('Avançado')
  } else {
    console.log('Jedi Master')
  }
}

experiencia(7)

console.log('\n Exercício 5 \n')

var usuarios = [
  {
  nome: "Diego",
  habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
  nome: "Gabriel",
  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
 ];

 function skill(user) {
   for (let i of user) {
     console.log(
       `O ${i.nome} possui as habilidades: ${i.habilidades.join(", ")}`
     )
   }
 }

 skill(usuarios)