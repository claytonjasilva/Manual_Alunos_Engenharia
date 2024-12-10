document.addEventListener("DOMContentLoaded", () => {
    // Verifica se o usuário está logado ao inicializar o Netlify Identity
    netlifyIdentity.on("init", (user) => {
        if (!user) {
            // Redireciona para login.html se não estiver logado
            window.location.href = "login.html";
        }
    });

    // Após login
    netlifyIdentity.on("login", (user) => {
        console.log("Usuário logado:", user);
        // Redireciona para index.html após login bem-sucedido
        window.location.href = "index.html";
    });

    // Após logout
    netlifyIdentity.on("logout", () => {
        console.log("Usuário deslogado.");
        // Redireciona para login.html após logout
        window.location.href = "login.html";
    });

    // Inicia o Netlify Identity
    netlifyIdentity.init();
});
