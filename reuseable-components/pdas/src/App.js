import "bulma/css/bulma.css";

import ProfileCard from "./ProfileCard";
import AlexaImg from "./img/alexa.png";
import CortanaImg from "./img/cortana.png";
import SiriImg from "./img/siri.png";

const App = () => {
  return (
    <div>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@Siri01"
                image={SiriImg}
                description="Siri was made by Apple and is phased out."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImg}
                description="Cortana was created by Microsoft. Who knows what it does?"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImg}
                description="Alexa was created by Amazon and helps you by things"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
