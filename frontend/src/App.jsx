import { useEffect } from 'react';
import { backToTop, changeHeaderWhenScroll, checkFooterTop } from './main';
import PageApp from './pages/PageApp';

function App() {
  /* useEffect(() => {
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
  }, []); */

  return (
    <PageApp />
  );
}

export default App;
