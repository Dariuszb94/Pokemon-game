import styled from 'styled-components';

export const PokemonName = styled.h2`
  text-transform: capitalize;
  animation-name: slide-down;
  animation-duration: 0.8s;
  animation-timing-function: linear;
  @keyframes slide-down {
    0% {
      transform: scale(0.9);
    }
    80% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
export const ErrorMessage = styled.div`
  color: red;
`;

export const ChosenPokemonWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
export const PokemonSprite = styled.img`
  animation-name: popup;
  animation-duration: 0.8s;
  animation-timing-function: linear;
  @keyframes popup {
    0% {
      transform: scale(0.1);
    }
    80% {
      transform: scale(1.3);
    }

    100% {
      transform: scale(1);
    }
  }
`;
