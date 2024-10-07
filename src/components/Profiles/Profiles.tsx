import React from "react";
import SpeakerProfile from "./components/SpeakerProfile";
import AudreyImg from "../../assets/audreygentili.jpg";
import OlivierImg from "../../assets/olivierperez.jpeg";

function Profiles() {
  return (
    <>
      <div className="agent_title">NOS EXPERTS</div>
      <div className="speaker_profiles">
        <SpeakerProfile
          firstName="Olivier"
          lastName="Perez"
          codeName="Agent O"
          speakerImage={OlivierImg}
          githubLink="https://github.com/olivierperez"
          linkedinLink="https://www.linkedin.com/in/olivierperez0/"
          mastodonLink="https://mastodon.social/@olivierperez"
        />
        <SpeakerProfile
          firstName="Audrey"
          lastName="Gentili"
          codeName="Agent A"
          speakerImage={AudreyImg}
          githubLink="https://github.com/audreygentili"
          linkedinLink="https://www.linkedin.com/in/audrey-gentili/"
          twitterLink="https://twitter.com/audreygentili"
        />
      </div>
    </>
  );
}

export default Profiles;
