export default function ComParametro(props) {
  const { titulo, nota, aluno } = props;

  return (
    <div>
      <h2>{titulo}</h2>
      <p>
        <strong>{aluno}</strong> tem nota <strong>{nota}</strong>
      </p>
    </div>
  );
}
