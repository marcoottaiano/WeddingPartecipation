import './App.scss';
import Home from './views/Home';
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <>
      <ScrollToTop smooth style={{
        borderRadius: '200px',
        padding: '10px',
        height: 'auto',
        width: 'auto',
        zIndex: 10,
        opacity: 0.9,
        color: 'white',
        backgroundColor: '#6869AA'
      }} color='white' />
      <Home />
    </>
  );
}

export default App;
