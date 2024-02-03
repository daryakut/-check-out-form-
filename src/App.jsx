import { Routes, Route, Outlet, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import RegisterForm from "./components/RegisterForm/RegisterForm";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Banner />
      <RegisterForm />
    </div>
  );
}

function Home() {
  return <></>;
}
function Shop() {
  return <></>;
}

function About() {
  return <></>;
}

function Contact() {
  return <></>;
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
