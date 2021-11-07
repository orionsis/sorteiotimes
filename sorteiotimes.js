var plantel = document.getElementById("divSorteio");
var valorSorteio = document.getElementById("divSorteio").innerHTML;
var selecionados = [];
console.log(valorSorteio);

function retiraEspace(x) {
     x.replace(/^\s+|\s+$/gm,'');
     console.log(x);
     return x
  }

  function valida(vInfo) {
    console.log(vInfo);
    return retiraEspace(vInfo);
  }



function sorteio() {
var cxEditor = document.getElementById("editor").value;
    
    if (cxEditor.length === 0 || !cxEditor.trim()) {
        alert("Digite os nomes para realizar o sorteio");
    }
    else
    { 

        if (selecionados.length == []) {
            var corte, equipe, jogadores, lista, nJogadoresEquipe, times; 
            nJogadoresEquipe = document.getElementById("nJogador").value;
            jogadores = document.getElementById("editor").value;
            lista = $('#editor').val().split('\n');
            const sorteio = lista.sort(() => Math.random() - 0.5);

            selecionados = sorteio;
            times = [];
            equipe = 1;
            corte = parseInt(nJogadoresEquipe);
            plantel.innerHTML = "Times"

            for (var i = 0; i < selecionados.length; i = i + corte) {
            
                dados = selecionados.slice(i, i + corte);
                var item = document.createElement('ol');
                item.appendChild(document.createTextNode(dados));
                plantel.appendChild(item);

            }

        }
        else
        {
            var escolha = confirm("Sorteio já realizado, gostaria de sortear novamente");
            if (escolha == true) {
                selecionados = [];
                sorteio();

            }
        }
            
    } 

}




