// import Main from './components/Main';

// function App() {
//   return (
//     <Main />
    
//   );
// }

// export default App;



import { Layout } from 'antd';
import Main from './components/Main';

// const { Header, Content, Footer } = Layout
const styles = {
  Header: {
      position: 'fixed',
      zIndex: 10,
      width: '100%',
      color: 'white',
    },
  Content: {
    padding: '0 50px',
    marginTop: 64,
  },
}

function App() {
  return (
    <Layout>
      <Layout.Header style={styles.Header}>
        Much Todo
      </Layout.Header>
      <Layout.Content style={styles.Content}>
        <Main />
      </Layout.Content>
      <Layout.Footer>&copy; 2022, Boca Code.</Layout.Footer>
    </Layout>
  );
}

export default App;

