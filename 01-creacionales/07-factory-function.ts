/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

type Language = "es" | "en" | "fr";

//i18n
function createGeeter(lang: Language) {
  return function (name: string) {
    const messages = {
      es: `Hola ${name}`,
      en: `Hello ${name}`,
      fr: `Bounjour ${name}`,
    };

    return console.log(messages[lang]);
  };
}

function main() {
  const frenchGreeter = createGeeter("fr");
  const englishGreeter = createGeeter("en");
  const spanishGreeter = createGeeter("es");

  frenchGreeter("Sebastian");
  englishGreeter("Sebastian");
  spanishGreeter("Sebastian");
}

main();
