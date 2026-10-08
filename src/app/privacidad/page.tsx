import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { CONTACTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad | Complexa IA",
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      titulo="Política de Privacidad"
      actualizado="6 de octubre de 2026"
      secciones={[
        {
          titulo: "Responsable",
          parrafos: [
            `Complexa IA es responsable del tratamiento de los datos personales recolectados a través de www.complexa.com.ar. Contacto: ${CONTACTO.email}.`,
          ],
        },
        {
          titulo: "Datos que recolectamos",
          parrafos: [
            "A través del formulario de contacto recolectamos el nombre, el correo electrónico y la descripción del proyecto que el usuario decide compartir. Si nos escribís por WhatsApp o por email, también recibimos los datos que nos envíes por esos medios.",
          ],
        },
        {
          titulo: "Finalidad",
          parrafos: [
            "Usamos estos datos únicamente para responder consultas, preparar propuestas comerciales y dar seguimiento a la relación con potenciales clientes. No los usamos para otros fines ni los vendemos, alquilamos o cedemos a terceros.",
          ],
        },
        {
          titulo: "Almacenamiento y seguridad",
          parrafos: [
            "Los datos se almacenan en servicios de infraestructura en la nube con medidas de seguridad técnicas y organizativas razonables para protegerlos contra accesos no autorizados, pérdida o alteración. Para enviar notificaciones por correo electrónico utilizamos proveedores externos que procesan los datos solo con ese fin.",
          ],
        },
        {
          titulo: "Derechos del titular",
          parrafos: [
            `De acuerdo con la Ley 25.326 de Protección de los Datos Personales, el titular puede solicitar en cualquier momento el acceso, la rectificación, la actualización o la supresión de sus datos escribiendo a ${CONTACTO.email}. El derecho de acceso puede ejercerse en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo.`,
            "La Agencia de Acceso a la Información Pública, en su carácter de órgano de control de la Ley 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.",
          ],
        },
        {
          titulo: "Conservación",
          parrafos: [
            "Conservamos los datos mientras sean necesarios para la finalidad para la que fueron recolectados, o hasta que el titular solicite su eliminación.",
          ],
        },
        {
          titulo: "Cambios en esta política",
          parrafos: [
            "Podemos actualizar esta Política de Privacidad. La versión vigente es siempre la publicada en esta página, con su fecha de última actualización.",
          ],
        },
      ]}
    />
  );
}
