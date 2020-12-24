import "./App.css"
import Navbar from "./Navbar"
import Section from "./Section"
import data from "./data"

function App() {
  window.onscroll = function () {
    scrollFunction()
  }

  function scrollFunction() {
    let topButton = document.getElementById("topBtn")
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      topButton.style.display = "block"
    } else {
      topButton.style.display = "none"
    }
  }

  function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div className="app">
      <Navbar />
      <div className="app__container">
        <div className="app__content">
          <div className="app__header">
            <h1>cheat-sheet.css</h1>
            <h3>/* Less time googling, more time creating */</h3>
          </div>
          <div className="app__body">
            {data.map((section) => (
              <Section
                id={section.id}
                title={section.title}
                cards={section.cards}
              />
            ))}
          </div>
          <footer>
            <h3 class="footer">
              /* Built by{" "}
              <a href="https://imranjami.github.io" target="_blank">
                Imran Jami
              </a>{" "}
              👨🏽‍💻 */
            </h3>
          </footer>
        </div>
      </div>
      <button class="top-button" onClick={topFunction} id="topBtn">
        ☝🏽
      </button>
    </div>
  )
}

export default App
