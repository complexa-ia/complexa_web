import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { CONTACTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Complexa IA",
};

export default function TerminosPage() {
  return (
    <LegalPage
      titulo="Términos y Condiciones"
      actualizado="6 de octubre de 2026"
      secciones={[
        {
          titulo: "Aceptación",
          parrafos: [
            "Al acceder y utilizar el sitio www.complexa.com.ar (el \"Sitio\"), operado por Complexa IA, el usuario acepta estos Términos y Condiciones. Si no está de acuerdo con ellos, debe abstenerse de utilizar el Sitio.",
          ],
        },
        {
          titulo: "Objeto del Sitio",
          parrafos: [
            "El Sitio tiene fines informativos: presenta los servicios de desarrollo de software a medida, automatización de procesos, consultoría en inteligencia artificial y ciberseguridad que ofrece Complexa IA, y permite a los interesados ponerse en contacto.",
            "La información publicada no constituye una oferta vinculante. El alcance, los plazos y el precio de cada servicio se acuerdan por escrito y de forma individual con cada cliente.",
          ],
        },
        {
          titulo: "Uso del Sitio",
          parrafos: [
            "El usuario se compromete a utilizar el Sitio de forma lícita, a no enviar información falsa a través del formulario de contacto y a no intentar acceder sin autorización a áreas restringidas, sistemas o datos de Complexa IA o de terceros.",
          ],
        },
        {
          titulo: "Propiedad intelectual",
          parrafos: [
            "Los textos, diseños, logotipos, marcas y demás contenidos del Sitio pertenecen a Complexa IA o a sus respectivos titulares, y están protegidos por la legislación vigente. No pueden reproducirse ni utilizarse sin autorización previa y por escrito.",
            "Los casos de éxito se publican con el consentimiento de los clientes involucrados.",
          ],
        },
        {
          titulo: "Responsabilidad",
          parrafos: [
            "Complexa IA procura que la información del Sitio sea precisa y esté actualizada, pero no garantiza la ausencia de errores ni la disponibilidad ininterrumpida del Sitio. Complexa IA no será responsable por daños derivados del uso del Sitio o de la imposibilidad de acceder a él.",
            "Los enlaces a sitios de terceros se ofrecen solo como referencia; Complexa IA no controla ni se responsabiliza por su contenido.",
          ],
        },
        {
          titulo: "Datos personales",
          parrafos: [
            "El tratamiento de los datos personales que el usuario proporcione se rige por nuestra Política de Privacidad, disponible en www.complexa.com.ar/privacidad.",
          ],
        },
        {
          titulo: "Modificaciones",
          parrafos: [
            "Complexa IA puede modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entran en vigencia desde su publicación en el Sitio.",
          ],
        },
        {
          titulo: "Ley aplicable y jurisdicción",
          parrafos: [
            "Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Ante cualquier controversia, las partes se someten a los tribunales ordinarios competentes de la República Argentina.",
          ],
        },
        {
          titulo: "Contacto",
          parrafos: [
            `Para cualquier consulta sobre estos Términos y Condiciones, escribinos a ${CONTACTO.email} o por WhatsApp al ${CONTACTO.telefono}.`,
          ],
        },
      ]}
    />
  );
}
