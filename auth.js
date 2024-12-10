document.addEventListener("DOMContentLoaded", () => {

    // Após login
    netlifyIdentity.on("login", (user) => {
        console.log("Usuário logado:", user);
        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";
        protectedContent.style.display = "block"; // Exibe o conteúdo
    });

    // Após logout
    netlifyIdentity.on("logout", () => {
        console.log("Usuário deslogado.");
        loginBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
        protectedContent.style.display = "none"; // Esconde o conteúdo
    });

    // Verificar estado de login na inicialização
    const currentUser = netlifyIdentity.currentUser();
    if (currentUser) {
        console.log("Usuário já logado:", currentUser);
        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";
        protectedContent.style.display = "block";
    } else {
        loginBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
        protectedContent.style.display = "none";
    }
});
