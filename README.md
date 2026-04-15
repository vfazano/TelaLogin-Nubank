# 💻 Tela de Login - Estilo Nubank

Este projeto é uma interface de **tela de login moderna**, inspirada no design do Nubank, desenvolvida utilizando **HTML, CSS e JavaScript puro**.

---
<p align="center"> <img src="fotoProjeto.png" alt="foto"> </p>

---

## 📌 Funcionalidades

* 📧 Campo de email
* 🔒 Campo de senha
* ✅ Validação simples de formulário
* 🎥 Vídeo de fundo animado
* ✨ Animações suaves (hover e efeitos)
* 📱 Mockup com celular e cartão em camadas
* 💡 Interface responsiva e moderna

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)

---

## 📂 Estrutura do Projeto

```
📁 projeto
 ┣ 📁 asset
 ┃ ┗ 📁 img
 ┣ 📁 img
 ┣ 📄 index.html
 ┣ 📄 style.css
 ┗ 📄 script.js
```

---

## ⚙️ Como funciona

### ✔️ Validação do formulário

O JavaScript impede o envio do formulário caso os campos estejam vazios:

```javascript
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    if (email === "" || senha === "") {
        alert("Erro na validação")
    } else {
        alert("Formulario Enviado")
    }
})
```

---

### 🎨 Estilização

* Uso de **gradientes** e **glow effects**
* `box-shadow` e `drop-shadow` para profundidade
* Animações com `@keyframes`
* Efeitos `hover` suaves

---

### 📱 Mockup interativo

* Celular fica **atrás**
* Cartão fica **na frente**
* Animação ao passar o mouse

---

## 🚀 Como executar

1. Baixe ou clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
```

2. Abra o arquivo:

```bash
index.html
```

3. Execute no navegador

---

## 📷 Preview

Interface com:

* Fundo em vídeo
* Formulário estilizado
* Elementos flutuantes animados

---

## 📌 Melhorias futuras

* Integração com backend
* Sistema real de autenticação
* Responsividade completa para mobile
* Recuperação de senha funcional

---

## 👨‍💻 Autor

Desenvolvido por **Vitor Fazano**



