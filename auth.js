// Inicializar Netlify Identity
netlifyIdentity.init();

// Botões para login/logout
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");

    // Abrir modal de login
    loginBtn?.addEventListener("click", () => {
        netlifyIdentity.open();
    });

    // Ao fazer login
    netlifyIdentity.on("login", (user) => {
        console.log("Usuário logado:", user);
        window.location.reload();
    });

    // Ao fazer logout
    logoutBtn?.addEventListener("click", () => {
        netlifyIdentity.logout();
    });

    netlifyIdentity.on("logout", () => {
        console.log("Usuário deslogado.");
        window.location.reload();
    });
});
