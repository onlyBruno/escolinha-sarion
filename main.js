const form = document.getElementById('form-register') //Criando Variavel do formulario
const aluno = [] //array para armazenar os nomes de alunos informados pelo usuário

let linhas = '' //adicionar outras linhas na tabela, para nao substituir

form.addEventListener('submit', function(e) { //criando o evento SUBMIT
    e.preventDefault() //remover comportamento de atualizar pagina

    //Chamar as funcoes
    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() { //adicionar os campos digitados pelo usuario
    const inputNomeAluno = document.getElementById('nome_aluno')
    const inputNomeResponsavel = document.getElementById('nome_responsavel')
    const inputTelefone = document.getElementById('telefone')

    if (aluno.includes(inputNomeAluno.value)) {
        alert(`O aluno ${inputNomeAluno.value} já está cadastrado.`)
    } else {

        aluno.push(inputNomeAluno.value)


        //Adicionar informacoes no corpo da tabela
        let linha = '<tr>'
        linha += `<td>${inputNomeAluno.value}</td>`
        linha += `<td>${inputNomeResponsavel.value}</td>`
        linha += `<td>${inputTelefone.value}</td>`
        linha += '</tr>'

        linhas += linha
    }
    //limpar conteudo depois de adicionado
    inputNomeAluno.value = ''
    inputNomeResponsavel.value = ''
    inputTelefone.value = ''
}

function atualizaTabela() { //atualizar a tabela
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}