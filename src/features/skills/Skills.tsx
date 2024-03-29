import { skills } from "../projects/languageProjects"
import css from "./skills.module.css"

const Skills = () => {
  return (
    <div className={css.container}>
      <h1>Skills:</h1>
      <div className={css.logoesWrapper}>
        {skills.map((item, i) => (
          <div key={i} className={css.logoesWrapper}>
            <h2>{item.name}</h2>
            <img src={item.srcIMG} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
