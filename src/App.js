//Importacion de los componentes
import Wrapper from './components/Wrapper';
import Section from './components/Section';
import Container from './components/Container';
import Friends from './components/Friends' 
import Stadistics from './components/Stadistics';
import Transaction from './components/Transaction';
import Profile from './components/Profile';
export const App = ({data}) => {
    return (
      <Wrapper>
        <Section>
          <Container><Profile {...data.user} /></Container>
        </Section>

        <Section>
          <Container><Stadistics items = {data.statistics}/></Container>
        </Section>

        <Section>
          <Container><Friends items={data.friends} /></Container>
        </Section>
        <Section>
          <Container><Transaction items={data.transaction}/></Container>
        </Section>
      </Wrapper>
    )
  };