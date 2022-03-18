import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 70%;
  min-width: 200px;
  overflow: scroll;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  border-radius: 4px;
`;

export const ListElement = styled.li`
  padding: 0 8px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  transition: height 0.4s linear;
  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1);
    animation-name: slide-right;
    animation-duration: 1s;
    animation-timing-function: linear;
  }
  &:nth-child(odd) {
    animation-name: slide-left;
    animation-duration: 1s;
    animation-timing-function: linear;
  }
  &:hover span {
    font-weight: bold;
  }
  &:hover {
    height: 72px;
  }

  @keyframes slide-right {
    0% {
      transform: translateX(100px);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-left {
    0% {
      transform: translateX(-100px);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
export const ListedPokemon = styled.span`
  text-transform: capitalize;
`;
