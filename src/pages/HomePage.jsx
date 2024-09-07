import AddForm from 'components/AddForm';
import AddTabs from 'components/AddTabs';
import LetterCradList from 'components/LetterCradList';

const HomePage = () => {
  return (
    <div>
      <AddTabs />
      <AddForm />
      <LetterCradList />
    </div>
  );
};

export default HomePage;
