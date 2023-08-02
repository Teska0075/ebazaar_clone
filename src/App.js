import styles from "./App.module.css";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className={styles.App}>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
