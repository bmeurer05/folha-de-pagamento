import './App.css'

function App() {
  return (
    <main className="pagina-login">
      <LoginTela />
    </main>
  )
}

function LoginTela() {
  function fazerLogin(event) {
    // Conectar à autenticação quando o backend estiver disponível.
    event.preventDefault()
  }

  return (
    <section className="login-tela" aria-labelledby="titulo-login">
      <h1 id="titulo-login">Fazer login</h1>

      <form onSubmit={fazerLogin}>
        <div className="campo-login">
          <label htmlFor="usuario">Usuário</label>
          <input
            id="usuario"
            name="usuario"
            type="text"
            autoComplete="username"
            autoCapitalize="none"
            spellCheck={false}
            placeholder="Digite seu usuário"
            required
          />
        </div>

        <div className="campo-login">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            name="senha"
            type="password"
            autoComplete="current-password"
            placeholder="Digite sua senha"
            required
          />
        </div>

        <button type="submit">Fazer login</button>
      </form>
    </section>
  )
}

export default App
