import Image from "next/image";
import Navbar from "@/components/Navbar";
import FadeIn from '@/components/FadeIn';
import { servicesMetadata } from '../metadata';

export const metadata = servicesMetadata;

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section avec style Google/Apple */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute right-[-10%] top-1/3 w-[600px] h-[600px] transform rotate-12">
              <div className="w-full h-full bg-gradient-to-br from-[#1a73e8]/[0.02] dark:from-[#8ab4f8]/[0.02] to-transparent rounded-[40px]" />
            </div>
          </div>

          <FadeIn>
            <div className="max-w-[800px] mx-auto text-center relative z-10">
              <h1 className="text-[44px] md:text-[80px] leading-[1.1] font-medium mb-8">
                Solutions
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#1a73e8] to-[#8ab4f8] dark:from-[#8ab4f8] dark:to-[#1a73e8]">
                  cloud natives
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-[640px] mx-auto mb-12">
                Des applications modernes et évolutives pour transformer votre entreprise
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Services Section avec style Material Design 3 */}
        <FadeIn delay={200}>
          <section className="py-32 px-4 bg-gray-50/50 dark:bg-black/[0.2]">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  {
                    title: "Cloud Native",
                    subtitle: "Applications modernes",
                    description: "Architecture microservices, conteneurisation et orchestration pour des applications hautement disponibles et scalables.",
                    features: [
                      "Microservices",
                      "Kubernetes",
                      "Service Mesh",
                      "Auto-scaling",
                      "High Availability",
                      "Zero Downtime"
                    ],
                    image: "/services/cloud-native.svg"
                  },
                  {
                    title: "DevOps",
                    subtitle: "Automatisation complète",
                    description: "Intégration et déploiement continus, infrastructure as code et monitoring pour une livraison optimale.",
                    features: [
                      "CI/CD Pipelines",
                      "Infrastructure as Code",
                      "Monitoring & Alerting",
                      "SRE Practices",
                      "Cost Optimization",
                      "Security First"
                    ],
                    image: "/services/devops.svg"
                  }
                ].map((service, index) => (
                  <div key={index} className="group">
                    <div className="aspect-[4/3] rounded-[32px] overflow-hidden mb-8">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-sm text-[#1a73e8] dark:text-[#8ab4f8] font-medium mb-2">
                      {service.subtitle}
                    </h3>
                    <h2 className="text-3xl font-medium mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] dark:bg-[#8ab4f8]" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section avec style Material You */}
        <FadeIn delay={300}>
          <section className="py-32 px-4">
            <div className="max-w-[800px] mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-medium mb-8">
                Prêt à moderniser votre infrastructure ?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Discutons de votre projet et trouvons ensemble la meilleure solution
              </p>
              <a
                href="/#contact"
                className="inline-flex px-12 py-4 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-lg font-medium transition-colors"
              >
                Démarrer un projet →
              </a>
            </div>
          </section>
        </FadeIn>
      </main>
    </>
  );
} 