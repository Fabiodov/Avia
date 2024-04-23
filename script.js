// Configurar o Firebase (substitua pelas suas próprias configurações)
const firebaseConfig = {
    apiKey: "AIzaSyBf5ro7jPQIoFOjvoLsxebAQi9kmR3TVY0",
    authDomain: "mingosbot.firebaseapp.com",
    projectId: "mingosbot",
    storageBucket: "mingosbot-default-rtdb.firebaseio.com",
    messagingSenderId: "403370334139",
    appId: "1:403370334139:web:eef5d2bd9ffc704d33169e",
    measurementId: "G-BZWYHYPDCX"
  };
  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);
  
  const userContent = document.getElementById("userContent");
  const loggedInUsername = document.getElementById("loggedInUsername");
  const logoutBtn = document.getElementById("logoutBtn");
  
  // Modifique o evento de login para usar o Firebase Realtime Database
  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Faça a autenticação Firebase com e-mail e senha
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // Usuário autenticado com sucesso
        const user = userCredential.user;
        loggedInUsername.textContent = user.email; // Use o e-mail como nome de usuário
        showUserScreen();
      })
      .catch((error) => {
        // Tratamento de erro de autenticação
        Swal.fire("Credenciais inválidas. Tente novamente.", "", "error");
      });
  });
  
  notificationBtn.addEventListener("click", () => {
    Swal.fire({
      title: "Bem-vindo a Revolution Bot! Antes de continuar, leia os termos e condições cuidadosamente: 1. Este bot é apenas para uso no aviator. O desenvolvedor e o Revendedor do bot não é responsável por qualquer uso indevido ou consequências resultantes do uso deste bot. 3.Ao usar este bot, você concorda em cumprir todas as leis e regulamentos aplicáveis. 4.Para o uso desse bot, exigi-se uma boa rede, caso sua rede não for favorável terá problemas com o bot. " ,
      icon: "info",
      confirmButtonText: "Fechar"
    });
  });
  
  logoutBtn.addEventListener("click", () => {
    showLoginScreen();
  });
  
  function showUserScreen() {
    userContent.style.display = "block";
    document.querySelector(".login-container").style.display = "none";
  }
  
  function showLoginScreen() {
    userContent.style.display = "none";
    document.querySelector(".login-container").style.display = "block";
  }
  
  
  // ... (mantenha o código anterior)
  
  const androidBtn = document.getElementById("androidBtn");
  
  document.querySelectorAll(".square").forEach((square, index) => {
    square.addEventListener("click", () => {
      redirectToNewPage(index + 1);
    });
  });
  
  androidBtn.addEventListener("click", () => {
    window.open("https://chat.openai.com/", "_blank");
  });
  
  function redirectToNewPage(pageNumber) {
    switch (pageNumber) {
      case 1:
        // Redirecionar para a página 1
        window.location.href = "page1.html";
        break;
      case 2:
        // Redirecionar para a página 2
        window.location.href = "page2.html";
        break;
      case 3:
        // Redirecionar para a página 3
        window.location.href = "page3.html";
        break;
      case 4:
        // Redirecionar para a página 4
        window.location.href = "page4.html";
        break;
      case 5:
        // Redirecionar para a página 4
        window.location.href = "page5.html";
        break;
      case 6:
          // Redirecionar para a página 4
          window.location.href = "page6.html";
          break;
      case 7:
          // Redirecionar para a página 4
          window.location.href = "page7.html";
          break;

      default:
        break;
    }
  }
  
  
  