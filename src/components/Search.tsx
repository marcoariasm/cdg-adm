import Asistencia from './Asistencia';
import Clases from './Clases';
import Cursos from './Cursos';

interface Props {
  search: string;
}

const Search = ({ search }: Props) => {
  switch (search) {
    case "cursos":
      return <Cursos />;
    case "clases":
      return <Clases />;
    case "asistencia":
      return <Asistencia />;
    default:
      return null;
  }
};

export default Search;
