import styles from "./App.module.scss";
import Homepage from "./components/homepage.component";

function App() {
  return (
    <div className={styles.parent}>
      <Homepage />
    </div>
  );
}

export default App;
