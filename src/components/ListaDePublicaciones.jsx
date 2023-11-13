import { Link } from 'react-router-dom';

const publicaciones = [
  { id: 1, title: '¿Por qué nos tocó Agua, si nosotros queríamos Flappy?', description: 'Artículo de investigación' },
  { id: 2, title: '¿Cuándo conseguiremos trabajo?', description: 'Novela' },
  // Agrega más publicaciones aquí
];

export const ListaDePublicaciones = () => {
  return (
    <div>
      <h2>Lista de Publicaciones</h2>
      <ul>
        {publicaciones.map((publicacion) => (
          <li key={publicacion.id}>
            <Link to={`/detalle/${publicacion.id}`}>{publicacion.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

