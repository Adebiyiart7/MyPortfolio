import { makeStyles } from "@mui/styles";

import photo from "../../assets/img/photo.png";
import AppButton from "../reusable/AppButton";
import PageTitle from "../reusable/PageTitle";
import Skill from "../Skill";

const useStyles = makeStyles({
  body: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    color: "var(--primaryText)",
    fontFamily: "var(--appFontFamily)",
    lineHeight: 1.6,
  },
  photo: {
    width: "100%",
    maxWidth: 370,
    borderRadius: "50%",
  },
});

const About = ({ mediaQueries }) => {
  const classes = useStyles();
  const { tabletUp, tablet } = mediaQueries;

  const styles = {
    skills: {
      display: tablet ? "initial" : "flex",
      width: "100%",
    },
    skillsLeft: {
      width: tablet ? "100%" : "50%",
    },
    skillRight: {
      width: tablet ? "100%" : "50%",
    },
  };

  return (
    <div>
      <PageTitle mediaQueries={mediaQueries} title={"Who am I"} />
      <div className={classes.body}>
        {tabletUp && <img className={classes.photo} src={photo} alt="" />}
        <div className={classes.description}>
          <strong>
            I am a Full Stack Web Developer, having over 3 years of experience
            in building web applications for small and medium sized businesses.
          </strong>
          <br />
          <br />I have so much interest in developing web applications with high
          degree of excellence. I love writing <strong>clean codes</strong>,
          creating
          <strong> beautiful</strong> user interfaces, building{" "}
          <strong>secure </strong>
          applications and converting my client's ideas into reality.
          <br />
          <br />
          <br />
          <div style={{ textAlign: tablet ? "center" : "initial" }}>
            <AppButton text="Hire Me Now" />
          </div>
        </div>
      </div>

      <div style={styles.skills}>
        <div style={styles.skillsLeft}>
          <Skill mediaQueries={mediaQueries} text="HTML & CSS" value={90} />
          <Skill mediaQueries={mediaQueries} text="JavaScript" value={85} />
          <Skill mediaQueries={mediaQueries} text="TypeScript" value={70} />
          <Skill mediaQueries={mediaQueries} text="React & Redux" value={85} />
        </div>
        <div style={styles.skillRight}>
          <Skill
            mediaQueries={mediaQueries}
            text="NodeJs, Express and MongoDB"
            value={80}
          />
          <Skill mediaQueries={mediaQueries} text="React Native" value={70} />
          <Skill mediaQueries={mediaQueries} text="GraphQL" value={75} />
          <Skill mediaQueries={mediaQueries} text="GIT" value={70} />
        </div>
      </div>
    </div>
  );
};

export default About;
