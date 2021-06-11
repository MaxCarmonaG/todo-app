import Header from '../../components/header/header';
import Todo from '../../components/todo/todo';
import { Container } from './home.styles';

const Home = () => (
  <Container>
    <div>
      <Header />
      <Todo />
    </div>
  </Container>
);

export default Home;
