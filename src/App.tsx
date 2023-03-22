import MainRoutes from './Routes/Routes'
import React, {useState, useEffect} from 'react';
function App() {
  const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }, []);
  return (
    <div className="App">
        {loading ? (
             <div className="loader-container">
                <div className="spinner"></div>
            </div>) : (<></>)}
      <MainRoutes></MainRoutes>
    </div>
  );
}

export default App;
