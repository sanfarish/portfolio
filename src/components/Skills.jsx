import skills from "../assets/skills.json"

export default function Skills() {

  return (
    <section className="d-flex flex-column align-items-center pt-2 pb-4 mx-4 border-bottom border-2 border-black"
        id="skills" style={{ scrollMarginTop: 65 }}
    >
        <h1>Skills</h1>
        <p>With JavaScript language as my experience, I tend to work with JavaScript based stack such as Node.js as server environment, Express.js for API framework and React.js as frontend user interface. I also learnt HTML5 as web structure and CSS for styling purposes. I used to work with PostgreSQL for RDBMS. I also have experience with Git/Github along with CI/CD pipeline and Nginx configuration.</p>
        <div className="d-flex flex-wrap gap-4 justify-content-center">
            {skills.map(obj => <div key={skills.indexOf(obj)} className="card text-center" style={{ width: "225px" }}>
                <div className="card-header">
                    <h4>{obj.title}</h4>
                </div>
                <ul className="list-group list-group-flush">
                    {obj.skill.map(item => <li key={obj.skill.indexOf(item)} className="list-group-item pt-3">
                        <img src={item.image} alt={item.name} height={50} width={50} />
                        <h5 className="mt-1">{item.name}</h5>
                    </li>)}
                </ul>
            </div>)}
        </div>
    </section>
  )
}
