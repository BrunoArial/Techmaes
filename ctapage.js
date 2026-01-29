  // Script Simples para o efeito de "Enviando" apenas nesta página
        document.getElementById('form-cadastro').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Criando conta...';
            btn.style.opacity = '0.7';
            btn.disabled = true;

            setTimeout(() => {
                alert('Cadastro realizado com sucesso! (Simulação)');
                this.reset();
                btn.innerText = originalText;
                btn.style.opacity = '1';
                btn.disabled = false;
                window.location.href = 'index.html'; // Opcional: Volta para a home após cadastro
            }, 1500);
        });

        