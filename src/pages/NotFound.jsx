import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Página não encontrada</h1>
      <p>A página que você tentou acessar não existe.</p>

      <Link 
        to="/" 
        style={{ 
          padding: "10px 20px",
          background: "#333",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none"
        }}
      >
        Voltar para Home
      </Link>
    </div>
  );
}

export default NotFound;
