import './App.css';
import { Button, Space } from 'antd';
import { LayOut } from 'components/Layout';
import { Users } from 'containers/Users';
import { Home } from 'containers/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
