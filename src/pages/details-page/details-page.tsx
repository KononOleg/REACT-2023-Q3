import './details-page.css';

import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Loading } from '../../components/error-boundary/loading';
import { useGetPokemonQuery } from '../../services/PokemonApi';

export const DetailsPage: FC = () => {
  const urlParams = new URLSearchParams(useLocation().search);
  const pokemonId = urlParams.get('details');
  const navigate = useNavigate();

  const { data: pokemonData, isLoading } = useGetPokemonQuery(pokemonId);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    navigate(-1);
  };

  return (
    <div className="details-page">
      {isLoading && <Loading />}
      <div className="details-page__modal" onClick={handleClose}></div>
      <div className="details-page__wrapper">
        <button className="details-page__close" onClick={handleClose}>
          x
        </button>
        {pokemonData && (
          <>
            <h2 className="details__title">{pokemonData.name}</h2>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
              alt="image"
            />

            <div>Weight: {pokemonData.weight}</div>
            <div className="details-card__stats">
              <p>Hp: {pokemonData.stats[0]}</p>
              <p>Attack: {pokemonData.stats[1]}</p>
              <p>Defense: {pokemonData.stats[2]}</p>
              <p>Special-Attack: {pokemonData.stats[3]}</p>
              <p>Special-Defense: {pokemonData.stats[4]}</p>
              <p>Speed: {pokemonData.stats[5]}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
