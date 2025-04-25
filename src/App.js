
import { Route, Routes } from 'react-router';
import './App.css';
import Welcome from './components/welcome';
import SignIn from './components/signin';
import Signup from './components/signup';
import AccountSettings from './components/account';

function App() {
  return (
    <div className="bg-[#F7F8F9]">
     <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/auth">
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<SignIn/>} />
      </Route> 
      <Route path='account' element={<AccountSettings/>}/>
     </Routes>
    </div>
  );
}

export default App;
