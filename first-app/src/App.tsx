import "./App.css";
import ProfileCard from "./components/ProfileCard";
import alexa from "./assets/alexa.png";
import cortana from "./assets/cortana.png";
import siri from "./assets/siri.png";

function App() {
  return (
    <>
      <div>Personal Digital Assistant</div>
      {/* https://bulma.io/documentation/columns/sizes/#12-columns-system */}
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                description="Alexa was created by amazon"
                image={alexa}
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@Cortana32"
                description="Cortana was created by Microsoft"
                image={cortana}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                description="Siri was created by Apple lor"
                image={siri}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
