function confirmarExclusao() {
    const confirmacao = confirm("Tem certeza que deseja excluir?");
    if (confirmacao) {
        alert("Funcionário excluído com sucesso!");
        // Aqui você pode adicionar a lógica para excluir o funcionário
    } else {
        alert("Exclusão cancelada.");
    }
}


function confirmarSalvar() {
    const confirmacao = confirm("Deseja salvar as alterações?");
    if (confirmacao) {
        alert("Alterações salvas com sucesso!");
    } else {
        alert("Operação cancelada.");
    }
}


function confirmarCancelar() {
    const confirmacao = confirm("Deseja cancelar? As alterações não serão salvas.");
    if (confirmacao) {
        alert("Operação cancelada.");
    } else {
        alert("Continua na página.");
    }
}
