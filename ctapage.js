document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button');
    const nomeInput = document.getElementById('nome').value; // Pega o nome digitado
    const originalText = btn.innerText;

    btn.innerText = 'Criando conta...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    setTimeout(() => {
        // --- SALVA O NOME NO NAVEGADOR ---
        localStorage.setItem('techmaes_user', nomeInput);

        alert('Cadastro realizado com sucesso! (Simulação)');
        this.reset();
        
        btn.innerText = originalText;
        btn.style.opacity = '1';
        btn.disabled = false;
        
        // Redireciona para a home
        window.location.href = 'index.html'; 
    }, 1500);
});