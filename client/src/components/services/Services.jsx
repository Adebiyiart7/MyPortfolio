import { SiAntdesign } from "react-icons/si";
import { MdImportantDevices } from "react-icons/md";
import { FaCogs } from "react-icons/fa";

import PageTitle from "../reusable/PageTitle";
import Service from "./Service";

const Creativity = ({ mediaQueries }) => {
  const { tablet } = mediaQueries;

  const styles = {
    services: {
      display: tablet ? "block" : "flex",
      justifyContent: "space-evenly",
    },
  };

  return (
    <div>
      <PageTitle title={"What I Do"} />
      <p style={{ textAlign: "center", margin: "auto", maxWidth: 600 }}>
        I spend a great deal of time on the planning stage to convert client's
        ideas into sketches; work alongside experienced and dedicated designers;
        write quality and standard codes that interprets the designs; I will be
        happy to help manage your application.
      </p>
      <div style={styles.services}>
        <Service
          icon={<SiAntdesign size={60} color="var(--primaryColor)" />}
          text="Web Design"
          description="...creating simple, beautiful and unique designs."
        />
        <Service
          icon={<MdImportantDevices size={60} color="var(--primaryColor)" />}
          text="Web Development"
          description="...building responsive, standard & maintainable web apps."
        />
        <Service
          icon={<FaCogs size={60} color="var(--primaryColor)" />}
          text="Management"
          description="...functioning and up-to-date web app."
        />
      </div>
    </div>
  );
};

export default Creativity;
