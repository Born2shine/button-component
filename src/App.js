import "./assets/css/main.css"
import styled from "styled-components"

import ButtonCard from "./components/ButtonCard"

const NavBar = styled.div`
  padding: 1rem
`;

const Toggle = styled.div`
  position:absolute;
  right: 1rem;
  font-size: 2rem;
`;

function App() {
  return (
    <div className="App">
      <main>
        <article className="sidenav">
          <div className="title"><span>Dev</span>challenges.io</div>
          <nav>
            <ul>
              <li>color</li>
              <li>typography</li>
              <li>spaces</li>
              <li>buttons</li>
              <li>inputs</li>
              <li>grid</li>
            </ul>
          </nav>
        </article>
        <section className="container">
          <div className="title">Buttons</div>
          <div className="button-wrapper">
            <ButtonCard />
          </div>
      <footer> Created by SpiderTech - devChallenges.io </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
