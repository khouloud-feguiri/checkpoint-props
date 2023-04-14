
import './App.css';
import Welcome from './Profile/Welcome';

function App() {
  return (
    <div className="App">

      <Welcome fullName="Angelina Jolie"
        bio=" naît le 4 juin 1975 à Los Angeles. Elle est élevée par sa mère, Marcheline Bertrand, qui se sépare de son père, l'acteur Jon Voight, en 1976. A l'âge de 11 ans, lorsque sa famille déménage à Los Angeles, la jeune Angelina décide de devenir actrice et prend ses premiers cours de comédie."
        profession="Actrisse"
           > <img src='https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2Ffd3bc784-c9c9-419a-944c-252f923add51.2Ejpeg/2047x1536/quality/80/angelina-jolie.jpeg'alt="tof"style={{width: "200px",display: "flex",margin: "auto",borderRadius: "100px"}}/></Welcome>
       
      
      

  
    </div>
  );
}

export default App;
