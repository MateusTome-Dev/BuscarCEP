import'./Home.css'
import { Link } from 'react-router-dom';
import background from'../components/Video/background.mp4'
const Home: React.FC = () => {
 
  return (
    <section className="home">
      <video
        className="video_home"
        src={background}
        autoPlay
        loop
        muted
      ></video>

      <div className="conteudo">
        <h3>Seja Bem Vindo</h3>

        <p>
        Veja informações sobre a sua localização!
        </p>

        
      </div>
      <Link to="/buscar" className="btn">Buscar cep</Link>
    </section>
    
  );
};

export default Home;
