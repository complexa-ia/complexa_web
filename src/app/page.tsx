import { LandingHome } from "@/components/landing/LandingHome";
import { ComingSoon } from "@/components/coming-soon/ComingSoon";
import { MOSTRAR_HOME } from "@/lib/site";

export default function HomePage() {
  return MOSTRAR_HOME ? <LandingHome /> : <ComingSoon />;
}
