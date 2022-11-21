import ProfileCard from "./ProfileCard";

const App = () => {
  return (
    <div>
      <div>
        <h2>Personal Digital Assistants</h2>
      </div>
      <ProfileCard title="Siri" handle="@Siri01" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Alexa" handle="@alexa99" />
    </div>
  );
};

export default App;
