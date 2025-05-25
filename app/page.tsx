import Image from "next/image";
import { ChevronRight, Clock, MapPin, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/whatsapp-button";
import MobileNav from "@/components/mobile-nav";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/pk.jpg"
              alt="Mr. Harto's Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-amber-600">Mr. Harto</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#home" className="text-amber-600 hover:text-amber-700">
                  Home
                </a>
              </li>
              {/* <li>
                <a href="#about" className="hover:text-amber-600">
                  About
                </a>
              </li> */}
              <li>
                <a href="#menu" className="hover:text-amber-600">
                  Menu
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-600">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <a
              href="https://wa.me/+628112656584?text=Hello Pak. Harto! Saya mau mie ayam."
              target="_blank"
            ></a>
          </Button>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative bg-amber-50 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-amber-800 md:text-5xl lg:text-6xl">
                  Kedai Mie Ayam
                </h1>
                <p className="mb-6 text-lg text-amber-700">
                  Rasakan cita rasa yang kaya dari resep mi ayam terkenal dari
                  Pak Harto, yang dibuat dengan cinta dan tradisi sejak tahun
                  1985.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    <a href="#menu" className="text-white">
                      View Our Menu
                    </a>
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  >
                    <a
                      href="https://wa.me/+628112656584?text=Hello Pak. Harto! Saya mau mie ayam."
                      target="_blank"
                      className="text-amber-600 hover:text-amber-700"
                    >
                      Order Now
                    </a>
                  </Button>
                </div>
                <div className="mt-8 flex items-center space-x-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    Over 100+ happy customers
                  </span>
                </div>
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
                <Image
                  src="/pk.jpg"
                  alt="Delicious Chicken Noodles"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-amber-800 md:text-4xl">Our Story</h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                The journey of Mr. Harto's Chicken Noodle Shop began with a passion for authentic flavors.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Mr. Harto in his kitchen"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-2xl font-bold text-amber-700">From Family Recipe to Local Favorite</h3>
                <p className="mb-4 text-gray-600">
                  Mr. Harto started his culinary journey in his small home kitchen, perfecting a chicken noodle recipe
                  passed down through generations. What began as a small food cart in 1985 has now grown into one of the
                  most beloved noodle shops in the area.
                </p>
                <p className="mb-6 text-gray-600">
                  Our secret lies in the perfect balance of spices, fresh ingredients, and the special broth that
                  simmers for hours to achieve its rich flavor. Every bowl is served with the same care and attention to
                  detail that Mr. Harto has maintained for over three decades.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-amber-50 p-4">
                    <h4 className="mb-2 font-semibold text-amber-700">Fresh Ingredients</h4>
                    <p className="text-sm text-gray-600">We source only the freshest ingredients daily.</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-4">
                    <h4 className="mb-2 font-semibold text-amber-700">Traditional Recipe</h4>
                    <p className="text-sm text-gray-600">Our recipes have been perfected over generations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Menu Section */}
        <section id="menu" className="bg-amber-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-amber-800 md:text-4xl">
                Menu Kami
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Temukan pilihan hidangan mi ayam dan lauk pauk lezat kami.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Mie Ayam",
                  description: "Mie ayam dengan kuah kaldu spesial",
                  price: "Rp.8.000",
                  image: "/mieayam.jpg",
                },
                {
                  name: "Es teh",
                  description: "Es teh manis segar",
                  price: "Rp.2.000",
                  image: "/esteh.jpg",
                },
                {
                  name: "Sundukan",
                  description: "Sundukan telur puyuh",
                  price: "Rp.3.000",
                  image: "/sundukan.jpg",
                },
                // {
                //   name: "Crispy Chicken Wings",
                //   description: "Perfectly fried wings with our secret spice blend.",
                //   price: "$7.99",
                //   image: "/placeholder.svg?height=300&width=400",
                // },
                // {
                //   name: "Chicken Dumplings",
                //   description: "Handmade dumplings filled with chicken and herbs.",
                //   price: "$6.99",
                //   image: "/placeholder.svg?height=300&width=400",
                // },
                // {
                //   name: "Special Family Bowl",
                //   description: "Large portion to share, serves 3-4 people.",
                //   price: "$24.99",
                //   image: "/placeholder.svg?height=300&width=400",
                // },
              ].map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-bold text-amber-700">{item.name}</h3>
                      <span className="text-lg font-semibold text-amber-600">
                        {item.price}
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="mt-12 text-center">
              <Button className="bg-amber-600 hover:bg-amber-700">
                View Full Menu
              </Button>
            </div> */}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-amber-800 md:text-4xl">
                Apa Kata Pelanggan Kami
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Jangan hanya percaya kata-kata kami - dengarkan kepuasan
                pelanggan kami.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Jokowi",
                  comment:
                    "Mie ayam terenak yang pernah saya makan! Kuahnya sangat lezat dan mie-nya dimasak dengan sempurna.",
                  rating: 5,
                },
                {
                  name: "Prabowo",
                  comment:
                    "Saya sudah datang ke sini selama bertahun-tahun dan kualitasnya tidak pernah menurun. Mr. Harto's adalah harta karun lokal!",
                  rating: 5,
                },
                {
                  name: "Anis",
                  comment:
                    "Mie ayam pedas adalah makanan kesukaan saya. Harganya sepadan!",
                  rating: 4,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-amber-50 p-6 shadow-sm"
                >
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4 italic text-gray-600">
                    {testimonial.comment}
                  </p>
                  <div className="font-semibold text-amber-700">
                    {testimonial.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-amber-800 py-16 text-white md:py-24"
        >
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  Kunjungi Kami Sekarang
                </h2>
                <p className="mb-8">
                  Kami ingin menyajikan mi ayam lezat kami untuk Anda. Kunjungi
                  toko kami.
                </p>
                <div className="mb-6 grid gap-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-amber-300" />
                    <span>Kedai Utama Mr. Harto</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-amber-300" />
                    <span>+62 811-2656-584</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-amber-300" />
                    <div>
                      <p>Setiap Hari : 10:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-white text-amber-800 hover:bg-amber-100">
                  <li>
                    <a
                      href="https://maps.app.goo.gl/Yx6jPHkpU8qfMKns8?g_st=ac"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lokasi
                    </a>
                  </li>
                </Button>
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
                <Image
                  src="/pk.jpg"
                  alt="Mr. Harto's Restaurant"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-amber-900 py-8 text-amber-100">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src="/pk.jpg"
                  alt="Mr. Harto's Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">Mr. Harto</span>
              </div>
              <p className="text-sm">
                Menyajikan mie ayam asli sejak tahun 1985. Komitmen kami
                terhadap kualitas dan tradisi berlanjut hingga hari ini
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="grid gap-2 text-sm">
                <li>
                  <a href="#home" className="hover:text-amber-300">
                    Home
                  </a>
                </li>
                {/* <li>
                  <a href="#about" className="hover:text-amber-300">
                    About
                  </a>
                </li> */}
                <li>
                  <a href="#menu" className="hover:text-amber-300">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-amber-300">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-amber-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
              <p className="mb-4 text-sm">
                Ikuti kami di media sosial untuk mendapatkan informasi terkini,
                penawaran khusus, dan konten di balik layar.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-amber-300">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-amber-300">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-amber-300">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-amber-800 pt-6 text-center text-sm">
            <p>
              © {new Date().getFullYear()} Mie ayam Mr. Harto. All rights
              reserved. By Muhammad Noviyanto
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton
        phoneNumber="628112656584"
        message="Hello Pak. Harto! Saya mau mie ayam."
      />
    </div>
  );
}
