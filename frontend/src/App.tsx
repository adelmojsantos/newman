import { useEffect, useState } from 'react';
import { backToTop, changeHeaderWhenScroll, checkFooterTop } from './main';
import PageApp from './pages/PageApp';

function App() {
  // const [offset, setOffset] = useState(0);
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     changeHeaderWhenScroll();
  //     // activateMenuAtCurrentSection()
  //     backToTop();
  //     checkFooterTop();
  //   })
  // }, [])
  useEffect(() => {
    const onScroll = () => {
      changeHeaderWhenScroll();
      // activateMenuAtCurrentSection()
      backToTop();
      checkFooterTop();
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <PageApp />
  );
}

export default App;
