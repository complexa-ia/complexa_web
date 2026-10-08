export const CONTACTO = {
  email: "complexa.ia@gmail.com",
  telefono: "+54 9 11 3031-7884",
  whatsappUrl: "https://wa.me/5491130317884",
};

export const whatsappLink = (mensaje: string) =>
  `${CONTACTO.whatsappUrl}?text=${encodeURIComponent(mensaje)}`;

// Mientras no haya proyectos que respalden cada servicio, la raíz muestra "Próximamente".
// Para ver el Home completo en local: NEXT_PUBLIC_SHOW_HOME=true en .env
export const MOSTRAR_HOME = process.env.NEXT_PUBLIC_SHOW_HOME === "true";
