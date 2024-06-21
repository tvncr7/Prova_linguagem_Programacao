
console.log('teste_0');

window.onload = tratar_eventos;
console.log('teste_1');



function tratar_eventos() {

    // Mostrar formulário de Cadastro de livro. 

    document.getElementById("mostrar-form-livro").onclick = function () {
        this.style.display = 'block';
        document.getElementById("formulario-cadastro-livro").style.display = 'block';
        console.log('teste_2');
        return false;
    }

    // Mostrar formulário de Cadastro de Aluno. 

    document.getElementById("mostrar-form-aluno").onclick = function () {
        this.style.display = 'block';
        document.getElementById("formulario-cadastro-aluno").style.display = 'block';
        console.log('teste_2');
        return false;
    }

    // Mostrar formulário de Cadastro de emprestimo. 

    document.getElementById("mostrar-form-emprestimo").onclick = function () {
        this.style.display = 'block';
        document.getElementById("formulario-cadastro-emprestimo").style.display = 'block';
        console.log('teste_2');
        return false;
    }

    // Botão de "esconder" (cancelar) o cadastro de livro.

    document.getElementById("esconde-form-livro").onclick = function () {
        console.log('teste_31');
        document.getElementById("formulario-cadastro-livro").style.display = 'none';
        document.getElementsById('mostrar-form-livro').style.display = 'block';
    }

    // Botão de "esconder" (cancelar) o cadastro de alunos.

    document.getElementById("esconde-form-aluno").onclick = function () {
        console.log('teste_32');
        document.getElementById("formulario-cadastro-aluno").style.display = 'none';
        document.getElementsById('mostrar-form-aluno').style.display = 'block';
    }

    // Botão de "esconder" (cancelar) o cadastro de emprestimo.

    document.getElementById("esconde-form-emprestimo").onclick = function () {
        console.log('teste_34');
        document.getElementById("formulario-cadastro-emprestimo").style.display = 'none';
        document.getElementsById('mostrar-form-emprestimo').style.display = 'block';
    }

    // Botão de adicionar livro.

    document.getElementById("form-contato").onclick = function () {
        document.getElementById("formulario-cadastro-livro").style.display = 'none';
        document.getElementById("mostrar-form-livro").style.display = 'block';

        ativar_botoes_exclusao();

        return false;
    }

    // Botão de adicionar aluno.

    document.getElementById("form-contato").onclick = function () {
        document.getElementById("formulario-cadastro-aluno").style.display = 'none';
        document.getElementById("mostrar-form-aluno").style.display = 'block';

        ativar_botoes_exclusao();

        return false;
    }

    // Botão de adicionar emprestimo.

    document.getElementById("form-contato").onclick = function () {
        document.getElementById("formulario-cadastro-emprestimo").style.display = 'none';
        document.getElementById("mostrar-form-emprestimo").style.display = 'block';

        ativar_botoes_exclusao();

        return false;
    }


}



var select = document.getElementById("mySelect");
var options = select.options;

for (var i = 0; i < options.length; i++) {
  if (options[i].selected) {
    console.log(options[i].value);
  }
}

function mover(fonte, destino) {
    var selecionados = fonte.querySelectorAll("option:checked");
    for ( var i = 0 ; i < selecionados.length ; i++ ) {
        fonte.removeChild(selecionados[i]);
        destino.appendChild(selecionados[i]);
    }
    if (selecionados >= 3) {
        window.alert("Não é possível emprestar mais de 3 livros por vez, por favor selecione novamente.")
      }
  }
  
  document.querySelector("button.dir").onclick = function() {
      mover(document.querySelector("select.esq"),
            document.querySelector("select.dir"));
  };
  
  document.querySelector("button.esq").onclick = function() {
      mover(document.querySelector("select.dir"),
            document.querySelector("select.esq"));
  };


 
  