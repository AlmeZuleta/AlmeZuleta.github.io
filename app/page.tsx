const timeline = [
  {
    phase: "Origen territorial",
    period: "1740",
    title: "Fundación de San Felipe el Real",
    text: "El Valle del Aconcagua se consolida como territorio agrícola y ganadero, con haciendas que articulan producción, vivienda, servicios, caminos interiores y vida comunitaria.",
  },
  {
    phase: "Paisaje hacendal",
    period: "Primeras décadas del siglo XIX",
    title: "Consolidación de las haciendas",
    text: "Propiedades como Lo Vicuña, El Tártaro y Quilpué fortalecen el prestigio social y económico de sus propietarios, al mismo tiempo que configuran el paisaje rural regional.",
  },
  {
    phase: "Familia y beneficencia",
    period: "1830",
    title: "Nacimiento de Juana Ross Edwards",
    text: "Nace en La Serena una figura central para la historia del palacio, reconocida por su vocación religiosa, filantrópica y de servicio social.",
  },
  {
    phase: "Proyecto arquitectónico",
    period: "1866-1880",
    title: "Construcción del Palacio Hacienda Quilpué",
    text: "El arquitecto Juan Eduardo Fehrman proyecta una residencia de inspiración francesa, excepcional para el contexto rural del Valle del Aconcagua.",
  },
  {
    phase: "Crisis sanitaria",
    period: "1886-1888",
    title: "Epidemia del cólera",
    text: "Juana Ross organiza ayuda sanitaria y social mediante lazaretos, alimentos, ropa, medicamentos y atención para trabajadores e inquilinos de la hacienda.",
  },
  {
    phase: "Reconocimiento social",
    period: "Primeras décadas del siglo XX",
    title: "Esplendor del palacio",
    text: "La residencia recibe visitas internacionales y consolida su imagen pública como el “Versalles Chileno”, asociada a lujo, jardines y sociabilidad aristocrática.",
  },
  {
    phase: "Transformación institucional",
    period: "1967-1973",
    title: "Traspaso, reforma agraria y proyecto universitario",
    text: "La propiedad pasa al Estado de Chile y se proyecta como centro de formación para Agronomía, iniciativa interrumpida por los acontecimientos políticos de 1973.",
  },
  {
    phase: "Deterioro material",
    period: "1985",
    title: "Demolición parcial",
    text: "Tras daños estructurales vinculados al terremoto, se retiran techumbre, chimeneas y parte de la estructura interior; luego desaparecen pisos, vigas, pilares y mobiliario.",
  },
  {
    phase: "Memoria vigente",
    period: "Actualidad",
    title: "Ruinas, memoria y actividades culturales",
    text: "Las ruinas permanecen como testimonio patrimonial de San Felipe y del Valle del Aconcagua, acogiendo algunas actividades culturales en los antiguos jardines.",
  },
];

const palaceThemes = [
  {
    title: "Arquitectura",
    value: "Estilo francés",
    text: "Su diseño monumental, atribuido a Juan Eduardo Fehrman, incorporó una organización espacial inspirada en modelos residenciales europeos de fines del siglo XIX.",
  },
  {
    title: "Espacios interiores",
    value: "Más de 100 habitaciones",
    text: "El palacio contó con salones amplios, dependencias de servicio, habitaciones y áreas destinadas a actividades sociales de gran escala.",
  },
  {
    title: "Entorno y jardines",
    value: "Alamedas y espejo de agua",
    text: "Los jardines, senderos y el espejo de agua reforzaban la puesta en escena del edificio y su relación visual con el paisaje del Aconcagua.",
  },
  {
    title: "Función productiva",
    value: "Hacienda agrícola",
    text: "Quilpué operó como centro agrícola vinculado a viñedos, cáñamo, trabajo rural, producción y redes económicas regionales.",
  },
];

const memoryItems = [
  "Las ruinas permiten leer las transformaciones sociales, productivas y políticas del territorio.",
  "La materialidad remanente conserva huellas de esplendor, abandono, deterioro e intervención humana.",
  "El sitio opera como espacio de memoria colectiva, encuentro comunitario y reflexión patrimonial.",
];

