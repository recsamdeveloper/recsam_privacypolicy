const TermsAndConditions = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleToggle = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: 1,
      title: "Aceptación de los Términos",
      content: "Al descargar, instalar o utilizar la aplicación ReCSaM...",
      references: ["Código de Comercio, artículo 89 (2024)"],
    },
    // Add other sections following the same structure
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Términos y Condiciones de Uso de la Aplicación ReCSaM
      </h1>

      {sections.map((section) => (
        <div key={section.id} className="mb-6 border-b border-gray-200">
          <div
            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
            onClick={() => handleToggle(section.id)}
          >
            <h2 className="text-xl font-semibold text-gray-700">
              {section.id}. {section.title}
            </h2>
            <span className="text-gray-500">
              {expandedSection === section.id ? "−" : "+"}
            </span>
          </div>

          {expandedSection === section.id && (
            <div className="px-4 pb-4 text-gray-600">
              <p className="mb-4">{section.content}</p>
              <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  Referencias:
                </h3>
                <ul className="list-disc pl-6">
                  {section.references.map((ref, index) => (
                    <li key={index} className="text-blue-700 text-sm">
                      {ref}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Contacto</h2>
        <p className="text-gray-600">
          Para cualquier consulta:{" "}
          <a
            href="mailto:soporte@recsam.com"
            className="text-blue-600 hover:underline"
          >
            soporte@recsam.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
