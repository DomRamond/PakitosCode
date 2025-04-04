import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Routes/SignUp/SignUp';
import Main from './Routes/Main/Main';
import SignIn from './Routes/SignIn/SignIn';
import Entrada from './Routes/Entrada/Entrada';
import Saida from './Routes/Saida/Saida';
import Eventos_Especiais from './Routes/Eventos_Especiais/Eventos_Especiais';
import Dashboard from './Routes/Dashboard/Dashboard'
import Notifications from './Routes/Notifications/Notifications';
import Settings from './Routes/Settings/Settings'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/entrada' element={<Entrada />} />
          <Route path='/saida' element={<Saida />} />
          <Route path='/eventos-especiais' element={<Eventos_Especiais />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/settings' element={<Settings />} />

        </Routes>
      </Router>
    </div>
  );
}
