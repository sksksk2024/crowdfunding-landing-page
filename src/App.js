import Header from "./components/Header";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <main className="mt-32M w-full 2xs:w-4/5 mx-auto max-w-800MW flex flex-col items-center justify-center gap-4 min-height-[100vh] bg-pale-blue">
        <ToastContainer />
        <Card1 />
        <Card2 />
        <Card3 />
      </main>
    </>
  );
}

export default App;
