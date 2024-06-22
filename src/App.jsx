import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Sandbox from "./pages/sandbox";
import SandboxThumbnail from "./assets/thumbnails/sandbox.png";

export const projectUrls = [
  {
    title: "Sandbox",
    url: "/sandbox",
    component: <Sandbox />,
    thumbnail: SandboxThumbnail,
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {projectUrls.map(({ url, component }, _) => (
          <Route key={_} path={url} element={component} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
