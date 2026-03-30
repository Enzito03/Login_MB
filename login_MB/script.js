// Aguarda o HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Pega os elementos HTML pelos IDs
    const roleJogador = document.getElementById('role-jogador');
    const roleMestre = document.getElementById('role-mestre');

    // Função para alterar a seleção
    function selectRole(selectedRole, otherRole) {
        selectedRole.classList.add('active');
        otherRole.classList.remove('active');
    }

    // Adiciona o evento de clique nos cards
    roleJogador.addEventListener('click', () => {
        selectRole(roleJogador, roleMestre);
    });

    roleMestre.addEventListener('click', () => {
        selectRole(roleMestre, roleJogador);
    });

    // Bônus: Prevenir o envio do form apenas para demonstração (faculdade)
    const form = document.getElementById('login-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que a página recarregue
        
        // Descobre qual opção está ativa
        const isActiveJogador = roleJogador.classList.contains('active');
        const role = isActiveJogador ? 'Jogador' : 'Mestre';
        
        alert(`Bem-vindo, ${role}! Lógica de login entraria aqui.`);
    });
});