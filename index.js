const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "pop()",
        "concat()"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'addEventListener' é usado para fazer em JavaScript?",
      respostas: [
        "Remover um evento de um elemento",
        "Adicionar um evento a um elemento",
        "Executar uma função assincronamente"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!="
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "parseFloat()",
        "toFixed()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
      respostas: [
        "para (i = 0; i < 5; i++)",
        "for (i = 0; i < 5)",
        "for (i = 0; i < 5; i++)"
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'querySelector' faz em JavaScript?",
      respostas: [
        "Seleciona o primeiro elemento que corresponde a um seletor CSS",
        "Altera o valor de um elemento CSS",
        "Remove um elemento do DOM"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'map' em um array em JavaScript?",
      respostas: [
        "Filtrar elementos com base em uma condição",
        "Executar uma função em cada elemento do array e retornar um novo array com os resultados",
        "Ordenar os elementos em ordem alfabética"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de negação em JavaScript?",
      respostas: [
        "!",
        "&",
        "~"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "splice()"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }  