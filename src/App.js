import logo from "./logo.svg";
import "./App.css";

const section2 = [
  "ReCSaM no sustituye el juicio clínico ni la responsabilidad profesional del usuario",
  "Los resultados generados por la Aplicación son una guía que debe ser revisada y validada por el profesional antes de su uso.",
  "La Aplicación no proporciona diagnósticos ni tratamientos automáticos y no reemplaza la consulta directa con un profesional de salud mental. ",
];

const section3 = [
  "Utilizar la Aplicación únicamente para fines profesionales relacionados con la salud mental.",
  "No utilizar la Aplicación para actividades que violen leyes locales, éticas profesionales o reglamentaciones aplicables.",
  "Obtener el consentimiento informado de sus pacientes antes de registrar cualquier información personal o clínica en la Aplicación.",
  "No compartir, divulgar o transferir información confidencial recopilada a través de la Aplicación a terceros sin la autorización expresa del paciente, salvo cuando lo requiera la ley.",
];

const section4 = [
  "La implementación de medidas de seguridad técnicas y organizativas para proteger los datos personales registrados.",
  "La garantía de que los datos recopilados son utilizados exclusivamente para los fines establecidos en la Aplicación.",
  "La responsabilidad del usuario de salvaguardar sus credenciales de acceso y proteger el dispositivo donde se utiliza la Aplicación.",
  "Aunque se toman medidas razonables para proteger los datos, no se garantiza inmunidad total frente a riesgos cibernéticos. ",
];

const section5 = [
  "La veracidad, precisión y actualización de los datos registrados en la Aplicación.",
  "Utilizar la Aplicación conforme a la ética profesional y las normativas legales aplicables.",
  "Reportar cualquier fallo o uso no autorizado de la Aplicación al equipo de soporte.",
];

const section6 = [
  "No se hacen responsables por el uso indebido de la Aplicación o por los daños derivados del manejo incorrecto de los datos por parte del usuario.",
  "No garantizan que la Aplicación estará libre de errores, interrupciones o fallas.",
  "No serán responsables por pérdidas o daños derivados del acceso no autorizado o uso malintencionado de la Aplicación.",
];

const section7 = [
  "Reproducir, modificar, distribuir o comercializar la Aplicación o cualquier parte de ella sin autorización expresa.",
  "Utilizar la Aplicación para crear productos derivados o copias.",
];

const section8 = [
  "Incumplimiento de los términos y condiciones.",
  "Uso fraudulento, ética o legalmente cuestionable de la Aplicación.",
];

const section10 = [
  "Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
  "Código Penal Federal (artículos 228-230).",
  "NOM-004-SSA3-2012 sobre expedientes clínicos.",
];

function App() {
  return (
    <div className="PrivacyPolicy">
      <h1 className="Title">
        Términos y Condiciones de Uso de la Aplicación ReCSaM
      </h1>
      <div>
        <h2 className="part1">1. Aceptación de los Términos</h2>
        <div className="part1content1">
          <p className="content1-1">
            Al descargar, instalar o utilizar la aplicación ReCSaM (en adelante,
            "la Aplicación"), el usuario acepta estar sujeto a estos términos y
            condiciones. Si no está de acuerdo con alguna disposición de estos
            términos, debe abstenerse de usar la Aplicación. Estos términos
            constituyen un contrato legal entre el usuario y los desarrolladores
            de ReCSaM.Referencia: Código de Comercio, artículo 89 (2024), que
            establece la validez de los contratos digitales aceptados mediante
            "clic".
          </p>
        </div>
      </div>
      <div>
        <h2 className="part1">2. Propósito de la Aplicación</h2>
        <div className="part1content1">
          <p className="content1-1">
            ReCSaM es una herramienta digital diseñada para facilitar la
            creación y gestión de resúmenes clínicos por parte de profesionales
            de la salud mental. Es importante destacar que:
          </p>
          <ul>
            {section2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="content1-1">
            Referencias: Secretaría de Salud. (2012). Norma Oficial Mexicana
            NOM-004-SSA3-2012. Recuperado de
            https://www.gob.mx/normasoficialesmexicanas; Ley General de Salud,
            artículo 87 (2024).
          </p>
        </div>
      </div>
      <div>
        <h2 className="part1">3. Uso Permitido</h2>
        <div className="part1content1">
          <p className="content1-1">
            El usuario de la Aplicación se compromete a:
          </p>
          <ul>
            {section3.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="content1-1">
            Referencias: Congreso de la Unión. (2010). Ley General de Protección
            de Datos Personales en Posesión de los Particulares. Recuperado de
            https://www.diputados.gob.mx; Código Penal Federal, artículo 228
            (2024).
          </p>
        </div>
      </div>
      <div>
        <h2 className="part1">4. Protección de Datos Personales</h2>
        <div className="part1content1">
          <p className="content1-1">
            ReCSaM cumple con la Ley Federal de Protección de Datos Personales
            en Posesión de los Particulares (LFPDPPP) y otras normativas
            aplicables, incluyendo:
          </p>
          <ul>
            {section4.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="content1-1">
            Referencias: Congreso de la Unión. (2010). Ley Federal de Protección
            de Datos Personales en Posesión de los Particulares. Recuperado de
            https://www.diputados.gob.mx; American Psychological Association.
            (2020). Ethical Principles of Psychologists and Code of Conduct.
            Recuperado de https://www.apa.org/ethics.
          </p>
        </div>
      </div>
      <div>
        <h2 className="part1">5. Responsabilidad del Usuario</h2>
        <div className="part1content1">
          <p className="content1-1">El usuario es responsable de:</p>
          <ul>
            {section5.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="content1-1">
            Referencia: Secretaría de Salud. (2012). Norma Oficial Mexicana
            NOM-004-SSA3-2012. Recuperado de
            https://www.gob.mx/normasoficialesmexicanas.
          </p>
        </div>
      </div>
      <div>
        <h2 className="part1">5. Responsabilidad del Usuario</h2>
        <div className="part1content1">
          <p className="content1-1">ReCSaM y sus desarrolladores:</p>
          <ul>
            {section6.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="content1-1">
            Referencia: Congreso de la Unión. (2024). Ley de Responsabilidad
            Profesional Médica, artículos 3 y 4. Recuperado de
            https://www.diputados.gob.mx.
          </p>
        </div>
      </div>
      <div>
        <h2 className="part1">7. Propiedad Intelectual</h2>
        <div className="part1content1">
          <p className="content1-1">
            La Aplicación, incluyendo su diseño, contenido y código fuente, es
            propiedad exclusiva de los desarrolladores de ReCSaM. Queda
            prohibido:
          </p>
          <ul>
            {section7.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="content1-1">
            Referencia: Congreso de la Unión. (2024). Ley Federal de Derecho de
            Autor, artículos 13 y 14. Recuperado de
            https://www.diputados.gob.mx.
          </p>
        </div>
      </div>
      <div>
        <h2 className="part1">8. Suspensión o Cancelación de Cuenta</h2>
        <div className="part1content1">
          <p className="content1-1">
            ReCSaM se reserva el derecho de suspender o cancelar el acceso de un
            usuario si se detecta:
          </p>
          <ul>
            {section8.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="content1-1">
            En caso de cancelación, los datos almacenados serán eliminados de
            acuerdo con la normativa vigente sobre protección de datos.
          </p>
        </div>
      </div>
      <div>
        <h2 className="part1">9. Cambios en los Términos</h2>
        <div className="part1content1">
          <p className="content1-1">
            Estos términos pueden ser modificados en cualquier momento para
            cumplir con nuevas regulaciones o adaptarse a mejoras en la
            Aplicación. Los usuarios serán notificados de cualquier cambio
            significativo a través de la Aplicación o correo electrónico.
          </p>
          <p className="content1-1">
            Referencia: Congreso de la Unión. (2024). Código de Comercio,
            artículo 89 BIS. Recuperado de https://www.diputados.gob.mx.
          </p>
        </div>
      </div>
      <div>
        <h2 className="part1">10. Legislación Aplicable</h2>
        <div className="part1content1">
          <p className="content1-1">
            Estos términos se rigen por las leyes mexicanas, incluyendo:
          </p>
          <ul>
            {section10.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="content1-1">
            Cualquier disputa será resuelta en los tribunales competentes de
            México.
          </p>
        </div>
      </div>
      <div>
        <h2 className="part1">11. Contacto</h2>
        <div className="part1content1">
          <p className="content1-1">
            Para cualquier consulta, duda o notificación relacionada con estos
            términos, puede comunicarse al correo electrónico:
            recsam.contact@gmail.com.
          </p>
        </div>
      </div>
      <span>&nbsp; </span>
      <h1 className="Title">Base</h1>
      <div>
        <h2 className="part1">1. Aceptación de los Términos</h2>
        <div className="part1content1">
          <h3 className="content1-1">Justificación:</h3>
          <p>
            Es fundamental establecer que el uso de la aplicación implica la
            aceptación de los términos y condiciones para proteger legalmente a
            los desarrolladores. Este apartado asegura que el usuario no pueda
            argumentar desconocimiento de las reglas de uso.
          </p>
        </div>
        <div className="part1content1">
          <h3 className="content1-1">Base Legal:</h3>
          <p>
            Ley de Comercio Electrónico (Código de Comercio, Artículo 89):
            Reconoce la validez de los contratos digitales aceptados mediante
            "clic".
          </p>
          <p>
            El Artículo 89 del Código de Comercio establece que en los actos de
            comercio y en su formación se pueden emplear medios electrónicos,
            ópticos o cualquier otra tecnología. Estas disposiciones son
            aplicables en toda la República Mexicana y regulan aspectos
            relacionados con el comercio electrónico, incluyendo la validez de
            la firma electrónica avanzada. Código de Comercio, actualizado en
            2024.
          </p>
        </div>
      </div>
      <br />
      <div>
        <h2 className="part1">2. Propósito de la Aplicación</h2>
        <div className="part1content1">
          <h3 className="content1-1">Justificación:</h3>
          <p>
            Dejar claro el propósito limita el uso indebido de la herramienta.
            Esto ayuda a prevenir demandas derivadas de malentendidos sobre las
            funciones o aplicaciones del software.
          </p>
        </div>
        <div className="part1content1">
          <h3 className="content1-1">Base Legal:</h3>
          <p>
            NOM-004-SSA3-2012: Regula el manejo de expedientes clínicos en
            México, incluyendo la elaboración de resúmenes clínicos.
          </p>
          <p>
            NOM-004-SSA3-2012 es una norma oficial mexicana que establece los
            criterios científicos, éticos, tecnológicos y administrativos
            obligatorios para la elaboración, uso, manejo y archivo del
            expediente clínico en el ámbito de la salud. Su objetivo es
            garantizar que la información de los pacientes sea tratada de manera
            adecuada y respetando sus derechos.
          </p>
          <p>
            Ley General de Salud (Artículo 87): Define las responsabilidades de
            los profesionales de la salud.{" "}
          </p>
          <p>
            El Artículo 87 de la Ley General de Salud establece que la
            prestación del servicio social de los pasantes de las profesiones
            para la salud debe realizarse conforme a las disposiciones legales
            aplicables y se orienta a garantizar la atención a la salud en las
            comunidades, incluyendo especial atención a los problemas de salud
            que se enumeran en otras disposiciones de la Ley.{" "}
          </p>
          <p>
            Secretaría de Salud (2021). Norma Oficial Mexicana
            NOM-004-SSA3-2012.
          </p>
        </div>
      </div>
      <br />
      <div>
        <h2 className="part1">3. Uso Permitido</h2>
        <div className="part1content1">
          <h3 className="content1-1">Justificación:</h3>
          <p>
            Definir lo que los usuarios pueden y no pueden hacer ayuda a
            garantizar que la herramienta no se utilice para actividades fuera
            de su alcance profesional o legales, como el uso inapropiado de
            datos de pacientes.
          </p>
        </div>
        <div className="part1content1">
          <h3 className="content1-1">Base Legal:</h3>
          <p>
            Ley General de Protección de Datos Personales en Posesión de los
            Particulares (LFPDPPP): Regula el manejo de datos personales
            sensibles.
          </p>
          <p>
            {" "}
            La Ley General de Protección de Datos Personales en Posesión de los
            Particulares (LFPDPPP) es una legislación mexicana que tiene como
            objetivo la protección de los datos personales en posesión de
            individuos y entidades privadas. Esta ley establece normas para el
            manejo y tratamiento de los datos personales, asegurando la
            privacidad y derechos de los titulares de dichos datos en toda la
            República. Es de orden público y debe ser observada de manera
            general por todos los particulares.
          </p>
          <p>
            Código Penal Federal (Artículo 228): Establece sanciones para
            quienes usen información de manera indebida.
          </p>
          <p>
            El Artículo 228 del Código Penal Federal establece que los
            profesionistas, artistas o técnicos y sus auxiliares son
            responsables de los delitos que cometan en el ejercicio de su
            profesión, en los términos que la ley señala. Esto implica que
            cualquier conducta delictiva realizada en el contexto de su
            actividad profesional puede conllevar sanciones penales.
          </p>
        </div>
      </div>
      <br />
      <div>
        <h2 className="part1">4. Protección de Datos Personales</h2>
        <div className="part1content1">
          <h3 className="content1-1">Justificación:</h3>
          <p>
            Los datos personales y clínicos de los pacientes son sensibles y
            están protegidos por leyes como la Ley General de Protección de
            Datos Personales. Este apartado establece las medidas de seguridad y
            el consentimiento informado, protegiendo tanto al desarrollador como
            al usuario de posibles demandas
          </p>
        </div>
        <div className="part1content1">
          <h3 className="content1-1">Base Legal:</h3>
          <p>
            Ley Federal de Protección de Datos Personales en Posesión de los
            Particulares (Artículos 15 y 16): Exige el consentimiento informado
            y medidas de seguridad para proteger datos.{" "}
          </p>
          <p>
            El Artículo 15 de la Ley Federal de Protección de Datos Personales
            en Posesión de los Particulares establece que el responsable debe
            informar a los titulares de los datos sobre la información que se
            recopila de ellos, así como los fines para los cuales se utiliza.
            Por su parte, el Artículo 16 se refiere a la obligación de obtener
            el consentimiento del titular para el tratamiento de sus datos,
            salvo excepciones específicas establecidas en la ley.{" "}
          </p>
          <p>
            Código de Ética de la APA (Sección 4.01): Establece principios
            éticos para el manejo de información confidencial.
          </p>
          <p>
            La Sección 4.01 del Código de Ética de la Asociación Americana de
            Psicología (APA) trata sobre "Informes y Testimonios". Esta sección
            enfatiza la importancia de que los psicólogos se adhieran a los
            estándares éticos al informar sobre sus hallazgos y conclusiones. Se
            espera que mantengan la precisión y la veracidad en sus informes y
            eviten la divulgación de información que pueda resultar en un daño a
            la dignidad o bienestar de las personas.
          </p>
          <p>
            American Psychological Association (2017). Código de Ética de la
            APA.
          </p>
        </div>
      </div>
      <br />
      <div>
        <h2 className="part1">5. Responsabilidad del Usuario</h2>
        <div className="part1content1">
          <h3 className="content1-1">Justificación:</h3>
          <p>
            Este apartado delimita que la responsabilidad de ingresar y manejar
            correctamente los datos recae sobre el usuario, no sobre la
            aplicación. De esta manera, se mitigan los riesgos de ser
            considerados responsables por malas prácticas de los usuarios.
          </p>
        </div>
        <div className="part1content1">
          <h3 className="content1-1">Base Legal:</h3>
          <p>
            NOM-004-SSA3-2012: Define que el profesional debe garantizar la
            precisión y confidencialidad de los expedientes clínicos.
          </p>
          <p>
            Establece los criterios científicos, éticos, tecnológicos y
            administrativos obligatorios para la elaboración, integración, uso,
            manejo y archivo del expediente clínico en México. Esta norma es
            fundamental para asegurar la correcta gestión de la información en
            el ámbito de la salud, promoviendo la protección de los derechos
            humanos y mejorando la calidad de la atención médica.
          </p>
        </div>
      </div>
      <br />
      <div>
        <h2 className="part1">6. Limitación de Responsabilidad</h2>
        <div className="part1content1">
          <h3 className="content1-1">Justificación:</h3>
          <p>
            Proteger a los desarrolladores de demandas relacionadas con fallas
            técnicas o mal uso de la aplicación es crucial. Este apartado
            delimita que no se garantiza un servicio perfecto ni la prevención
            de riesgos cibernéticos.
          </p>
        </div>
        <div className="part1content1">
          <h3 className="content1-1">Base Legal:</h3>
          <p>
            Ley de Responsabilidad Profesional Médica (Artículos 3 y 4): Permite
            limitar la responsabilidad siempre que se haga explícito y no
            incluya negligencia intencional.
          </p>
          <p>
            Establece que los profesionales de la salud tienen la obligación de
            asistir y atender a las personas cuya vida se encuentre en peligro,
            considerando que su principal objetivo es salvaguardar la vida y la
            salud de los individuos. Esto implica una serie de deberes
            inherentes al acto médico, así como la obligación de seguir las
            mejores prácticas.
          </p>
        </div>
      </div>
      <br />
      <div>
        <h2 className="part1">7. Uso Permitido</h2>
        <div className="part1content1">
          <h3 className="content1-1">Justificación:</h3>
          <p>
            Los derechos de autor y la propiedad intelectual de la aplicación
            deben estar protegidos para evitar copias, modificaciones no
            autorizadas o uso indebido del software.
          </p>
        </div>
        <div className="part1content1">
          <h3 className="content1-1">Base Legal:</h3>
          <p>
            Ley Federal de Derecho de Autor (Artículos 13 y 14): Protege el
            software como una obra creativa.
          </p>
          <p>
            Los Artículos 13 y 14 de la Ley Federal del Derecho de Autor de
            México se refieren a los derechos morales y patrimoniales de los
            autores. El Artículo 13 establece que los derechos morales son
            irrenunciables y permiten al autor proteger la integridad de su obra
            y su nombre. Mientras tanto, el Artículo 14 se centra en los
            derechos patrimoniales, indicando que el autor tiene el derecho
            exclusivo de explotar su obra y recibir regalías por su uso, así
            como a otorgar licencias a terceros.
          </p>
        </div>
      </div>
      <br />
      <div>
        <h2 className="part1">8. Uso Permitido</h2>
        <div className="part1content1">
          <h3 className="content1-1">Justificación:</h3>
          <p>
            Este término asegura que la aplicación pueda suspender el acceso a
            usuarios que infrinjan las reglas, protegiendo la seguridad de los
            datos y el correcto funcionamiento de la herramienta.
          </p>
        </div>
        <div className="part1content1">
          <h3 className="content1-1">Base Legal:</h3>
          <p>
            Ley de Protección al Consumidor (Artículo 76 BIS): Permite
            establecer condiciones de uso y suspensión en servicios digitales
            siempre que se notifique previamente.
          </p>
          <p>
            El Artículo 76 BIS de la Ley de Protección al Consumidor establece
            que los proveedores que ofrecen bienes, productos o servicios a
            través de medios electrónicos deben informar claramente sobre
            precios, tarifas, garantías, dimensiones, calidades y demás
            características relevantes. Además, deben respetar esta información
            y asegurar su veracidad, para proteger los derechos de los
            consumidores.
          </p>
        </div>
      </div>
      <br />
      <div>
        <h2 className="part1">9. Uso Permitido</h2>
        <div className="part1content1">
          <h3 className="content1-1">Justificación:</h3>
          <p>
            Permitir modificaciones a los términos asegura que la aplicación
            pueda adaptarse a nuevas normativas legales o a la evolución de su
            uso, sin afectar la continuidad del servicio.
          </p>
        </div>
        <div className="part1content1">
          <h3 className="content1-1">Base Legal:</h3>
          <p>
            Código de Comercio (Artículo 89 BIS): Permite modificar contratos
            digitales unilateralmente, con notificación adecuada al usuario.
          </p>
          <p>
            El Artículo 89 Bis del Código de Comercio establece que no se
            negarán efectos jurídicos, validez o fuerza obligatoria a cualquier
            tipo de información únicamente por la razón de que no esté
            formalmente documentada.
          </p>
        </div>
      </div>
      <br />
      <div>
        <h2 className="part1">10. Uso Permitido</h2>
        <div className="part1content1">
          <h3 className="content1-1">Justificación:</h3>
          <p>
            Establecer la jurisdicción protege a los desarrolladores de demandas
            en otras localidades o países y asegura que cualquier controversia
            sea regulada por las leyes locales.
          </p>
        </div>
        <div className="part1content1">
          <h3 className="content1-1">Base Legal:</h3>
          <p>
            Código Penal Federal (Título Decimosegundo, Capítulo I): Regula las
            responsabilidades profesionales.
          </p>
          <p>
            El Título Decimosegundo del CPF se titula "Responsabilidad
            Profesional". En este título se establecen las responsabilidades
            profesionales de las personas que cometen delitos.{" "}
          </p>
          <p>
            Ley Federal de Protección de Datos Personales: Establece
            jurisdicción para casos relacionados con la privacidad.
          </p>
          <p>
            La Ley Federal de Protección de Datos Personales en Posesión de los
            Particulares (LFPDPPP) tiene como objetivo principal la protección
            de los datos personales que están en poder de los particulares.
          </p>
        </div>
      </div>
      <span>&nbsp; </span>
      <h1 className="Title">EXPEDIENTES CLÍNICOS</h1>
      <h2>(Legal, Metodológico y Ético)</h2>
      <div>
        <div className="part1content1">
          <p className="content1-1">
            Toda persona de nacionalidad mexicana tiene derecho de acceso al
            Resumen Clínico en Salud, establecido en la Norma Oficial Mexicana
            NOM-004-SSA3-20121, DEL EXPEDIENTE CLINICO, conteniendo seis
            aspectos: padecimiento actual, diagnósticos, tratamientos,
            evolución, pronóstico y estudios de laboratorio y gabinete.
          </p>
          <p>
            La Metodología Diagnostica2 basada en cuatro contenidos: frecuencia,
            temporalidad, costo emocional/funcionalidad y diagnóstico
            diferencial. Organizada la funcionalidad y el costo emocional de
            acuerdo al WHODAS.023
          </p>
          <p>
            Consentimiento Libre e Informado4 los derechos de los clientes
            establecidos en los artículos 74 y 75 bis de la Ley General de la
            Salud, La información contenida en el Resumen Clínico de Salud
            Mental ReCSaM se conservarán por cinco años a partir de la última
            fecha de tratamiento. Manteniendo la confidencialidad de los datos
            de acuerdo a los lineamientos del Principio de Confidencialidad del
            Código de Ética de la Asociación Americana de Psicología (APA)5.
            Garantizando que los servicios que proporcionamos son siempre
            elegidos sobre el consentimiento libre e informado, al proporcionar
            información relativa a los tratamientos y servicios proporcionados
            de manera clara, comprensible y verídica.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
