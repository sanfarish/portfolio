import profile from "/profile.jpg"

export default function Overview() {
  
  return (
    <section className="h-100 d-flex align-items-center gap-3 py-5 mx-4 border-bottom border-2 border-black">
      <img src={profile} alt="Faris Hasan Profile" height={250} width={250} style={{ borderRadius: "50%" }} />
      <div className="d-flex flex-column">
        <h1>Faris Hasan</h1>
        <h4>Full Stack Developer</h4>
        <p className="lh-md">Self-learned full stack web developer with training from Binar Academy Bootcamp, graduated in June 2024. I&apos;d like to build web app with JavaScript language. Seeking to be challenged by developing web/app with efficient, well-structured, easily maintainable and readable, clean code.</p>
      </div>
    </section>
  )
}
