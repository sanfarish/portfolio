
export default function Contacts() {
  
  return (
    <section className="text-center pt-2 mx-4" id="contacts" style={{ scrollMarginTop: 65 }}>
      <h1>Contacts</h1>
      <div className="d-flex flex-wrap gap-5 justify-content-center pt-2">
        <a href="mailto:farisfalah@gmail.com"
          className="link-dark link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
        >
          <figure>
            <img src="/contacts/envelope-solid.svg" alt="E-Mail" height={100} />
            <figcaption className="pt-2"><h4>E-Mail</h4></figcaption>
          </figure>
        </a>
        <a
          href="https://www.linkedin.com/in/sanfarish/"
          className="link-dark link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
          target="_blank"
          rel="noreferrer noopener"
        >
          <figure>
            <img src="/contacts/linkedin-original.svg" alt="Linkedin" height={100} />
            <figcaption className="pt-2"><h4>Linkedin</h4></figcaption>
          </figure>
        </a>
        <a
          href="https://github.com/sanfarish"
          className="link-dark link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
          target="_blank"
          rel="noreferrer noopener"
        >
          <figure>
            <img src="/contacts/github-original.svg" alt="GitHub" height={100} />
            <figcaption className="pt-2"><h4>GitHub</h4></figcaption>
          </figure>
        </a>
      </div>
    </section>
  )
}
