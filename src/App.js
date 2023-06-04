
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Auth from "./components/Auth";
import Contacts from "./pages/Contacts";
import Register from "./components/Register";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/">
      <Route index element={<Auth><Contacts/></Auth>} />
      <Route path="add" element={<Auth><AddContact/></Auth>} />
      <Route path="edit/:id" element={<Auth><EditContact/></Auth>} />
    </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
