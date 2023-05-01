import styled from 'styled-components';

function Pokemon({ name, sprite }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={sprite} alt={name} />
    </div>
  )
}

const PokemonStyled = styled(Pokemon)`
  background-color: red;
  font-size: 3rem;
`;

export default PokemonStyled;
