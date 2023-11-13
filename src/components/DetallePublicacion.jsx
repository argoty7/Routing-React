import React from 'react';
import { useParams } from 'react-router-dom';

const publicaciones = [
  { id: 1, title: '¿Por qué nos tocó Agua, si nosotros queríamos Flappy?', description: 'Artículo de investigación' },
  { id: 2, title: '¿Cuándo conseguiremos trabajo?', description: 'Novela' },
  // Agrega más publicaciones aquí
];

export const DetallePublicacion = () => {
  const { id } = useParams();
  const publicacion = publicaciones.find((p) => p.id === parseInt(id, 10));
  if (!publicacion) {
    return <div>Publicación no encontrada</div>;
  }
  return (
    <div>
      <h2>Detalles de la Publicación</h2>
      <h3>{publicacion.title}</h3>
      <p>{publicacion.description}</p>
    </div>
  );
}
