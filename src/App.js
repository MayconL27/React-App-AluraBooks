import Header from './componentes/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(60deg,rgb(93, 93, 201),rgb(80, 21, 122));

  li {
  list-style: none; /* Retirar os ° na lista*/
  }
`
 

function App() {
  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  );
}
export default App;