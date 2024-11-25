import projects from "../assets/projects.json"

export default function Projects() {
  const ratingBase = [0, 1, 2, 3, 4]
  
  function rating(value) {
    return ratingBase.map(item => item < value ? <img src="/projects/star-solid-true.svg" alt="star true"
      width={18}
      key={item}
    /> : <img src="/projects/star-solid-false.svg" alt="star false"
      width={18}
      key={item}
    />)
  }

  return (
    <section className="d-flex flex-column align-items-center pt-2 pb-4 mx-4 border-bottom border-2 border-black">
      <h1>Projects</h1>
      <p>Here are some of my projects so far.</p>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {projects.map(obj => <div key={projects.indexOf(obj)} className="card" style={{ width: "295px" }}>

          <img src={obj.image} alt={obj.name} />

          <div className="card-body">
            <div className="card-title"><h3>{obj.name}</h3></div>
            <div className="card-text">{obj.description}</div>
          </div>

          <div className="card-body">
            <div className="card-title"><b>Tech stacks used:</b></div>
            <div className="card-text">{obj.techs}</div>
          </div>

          <div className="card-body">
            <div className="card-title"><b>Rating:</b></div>
            <div className="card-text d-flex justify-content-between">
              Frontend / UI:
              <div className="d-inline-flex">{rating(obj.complete.frontend_ui)}</div>
            </div>
            <div className="card-text d-flex justify-content-between">
              Rest API:
              <div className="d-inline-flex">{rating(obj.complete.rest_api)}</div>
            </div>
            <div className="card-text d-flex justify-content-between">
              API Docs:
              <div className="d-inline-flex">{rating(obj.complete.api_docs)}</div>
            </div>
            <div className="card-text d-flex justify-content-between">
              Front & Back testing:
              <div className="d-inline-flex">{rating(obj.complete.front_back_testing)}</div>
            </div>
            <div className="card-text d-flex justify-content-between">
              Data Validation:
              <div className="d-inline-flex">{rating(obj.complete.data_validation)}</div>
            </div>
            <div className="card-text d-flex justify-content-between">
              Function:
              <div className="d-inline-flex">{rating(obj.complete.function)}</div>
            </div>
          </div>
          
          <div className="card-body flex-grow-0">
            <div className="card-text"><a href={obj.link_repo} className="card-link">GitHub Repository</a></div>
            <div className="card-text"><a href={obj.link_deploy} className="card-link">Live Website</a></div>
          </div>
        </div>)}
      </div>
    </section>
  )
}
