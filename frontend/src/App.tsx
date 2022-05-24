import { useEffect } from 'react';
import PageApp from './pages/PageApp';

function App() {
  function csl() {
    const f = document.querySelector('.back-to-top')
    console.log(f)
  }

  useEffect(() => {
    csl()
  })
  return (
    <PageApp />
  );
}

export default App;
