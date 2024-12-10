document.addEventListener("DOMContentLoaded", () => {
    // Inicializa o Netlify Identity
    netlifyIdentity.init();

    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const protectedContent = document.getElementById("protected-content");

    // Abrir modal de login
    loginBtn.addEventListener("click", () => {
        netlifyIdentity.open();
    });

    // Após login
    netlifyIdentity.on("login", (user) => {
        console.log("Usuário logado:", user);
        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";
        protectedContent.style.display = "block"; // Mostra o conteúdo protegido
    });

    // Botão de logout
    logoutBtn.addEventListener("click", () => {
        netlifyIdentity.logout();
    });

    // Após logout
    netlifyIdentity.on("logout", () => {
        console.log("Usuário deslogado.");
        loginBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
        protectedContent.style.display = "none"; // Esconde o conteúdo protegido
    });

    // Verifica estado de login na inicialização
    const currentUser = netlifyIdentity.currentUser();
    if (currentUser) {
        console.log("Usuário já logado:", currentUser);
        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";
        protectedContent.style.display = "block";
    }
});
