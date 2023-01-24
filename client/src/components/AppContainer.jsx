import About from "./about/About";
import Services from "./services/Services";
import Landing from "./landing/Landing";
import NavBar from "./navbar/NavBar";
import Projects from "./projects/Projects";
import AppButton from "./reusable/AppButton";
import ContactMe from "./contact-me/ContactMe";
import WavyBottom from "./reusable/WavyBottom";
import WavyTop from "./reusable/WavyTop";

const AppContainer = ({ mediaQueries }) => {
  const styles = {
    sectionStyles: {
      maxWidth: 900,
      margin: "auto",
      paddingBottom: 50,
      padding: 16
    },
    hireMe: {
      backgroundColor: "var(--appBackground)",
      textAlign: "center"
    },
    hireMeText: {
      fontWeight: 500,
      fontSize: 18
    }
  };

  // Check if the browser supports biometric authentication
  if ("credentials" in navigator) {
    // Request biometric authentication
    navigator.credentials
      .create({
        publicKey: {
          // Use the challenge property to create a nonce
          challenge: new Uint8Array([1, 2, 3, 4, 5]),
          // Use the rp property to specify the relying party
          rp: {
            name: "My App"
          },
          // Use the user property to specify the user account
          user: {
            id: new Uint8Array([6, 7, 8, 9]),
            name: "jane.doe@example.com",
            displayName: "Jane Doe"
          }
        }
      })
      .then(function (assertion) {
        // Send the assertion to the server for verification
        fetch("/verify", {
          method: "POST",
          body: assertion
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    console.log("This browser does not support biometric authentication.");
  }

  return (
    <>
      {/* HOME */}
      <>
        <section
          id="home"
          style={{
            backgroundColor: "var(--appBackground)",
            minHeight: 670
          }}
        >
          <div style={styles.sectionStyles}>
            <NavBar mediaQueries={mediaQueries} />
            <Landing mediaQueries={mediaQueries} />
          </div>
        </section>
        <WavyBottom
          color="rgb(4, 4, 4)"
          style={{ boxShadow: "50px -50px 50px #000", top: -30 }}
        />
      </>

      {/* ABOUT */}
      <section id="about">
        <div style={styles.sectionStyles}>
          <About mediaQueries={mediaQueries} />
        </div>
      </section>

      {/* SERVICES */}
      <>
        <WavyTop />
        <section
          id="services"
          style={{
            backgroundColor: "var(--appBackground)"
          }}
        >
          <div style={styles.sectionStyles}>
            <Services mediaQueries={mediaQueries} />
          </div>
        </section>
        <WavyBottom />
      </>

      {/* PROJECTS */}
      <section id="projects">
        <div style={styles.sectionStyles}>
          <Projects mediaQueries={mediaQueries} />
        </div>
      </section>

      {/* HIRE ME */}
      <>
        <WavyTop />
        <section style={styles.hireMe}>
          <div style={styles.sectionStyles}>
            <p style={styles.hireMeText}>
              Your business deserves a professional website.
            </p>
            <AppButton text={"Hire Me Now"} />
          </div>
        </section>
        <WavyBottom />
      </>

      {/* CONTACT ME */}
      <section id="contact-me">
        <div style={styles.sectionStyles}>
          <ContactMe mediaQueries={mediaQueries} />
        </div>
      </section>
    </>
  );
};

export default AppContainer;
