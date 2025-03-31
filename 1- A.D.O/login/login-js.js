document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');
    
    // Usuário e senha para demonstração
    const demoUser = {
        username: 'usuario',
        password: '123456'
    };
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simulação de validação de login
        if (username === demoUser.username && password === demoUser.password) {
            message.textContent = 'Login realizado com sucesso!';
            message.className = 'success';
            
            // Simula redirecionamento (em um caso real, redirecionaria para outra página)
            setTimeout(() => {
                alert('Redirecionando para a página principal...');
            }, 1500);
        } else {
            message.textContent = 'Usuário ou senha incorretos. Tente novamente.';
            message.className = '';
        }
    });
    
    // Efeito visual ao focar nos campos
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-5px)';
            this.parentElement.style.transition = 'transform 0.3s';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
});
