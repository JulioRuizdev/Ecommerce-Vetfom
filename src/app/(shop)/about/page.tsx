import Image from "next/image";

export default function AboutPage(){
    return (
        <>
            <h1 className="text-center font-bold text-5xl">Sobre Nosotros</h1>

            <div className="flex justify-center my-8 ">
                <Image
                    src="/nosotros/bg-nosotros.jpg"
                    alt="banner"
                    className="w-full max-w-5xl rounded-lg"
                    width={500}
                    height={700}
                />
            </div>

            <section className="my-16 text-center">
                <h1 className="text-3xl font-bold mb-4">Quiénes Somos</h1>
                <p className="text-lg mx-auto max-w-4xl">
                    La veterinaria Vetfom es una empresa dedicada al cuidado de las mascotas,
                    trabajando en pro del bienestar de cada mascota. Desde entonces, nuestros primordiales
                    objetivos estuvieron encaminados a mejorar nuestros servicios, y muchos de estos objetivos son
                    la clave para otorgarle una mejor experiencia a nuestros clientes, como la atención médica para
                    mascotas, servicio de aseo de mascotas y venta de artículos y juguetes para mascotas, dando como
                    resultado el poder ofrecer a todos nuestros clientes un servicio integral atendido por nuestros
                    colaboradores dedicados a cumplir con sus requerimientos, todo esto con el fin de tratar a nuestros
                    pacientes como seres que merecen la mejor atención y especial cuidado.
                </p>
            </section>

            <section className="my-16 text-center">
                <h1 className="text-3xl font-bold mb-4">Nuestro Equipo</h1>
                <p className="text-lg mx-auto max-w-4xl">
                    Nuestro equipo está compuesto por apasionados amantes de los animales y profesionales altamente
                    calificados que están aquí para cuidar y tratar a sus mascotas como si fueran las nuestras.
                </p>
            </section>

            <section className="flex justify-center my-16">
                <div className="max-w-5xl flex flex-wrap items-center">
                    <div className="w-full md:w-1/2 text-center md:text-left p-4">
                        <h1 className="text-3xl font-bold mb-4">Misión</h1>
                        <p className="text-lg">
                            En la Clínica Veterinaria Vetfom, nuestra misión es proporcionar atención veterinaria
                            excepcional y compasiva a las mascotas de nuestros clientes. Nos dedicamos a mejorar
                            y mantener la salud y el bienestar de los animales que forman parte de nuestras familias.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <Image src="/nosotros/imagen-mision.png" alt="Misión" className="mx-auto"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>

            <section className="flex justify-center my-16">
                <div className="max-w-5xl flex flex-wrap items-center">
                    <div className="w-full md:w-1/2 p-4">
                        <Image src="/nosotros/imagen-vision.jpg" alt="Misión" className="mx-auto"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left p-4">
                        <h1 className="text-3xl font-bold mb-4">Visión</h1>
                        <p className="text-lg">
                            Nuestra visión es convertirnos en una de las veterinarias más enfocadas en la satisfacción
                            de los clientes mediante la inmediata atención en los servicios que ofrecemos.
                        </p>
                    </div>
                </div>
            </section>

            <section className="my-16 text-center">
                <h2 className="text-3xl font-bold mb-4">¿Qué ofrecemos?</h2>
                <div className="flex justify-center flex-wrap">
                    <div className="w-full md:w-1/2 p-4">
                    <Image
                            src="/nosotros/24horas.png"
                            alt="atencion24horas"
                            className="w-20 mx-auto mb-2"
                            width={500}
                            height={500}
                        />
                        <h3 className="text-xl font-bold">Atención Emergencia 24 hrs.</h3>
                        <p>Atendemos las 24 horas los 6 días de la semana, incluidos feriados.</p>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <Image
                            src="/nosotros/banopet.png"
                            alt="Servicio de aseo"
                            className="w-20 mx-auto mb-2"
                            width={500}
                            height={500}
                        />
                        <h3 className="text-xl font-bold">Aseo de mascotas</h3>
                        <p>
                            Engreímos a su mascota en nuestra peluquería canina, donde nuestros experimentados groomers
                            le ofrecerán un servicio de alta calidad.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-300 py-4 w-full rounded-t-lg">
                <div className="text-center">
                    <p>&copy; Derechos Reservados Vetfom</p>
                </div>
            </footer>
        </>
    );
}