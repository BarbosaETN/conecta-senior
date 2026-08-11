const passwordInput = document.querySelector("#password-input");

const togglePassword = document.querySelector("#toggle-password");

const strengthText = document.querySelector("#strength-text");

const strengthProgress = document.querySelector("#strength-progress");

const passwordFeedback = document.querySelector("#password-feedback");

function analyzePassword(password) {
  let score = 0;

  if (password.length >= 8) {
    score++;
  }

  if (/[a-z]/.test(password)) {
    score++;
  }

  if (/[A-Z]/.test(password)) {
    score++;
  }

  if (/[0-9]/.test(password)) {
    score++;
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    score++;
  }

  return score;
}

function updatePasswordStrength(password) {
  const score = analyzePassword(password);

  strengthProgress.classList.remove(
    "strength-weak",
    "strength-good",
    "strength-strong",
  );

  if (password.length === 0) {
    strengthText.textContent = "Digite uma senha";

    strengthProgress.style.width = "0%";

    passwordFeedback.innerHTML = `
            <i class="fa-solid fa-circle-info"></i>

            <p>
                O verificador mostrará algumas características
                da senha quando você começar a digitar.
            </p>
        `;

    return;
  }

  if (score <= 2) {
    strengthText.textContent = "Fraca";

    strengthProgress.style.width = "35%";

    strengthProgress.classList.add("strength-weak");

    passwordFeedback.innerHTML = `
            <i class="fa-solid fa-triangle-exclamation"></i>

            <p>
                Essa senha pode ser fácil de descobrir.
                Tente usar mais caracteres, números,
                letras maiúsculas e símbolos.
            </p>
        `;
  } else if (score <= 4) {
    strengthText.textContent = "Boa";

    strengthProgress.style.width = "70%";

    strengthProgress.classList.add("strength-good");

    passwordFeedback.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>

            <p>
                A senha possui algumas características
                importantes. Adicionar mais variedade
                pode deixá-la ainda mais forte.
            </p>
        `;
  } else {
    strengthText.textContent = "Forte";

    strengthProgress.style.width = "100%";

    strengthProgress.classList.add("strength-strong");

    passwordFeedback.innerHTML = `
            <i class="fa-solid fa-shield-halved"></i>

            <p>
                Essa senha possui uma boa combinação de
                caracteres e é mais difícil de adivinhar.
            </p>
        `;
  }
}

passwordInput.addEventListener("input", () => {
  updatePasswordStrength(passwordInput.value);
});

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";

  const icon = togglePassword.querySelector("i");

  icon.classList.toggle("fa-eye", !isPassword);

  icon.classList.toggle("fa-eye-slash", isPassword);

  togglePassword.setAttribute(
    "aria-label",
    isPassword ? "Ocultar senha" : "Mostrar senha",
  );
});
