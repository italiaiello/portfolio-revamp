import DiabetesAssist from "../components/Projects/DiabetesAssist/DiabetesAssist"
import DotD from "../components/Projects/DotD/DotD"
import FootballRoundUp from "../components/Projects/FootballRoundUp/FootballRoundUp"
import MassShootingsUS from "../components/Projects/MassShootingsUS/MassShootingsUS"
import Nervi from "../components/Projects/Nervi/Nervi"
import SmartBrain from "../components/Projects/SmartBrain/SmartBrain"

export const displayProject = (projectName, largeOrSmall) => {

    const mainBtnClasses = largeOrSmall === 'large' ? 'btn main-btn-orange' : 'btn main-btn-blue'
    const alternateBtnClasses = largeOrSmall === 'large' ? 'btn alternate-btn-orange' : 'btn alternate-btn-blue'

    const props = {
        showLargeOrSmall: largeOrSmall,
        mainBtnClasses: mainBtnClasses,
        alternateBtnClasses: alternateBtnClasses
    }

    switch(projectName) {
        case "Nervi":
            return <Nervi {...props} />
        case "MassShootingsUS" :
            return <MassShootingsUS {...props} />
        case "DiabetesAssist":
            return <DiabetesAssist {...props} />
        case "FootballRoundUp":
            return <FootballRoundUp {...props} />
        case "DotD":
            return <DotD {...props} />
        case "SmartBrain":
            return <SmartBrain {...props} />
        default:
            return <>Invalid project name</>;
    }
}