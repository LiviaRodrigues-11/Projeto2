const botoes = document.querySelectorAll ("button")

 botoes.forEach(function (botao)){
      let curtiu = false
      botao.addEventListener ("click", botaoClicado)
      function botaoClicado (){
          console.log ("fui clicado")
          let texto = botao.querySeletor ("span")
          if (curtiu === false){
            texto.texContent ++
            curtiu = true
          } else {
               texto.texContent --
            curtiu = false
          }
 }