const archiveItems = [
  {
    id: "fachada",
    src: "/archive/hero-palacio-1915.jpg",
    title: "Parte delantera del palacio",
    caption: "Registro histórico del frente del Palacio Hacienda Quilpué, 1915.",
  },
  {
    id: "acceso",
    src: "/archive/acceso-palacio-1915.jpg",
    title: "Acceso al palacio",
    caption: "Cercanía, escala y ornamentación del acceso principal, año 1915.",
  },
  {
    id: "comunidad",
    src: "/archive/acceso-comunidad-1915.jpg",
    title: "Acceso y comunidad",
    caption: "Grupo reunido junto al acceso, evidencia de la vida social del recinto.",
  },
  {
    id: "jardines",
    src: "/archive/jardines-palacio-1915.jpg",
    title: "Jardines principales",
    caption: "Áreas exteriores asociadas al paseo, la representación y el paisaje.",
  },
  {
    id: "parrones",
    src: "/archive/parrones-palacio.jpg",
    title: "Parrones interiores",
    caption: "Imagen de los parrones como parte del ambiente doméstico y productivo.",
  },
  {
    id: "misiones",
    src: "/archive/misiones-religiosas-palacio.jpg",
    title: "Misiones religiosas",
    caption: "Actividades religiosas realizadas para la comunidad de San Felipe.",
  },
  {
    id: "familia",
    src: "/archive/retrato-familiar-duenos-1915.jpg",
    title: "Retrato familiar",
    caption: "Registro familiar realizado dentro del palacio, año 1915.",
  },
  {
    id: "infancias",
    src: "/archive/retrato-familiar-hijos-1915.jpg",
    title: "Infancias en el palacio",
    caption: "Retrato de hijos de propietarios, vinculado a la vida cotidiana del lugar.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Navegación principal">
        <a className="brand" href="#inicio">
          <span className="brand-logos">
            <img src="/archive/logo-uv.png" alt="Universidad de Valparaíso" />
            <img src="/archive/logo-postgrado-uv.png" alt="Postgrado UV" />
          </span>
          <span>Palacio Hacienda Quilpué</span>
        </a>
        <nav>
          <a href="#patrimonio">Patrimonio</a>
          <a href="#archivo">Archivo</a>
          <a href="#linea-tiempo">Línea de tiempo</a>
          <a href="#palacio">El palacio</a>
          <a href="#ruinas">Las ruinas</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Ruta de la memoria por las ruinas</p>
          <h1>Palacio Hacienda Quilpué</h1>
          <p className="hero-lead">
            Investigación patrimonial sobre el antiguo “Versalles Chileno”,
            su arquitectura, vida hacendal, transformaciones históricas y
            vigencia como espacio de memoria en San Felipe.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#patrimonio">
              Comenzar el recorrido
            </a>
            <span>Almendra Zuleta Díaz · Magíster en Patrimonio</span>
          </div>
        </div>
      </section>

      <section className="intro-band" aria-label="Datos del proyecto">
        <div>
          <span className="label">Autora</span>
          <strong>Almendra Zuleta Díaz</strong>
        </div>
        <div>
          <span className="label">Programa</span>
          <strong>Magíster en Patrimonio, Universidad de Valparaíso</strong>
        </div>
        <div>
          <span className="label">Caso de estudio</span>
          <strong>Ruinas del Palacio Hacienda Quilpué, San Felipe</strong>
        </div>
      </section>

      <section className="section" id="patrimonio">
        <div className="section-heading">
          <p className="eyebrow">Marco conceptual</p>
          <h2>¿Qué es patrimonio?</h2>
        </div>
        <div className="two-column">
          <p>
            El patrimonio corresponde al conjunto de bienes, lugares,
            tradiciones y conocimientos que una comunidad reconoce como parte
            de su historia e identidad. No se limita a lo monumental: también
            integra memorias, vínculos sociales, prácticas cotidianas y modos
            de habitar un territorio.
          </p>
          <p>
            En el caso del Palacio Hacienda Quilpué, el valor patrimonial se
            expresa tanto en la arquitectura remanente como en las historias
            asociadas al trabajo rural, la familia Edwards Ross, la
            transformación de las haciendas y la memoria actual de San Felipe.
          </p>
        </div>
      </section>

      <section className="section archive-section" id="archivo">
        <div className="section-heading wide">
          <p className="eyebrow">Archivo visual</p>
          <h2>Imágenes históricas del palacio</h2>
          <p>
            El recorrido incorpora registros fotográficos del Palacio Hacienda
            Quilpué asociados al periodo de esplendor del inmueble. Estas
            imágenes permiten observar el acceso, la fachada, los jardines, la
            sociabilidad familiar y las prácticas religiosas vinculadas al
            recinto.
          </p>
        </div>
        <div className="archive-grid">
          {archiveItems.map((item) => (
            <figure className="archive-card" key={item.src}>
              <a href={`#archivo-${item.id}`}>
                <img src={item.src} alt={item.title} />
              </a>
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="lightbox-collection" aria-label="Vista ampliada del archivo">
          {archiveItems.map((item) => (
            <aside
              className="lightbox"
              id={`archivo-${item.id}`}
              key={`lightbox-${item.id}`}
            >
              <a className="lightbox-backdrop" href="#archivo" aria-label="Cerrar imagen" />
              <figure>
                <a className="lightbox-close" href="#archivo" aria-label="Cerrar imagen">
                  Cerrar
                </a>
                <img src={item.src} alt={item.title} />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </figcaption>
              </figure>
            </aside>
          ))}
        </div>
      </section>

      <section className="section muted" id="linea-tiempo">
        <div className="section-heading wide">
          <p className="eyebrow">Proceso histórico</p>
          <h2>Línea de tiempo</h2>
          <p>
            El recorrido sitúa el palacio dentro de un proceso mayor: la
            formación de San Felipe, el auge agrícola del Valle del Aconcagua,
            la filantropía de Juana Ross Edwards, el esplendor del inmueble y
            su posterior transformación en ruina patrimonial.
          </p>
        </div>
        <ol className="timeline">
          {timeline.map((item, index) => (
            <li key={`${item.period}-${item.title}`}>
              <div className="timeline-rail" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <details className="timeline-card" open={index < 3}>
                <summary>
                  <div className="timeline-meta">
                    <span>{item.phase}</span>
                    <time>{item.period}</time>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <span className="timeline-toggle" aria-hidden="true" />
                  </div>
                </summary>
                <div className="timeline-detail">
                  <p>{item.text}</p>
                </div>
              </details>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" id="palacio">
        <div className="section-heading">
          <p className="eyebrow">Arquitectura y territorio</p>
          <h2>El palacio</h2>
        </div>
        <div className="feature-grid">
          {palaceThemes.map((item) => (
            <article className="feature-card" key={item.title}>
              <span>{item.title}</span>
              <h3>{item.value}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <div>
          <p>
            “Versalles Chileno” fue el nombre con que se reconoció la
            singularidad del palacio: una arquitectura de aspiración europea
            emplazada en un territorio profundamente agrícola.
          </p>
        </div>
      </section>

      <section className="section split" id="ruinas">
        <div className="section-heading">
          <p className="eyebrow">Patrimonio y memoria</p>
          <h2>Las ruinas en la actualidad</h2>
        </div>
        <div className="split-content">
          <div>
            <p>
              Tras décadas de uso, abandono, daños estructurales y demolición
              parcial, las ruinas constituyen el principal vestigio material de
              una de las residencias más relevantes del Valle del Aconcagua.
              Su valor no se agota en lo arquitectónico: también permite
              comprender cambios sociales, económicos y políticos que afectaron
              a las grandes haciendas chilenas.
            </p>
            <ul className="memory-list">
              {memoryItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className="context-panel">
            <span className="label">Ubicación</span>
            <strong>San Felipe, Región de Valparaíso</strong>
            <p>
              Su emplazamiento cercano a rutas agrícolas y a la red ferroviaria
              favoreció la circulación de productos, personas e ideas,
              conectando la hacienda con otros centros urbanos del país.
            </p>
          </aside>
        </div>
      </section>

      <section className="section muted">
        <div className="section-heading wide">
          <p className="eyebrow">Vida hacendal</p>
          <h2>Familia, trabajo y compromiso social</h2>
          <p>
            La historia del Palacio Hacienda Quilpué se vincula con la familia
            Edwards Ross y, especialmente, con Juana Ross Edwards. Su
            filantropía se expresó en hospitales, escuelas, iglesias, asilos y
            programas de ayuda social. Durante la epidemia del cólera, su
            respuesta articuló recursos sanitarios y asistencia para la
            comunidad y para los trabajadores de la hacienda.
          </p>
        </div>
        <div className="portrait-study">
          <img src="/archive/juana-ross.jpg" alt="Retrato de Juana Ross Edwards" />
          <div>
            <span className="label">Figura histórica</span>
            <h3>Juana Ross Edwards</h3>
            <p>
              Su figura permite vincular la historia arquitectónica del palacio
              con redes de filantropía, beneficencia y apoyo social durante el
              siglo XIX. El retrato funciona aquí como punto de entrada a una
              lectura patrimonial donde familia, territorio y memoria pública
              se cruzan.
            </p>
          </div>
        </div>
        <div className="research-columns">
          <article>
            <h3>La hacienda</h3>
            <p>
              Fue una propiedad agrícola relevante, con actividades vinculadas
              a viñedos, cáñamo, ganado, trabajo rural y redes productivas que
              aportaron al desarrollo económico de San Felipe.
            </p>
          </article>
          <article>
            <h3>La familia Edwards Ross</h3>
            <p>
              Su influencia política, económica y social marcó tanto la
              historia del inmueble como diversas obras de beneficencia en
              Chile.
            </p>
          </article>
          <article>
            <h3>El ferrocarril</h3>
            <p>
              La cercanía con la línea férrea fortaleció la conexión
              territorial y la comercialización de productos agrícolas del
              Valle del Aconcagua.
            </p>
          </article>
        </div>
      </section>

      <footer className="institutional-footer">
        <div className="footer-logos" aria-label="Instituciones">
          <img src="/archive/logo-uv.png" alt="Universidad de Valparaíso" />
          <img src="/archive/logo-postgrado-uv.png" alt="Postgrado UV" />
        </div>
        <div>
          <span className="label">Autora</span>
          <strong>Almendra Zuleta Díaz</strong>
          <p>Magíster en Patrimonio · Universidad de Valparaíso</p>
        </div>
      </footer>
    </main>
  );
}
