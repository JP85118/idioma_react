import Londres from "../assets/Image/britain.jpg";
import francia from "../assets/Image/francia.png";
import Colombia from "../assets/Image/colombia.jpg";
import { ContextoInfo } from "../Context/Contexto";
import { useContext } from "react";

const Idiomas = () => {
  const { persona } = useContext(ContextoInfo);
  const { setPersona } = useContext(ContextoInfo);

  const cambiarIdo = (posicion) => {
    setPersona(
      persona.map((el, i) => {
        return i === 3 ? { ...el, idioma: posicion } : { ...el };
      })
    );
  };

  return (
    <div className="idiomas">
      <div>
        <img src={Colombia} className="bandera" onClick={()=>cambiarIdo(0)} />
      </div>
      <div>
        <img src={Londres} className="bandera" onClick={()=>cambiarIdo(1)} />
      </div>
      <div>
        <img src={francia} className="bandera" onClick={()=>cambiarIdo(2)} />
      </div>
    </div>
  );
};

export default Idiomas;
