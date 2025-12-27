import { useParams } from 'react-router-dom';
import { facts } from '../data';

function Fact() {
  const { factId } = useParams();
  const fact = facts.find((f) => f.id === factId);

  if (!fact) {
    return <h2>❌ Fact not found</h2>;
  }

  return (
    <div>
      <h2>Fact #{factId}</h2>
      <p>{fact.text}</p>
    </div>
  );
}

export default Fact;
