import { Container, Grid, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayIndividualBalances from './components/DisplayIndividualBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" header="h1" />
      <DisplayBalance title="Your Balance :" value="2,553.85" color="green" size='small' />
      <DisplayIndividualBalances />
      <MainHeader title="History" header="h3" />
      <EntryLine desc="Income" value="$10.00" />
      <EntryLine desc="Expense" value="$10.00" isExpense />
      <MainHeader title="Add new transaction" header="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
