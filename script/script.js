function confirmarCancelar() {
    const confirmacao = confirm("Tem certeza que deseja excluir?");
    if (confirmacao) {
        alert("Funcionário excluído com sucesso!");
        // Aqui você pode adicionar a lógica para excluir o funcionário
    } else {
        alert("Exclusão cancelada.");
    }
}
