const ActionCard = ({ title, description, image, location, datetime, onClick }) => (
    <div className="action-card">
      <div className="card-image" style={{backgroundImage: `url(${image})`}}></div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="btn" onClick={() => onClick(title, description, location, datetime)}>Saiba Mais</button>
      </div>
    </div>
  );
  
  const ActionGrid = () => {
    const actions = [
      {
        title: "Coleta de Lixo",
        description: "Junte-se a nós para fazer a coleta de lixo nas ruas do bairro Santa Delmira",
        image: "./images/coletalixo.png",
        location: [-5.1746, -37.1604],
        datetime: "Sábado, 15 de Julho, 08:00 - 12:00"
      },
      {
        title: "Distribuição de alimentos",
        description: "Ajude na distribuição de alimentos na Praça do Pax para a população",
        image: "./images/dtalimento.png",
        location: [-5.1889, -37.3442],
        datetime: "Terça a Sexta, 07:00 - 18:00"
      },
      {
        title: "Aulas de Reforço Escolar",
        description: "Ajude estudantes de baixa renda com aulas de reforço em diversas matérias.",
        image: "./images/ensinando.png",
        location: [-5.1875, -37.3444],
        datetime: "Segunda a Sexta, 14:00 - 17:00"
      },
      {
        title: "Plantio de Árvores no Parque Municipal",
        description: "Contribua para um futuro mais verde plantando árvores em nosso parque.",
        image: "./images/plantar.png",
        location: [-5.1903, -37.3439],
        datetime: "Domingo, 23 de Julho, 09:00 - 13:00"
      },
      {
        title: "Alimentação dos animais",
        description: "Participe na alimentação dos animais de rua como cães e gatos e receba muito carinho",
        image: "./images/ftalimentaanim.png",
        location: [-5.1880, -37.3450],
        datetime: "Sábados, 14:00 - 17:00"
      },
      {
        title: "Doação de Roupas",
        description: "Doe e ofereça roupas para pessoas em situação de rua",
        image: "./images/bazar.png",
        location: [-5.1920, -37.3430],
        datetime: "Terças e Quintas, 09:00 - 12:00"
      }
    ];
  
    const openModal = (title, description, location, datetime) => {
      document.getElementById('modal-title').textContent = title;
      document.getElementById('modal-description').textContent = description;
      document.getElementById('modal-datetime').textContent = `Data e Horário: ${datetime}`;
      document.getElementById('modal').style.display = 'block';
      
      setTimeout(() => {
        const map = L.map('map').setView(location, 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        L.marker(location).addTo(map);
      }, 100);
    };
  
    return (
      <div className="action-grid">
        {actions.map((action, index) => (
          <ActionCard key={index} {...action} onClick={openModal} />
        ))}
      </div>
    );
  };
  
  ReactDOM.render(<ActionGrid />, document.getElementById('action-cards'));
  


const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = 'none';
    }
}

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

