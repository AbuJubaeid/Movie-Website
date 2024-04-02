import { Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./components/content";
import Layout from "./components/layout";
import Main from "./components/main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="content" element={<Content />} />
          <Route path="content/:content" element={<Content />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


