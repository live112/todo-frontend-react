import { animationStyles } from "@styles/animationStyles";
import { BackgroundElements } from "@components/landing/backgroundElements";
import { Button, Link } from "@heroui/react";
import { GlassCard } from "@components/landing/glassCard";
import { LandingNavbar } from "@components/landing/landingNavbar";

export function Home() {
  const features = [
    {
      title: "Recordatorios Inteligentes",
      description:
        "Recibe notificaciones en el momento perfecto para no olvidar tus tareas importantes.",
    },
    {
      title: "Seguimiento de Hábitos",
      description:
        "Crea y mantén hábitos saludables con estadísticas visuales de tu progreso.",
    },
    {
      title: "Organización Eficiente",
      description:
        "Gestiona tus tareas diarias con categorías, prioridades y fechas límite.",
    },
  ];

  return (
    <>
      <style>{animationStyles}</style>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
        <BackgroundElements />

        <section className="relative min-h-screen flex flex-col">
          <LandingNavbar />
          <div className="flex-1 flex items-center justify-center px-6 py-8">
            <div className="text-center max-w-5xl mx-auto">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-slate-900 dark:text-white mb-4">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    ToDo
                  </span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
                Tu compañero perfecto para gestionar tareas, crear recordatorios
                y desarrollar hábitos saludables. Organiza tu vida de manera
                simple y efectiva.
              </p>

              {/* Botón de descarga principal */}
              <div className="mb-12">
                <Button
                  as={Link}
                  href={`${import.meta.env.BASE_URL}downloads/todo.apk`}
                  download
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Descargar ToDo APK
                </Button>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
                  Compatible con Android 8.0 o superior
                </p>
              </div>

              {/* Características de la app */}
              <div className="max-w-4xl mx-auto mt-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
                  Características principales
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <GlassCard key={index}>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>

              {/* Descripción detallada */}
              <div className="max-w-3xl mx-auto mt-12">
                <GlassCard>
                  <div className="p-8 text-left">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      Sobre ToDo
                    </h3>
                    <div className="space-y-4 text-slate-600 dark:text-slate-400">
                      <p>
                        ToDo es una aplicación móvil diseñada para ayudarte a
                        mantener el control de tu vida diaria. Con una interfaz
                        intuitiva y funcionalidades potentes, podrás gestionar
                        todas tus actividades de manera eficiente.
                      </p>
                      <p>
                        <strong className="text-slate-900 dark:text-white">
                          Gestión de Tareas:
                        </strong>{" "}
                        Crea, edita y organiza tus tareas con facilidad. Asigna
                        prioridades, establece fechas límite y categoriza tus
                        actividades para mantener todo en orden.
                      </p>
                      <p>
                        <strong className="text-slate-900 dark:text-white">
                          Recordatorios Personalizados:
                        </strong>{" "}
                        Configura notificaciones para que nunca olvides una
                        tarea importante. Elige la fecha y hora exacta, o deja
                        que ToDo te recuerde en el momento ideal.
                      </p>
                      <p>
                        <strong className="text-slate-900 dark:text-white">
                          Seguimiento de Hábitos:
                        </strong>{" "}
                        Desarrolla y mantén hábitos positivos con nuestro
                        sistema de seguimiento. Visualiza tu progreso con
                        estadísticas detalladas y mantén la motivación día a
                        día.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="container mx-auto max-w-7xl px-6 py-12">
            <div className="text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
                Descarga ToDo y comienza a organizar tu vida hoy mismo
              </p>

              <div className="flex justify-center items-center gap-3">
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  © 2025 ToDo App
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
