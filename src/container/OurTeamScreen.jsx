import ContactUs from "../components/OurTeam/ContactUs"
import LatestUpdates from "../components/OurTeam/LatestUpdates"
import TeamIntro from "../components/OurTeam/TeamIntro"
import TeamMembers from "../components/OurTeam/TeamMembers"

const OurTeamScreen = () => {
  return (
    <div>
        <TeamIntro />
        <TeamMembers />
        <LatestUpdates />
        <ContactUs />
    </div>
  )
}

export default OurTeamScreen