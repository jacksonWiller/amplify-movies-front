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
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Jackson Duarte</h1>
          <p className="subtitle">Desenvolvedor Full Stack</p>
          <p className="description">
            Apaixonado por criar soluções digitais inovadoras e experiências únicas. 
            Especialista em desenvolvimento web moderno com foco em performance e usabilidade.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">Ver Projetos</a>
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
            <h3>Desenvolvedor Full Stack & UI/UX Designer</h3>
            <p>
              Com mais de 5 anos de experiência em desenvolvimento web, sou especializado em criar 
              aplicações robustas e interfaces intuitivas. Minha paixão é transformar ideias complexas 
              em soluções digitais elegantes e funcionais.
            </p>
            <p>
              Trabalho com tecnologias modernas como React, Node.js, Python, .NET e diversas ferramentas 
              de desenvolvimento. Sempre busco me manter atualizado com as últimas tendências e 
              melhores práticas da indústria.
            </p>
            <p>
              Quando não estou codando, gosto de contribuir com projetos open source, escrever 
              artigos técnicos e mentorear novos desenvolvedores.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <h2>Habilidades</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">🚀</div>
            <h3>Frontend Development</h3>
            <p>React, Vue.js, Angular, HTML5, CSS3, JavaScript ES6+, TypeScript</p>
          </div>
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
            <div className="skill-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Figma, Adobe XD, Responsive Design, Material Design, User Experience</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🔧</div>
            <h3>.NET Development</h3>
            <p>.NET Core, ASP.NET, Entity Framework, Blazor, Web API, Azure Services</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <h2>Projetos</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">📱</div>
            <div className="project-content">
              <h3 className="project-title">E-Commerce Platform</h3>
              <p className="project-description">
                Plataforma completa de e-commerce com painel administrativo, 
                sistema de pagamentos e gestão de inventário.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Stripe</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Ver Projeto</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">📊</div>
            <div className="project-content">
              <h3 className="project-title">Dashboard Analytics</h3>
              <p className="project-description">
                Dashboard interativo para análise de dados com gráficos em tempo real 
                e relatórios personalizáveis.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Chart.js</span>
                <span className="tech-tag">PostgreSQL</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Ver Projeto</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">🎵</div>
            <div className="project-content">
              <h3 className="project-title">Music Streaming App</h3>
              <p className="project-description">
                Aplicativo de streaming de música com playlists personalizadas, 
                player avançado e recomendações inteligentes.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">Redis</span>
                <span className="tech-tag">AWS S3</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Ver Projeto</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">🏢</div>
            <div className="project-content">
              <h3 className="project-title">Enterprise Management System</h3>
              <p className="project-description">
                Sistema corporativo completo para gestão de recursos humanos, 
                financeiro e operacional desenvolvido em .NET.
              </p>
              <div className="project-tech">
                <span className="tech-tag">.NET Core</span>
                <span className="tech-tag">C#</span>
                <span className="tech-tag">SQL Server</span>
                <span className="tech-tag">Azure</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Ver Projeto</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <span>+55 (11) 99999-9999</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <span>São Paulo, SP - Brasil</span>
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
          <a href="#" className="social-link">🐱</a>
          <a href="#" className="social-link">💼</a>
          <a href="#" className="social-link">🐦</a>
          <a href="#" className="social-link">📸</a>
        </div>
        <p>&copy; 2025 Jackson Duarte. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
