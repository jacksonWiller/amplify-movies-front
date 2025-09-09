import React from 'react';
import { usePortfolioEffects } from '../../hooks/usePortfolioEffects';
import './styles.css';

const Portfolio: React.FC = () => {
  // Adiciona efeitos interativos
  usePortfolioEffects();

  return (
    <div className="portfolio"> 
      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">JD</a>
          <ul className="nav-links">
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Jackson Duarte</h1>
          <p className="subtitle">Desenvolvedor Backend</p>
          <p className="description">
            Apaixonado por construir soluções digitais robustas e escaláveis.
Especialista em desenvolvimento backend e infraestrutura moderna, com foco em segurança, performance e alta disponibilidade.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-secondary">Entre em Contato</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <h2>Sobre Mim</h2>
        <div className="about-content">
          <div className="profile-image">
            👨‍💻
          </div>
          <div className="about-text">
            <h3>Desenvolvedor Backend</h3>
            <p>
              Focado em desenvolvimento backend e arquitetura de sistemas, sempre buscando entregar soluções escaláveis, seguras e de alta performance
            </p>
            <p>
              Experiência em Backend Development utilizando Node.js, Python (Django, Express.js), .NET Core e C#.
Domínio na construção de RESTful APIs e GraphQL, além de bancos de dados relacionais e não-relacionais como MongoDB, PostgreSQL, MySQL e SQL Server.
            </p>
            <p>
              Conhecimentos sólidos em cloud e containerização com AWS, Azure, Docker e Kubernetes, além de frameworks como ASP.NET, Entity Framework, Blazor e Web API.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <h2>Habilidades</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">⚡</div>
            <h3>Backend Development</h3>
            <p>Node.js, Python, Django, Express.js, RESTful APIs, GraphQL, .NET Core, C#</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>Database & Cloud</h3>
            <p>MongoDB, PostgreSQL, MySQL, SQL Server, AWS, Docker, Kubernetes</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🔧</div>
            <h3>.NET Development</h3>
            <p>.NET Core, ASP.NET, Entity Framework, Blazor, Web API, Azure Services</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="section">
          <h2>Vamos Trabalhar Juntos</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Entre em Contato</h3>
              <p>Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de colaboração.</p>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <span>jackson.duarte@email.com</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <span>+55 38 9841-0324</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <span>Januária, MG- Brasil</span>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
              (e.target as HTMLFormElement).reset();
            }}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
        </div>
        <p>&copy; 2025 Raisa Almeida. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
