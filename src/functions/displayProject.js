import DiabetesAssist from "../components/Projects/DiabetesAssist/DiabetesAssist"
import DotD from "../components/Projects/DotD/DotD"
import FootballRoundUp from "../components/Projects/FootballRoundUp/FootballRoundUp"
import MassShootingsUS from "../components/Projects/MassShootingsUS/MassShootingsUS"
import Nervi from "../components/Projects/Nervi/Nervi"
import SmartBrain from "../components/Projects/SmartBrain/SmartBrain"

export const displayProject = (projectName, largeOrSmall) => {

    switch(projectName) {
        case "Nervi":
            return <Nervi showLargeOrSmall={largeOrSmall} />
        case "MassShootingsUS" :
            return <MassShootingsUS showLargeOrSmall={largeOrSmall} />
        case "DiabetesAssist":
            return <DiabetesAssist showLargeOrSmall={largeOrSmall} />
        case "FootballRoundUp":
            return <FootballRoundUp showLargeOrSmall={largeOrSmall} />
        case "DotD":
            return <DotD showLargeOrSmall={largeOrSmall} />
        case "SmartBrain":
            return <SmartBrain showLargeOrSmall={largeOrSmall} />
        default:
            return <>Invalid project name</>;
    }
}