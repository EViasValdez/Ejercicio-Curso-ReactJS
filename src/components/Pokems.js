export default function Pokems(props) {
  const { names, setNames } = props;

  const resetNames = () => {
    setNames(null);
  }

  return (
    <div className="names">
      <h1>Nombres</h1>
        <span className="back-home" onClick={resetNames}>
            Regresar al inicio
        </span>
        <div className="container-characters">
          {names.map((names, index) => (
              <div className="name-container" key={index}>
                <div>
                    <p>{names.name}</p>
                </div>
                <div>
                    <p>{names.url}</p>
                </div>
              </div>
          ))};
        </div>
    </div>
  );
}