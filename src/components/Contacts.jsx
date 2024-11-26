
export default function Contacts() {
  
  return (
    <section className="text-center pt-2 mx-4">
      <h1>Contacts</h1>
      <div className="d-flex flex-wrap gap-5 justify-content-center pt-2">
        <a href="#"
          className="link-dark link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
        >
          <figure>
            <img src="/contacts/envelope-solid.svg" alt="E-Mail" height={100} />
            <figcaption className="pt-2"><h4>E-Mail</h4></figcaption>
          </figure>
        </a>
        <a href="#"
          className="link-dark link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
        >
          <figure>
            <img src="/contacts/linkedin-original.svg" alt="Linkedin" height={100} />
            <figcaption className="pt-2"><h4>Linkedin</h4></figcaption>
          </figure>
        </a>
        <a href="#" className="link-dark link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
          <figure>
            <img src="/contacts/github-original.svg" alt="GitHub" height={100} />
            <figcaption className="pt-2"><h4>GitHub</h4></figcaption>
          </figure>
        </a>
      </div>
    </section>
  )
}
