export default function Page() {

    const skillsets = [
        "React",
        "Next.js",
        "MUI",
        "Tailwind",
        "Javascript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Wordpress",
        "ChatGPT",
        "Copilot X"
      ];

      const projectManagementTools = ["Trello", "Gantt"];

      return (
        <section className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 py-12 rounded-lg shadow-lg bg-zinc-800 pt-12 pb-12">
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-amber-600 sm:text-4xl sm:leading-10">
            Litt om meg
          </h2>
          <p className="mt-3 max-w-2xl text-l leading-7 text-gray-400 sm:mt-4 text-left">

            Hei, jeg heter Heine Günther. Etter en variert karriere innen mat og
            logistikk, bestemte jeg meg for å bytte karrierevei og har nylig
            fullført utdannelsen min som Front End Developer. Selv om det kan virke
            som et stort hopp, ser jeg likhetstrekk som kreativitet, nysgjerrighet
            for å kontinuerlig lære og prøve nye metoder, godt samarbeid, presisjon,
            tidsstyring og å holde kundene fornøyde. Gjennom å bygge de ulike
            elementene sammen, skaper jeg nå nettsider, i stedet for matretter!
          </p>
          <p className="mt-3 max-w-2xl text-l leading-7 text-gray-400 sm:mt-4 text-left">

            Jeg ser etter å bli med i et team der jeg kan bidra med mine ferdigheter
            og fortsette å lære mer fra andre.
          </p>
          <p className="mt-3 max-w-2xl text-l leading-7 text-gray-400 sm:mt-4 text-left">

            Sjekk ut noen av prosjektene mine og ta kontakt i kontaktskjemaet, bare følg kontakt knappen. Jeg ser fra til å høre fra deg!.
          </p>
          <h4 className="mt-8 text-2xl leading-8 font-extrabold tracking-tight text-amber-600 sm:text-3xl sm:leading-9">
            Ferdigheter:
          </h4>
          <p className="mt-3 max-w-2xl mx-auto text-l leading-7 text-gray-400 sm:mt-4 text-left">
            {skillsets.join(", ")}
          </p>
          <h4 className="mt-8 text-2xl leading-8 font-extrabold tracking-tight text-amber-600 sm:text-3xl sm:leading-9">
            Verktøy for prosjektstyring:
          </h4>
          <p className="mt-3 max-w-2xl mx-auto text-l leading-7 text-gray-400 sm:mt-4 text-left">
            {projectManagementTools.join(", ")}
          </p>
        </div>
      </section>
      
      );
}
