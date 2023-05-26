import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import AboutPage from "./pages/about.page";
import PhotoPage from "./pages/photo.page";
import VideoPage from "./pages/video.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/photo" element={ <PhotoPage /> } />
          <Route path="/video" element={ <VideoPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
