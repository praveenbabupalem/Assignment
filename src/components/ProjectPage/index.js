import './index.css'

const ProjectPage = props => {
  const {eachItem, number} = props
  const {image, name, link, description} = eachItem
  return (
    <li className="displayFlex" id="projectPage">
      <div>
        <img src={image} alt={name} className="imageDetails" />
      </div>
      <div className="bgc-details">
        <p>Project {number + 1}</p>
        <h1>{name}</h1>
        <p className="description-width-details">{description}</p>
        <a href={link} target="__blank">
          <button type="button" className="anchorButton">
            View Project
          </button>
        </a>
      </div>
    </li>
  )
}

export default ProjectPage
