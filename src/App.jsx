import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaInstagram } from "react-icons/fa"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

import myStanding from "./assets/myStanding.png"
import almamater from "./assets/almamater.png"
import upiLogo from "./assets/UPI-logo.png"

import portfolio from "./assets/projects/propject.png"

const sections = ["lobby", "about", "pengalaman", "projects", "skills"]

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

const upiIcon = new L.Icon({
  iconUrl: upiLogo,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
})

/* ================= TYPING ================= */

function TypingText() {
  const roles = [
    "Web Developer",
    "Game Developer",
    "Blender Modder",
    "System Builder",
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={roles[index]}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="text-amber-400"
      >
        {roles[index]}
      </motion.span>
    </AnimatePresence>
  )
}

/* ================= APP ================= */

export default function App() {
  const [active, setActive] = useState("lobby")

  const DoorTransition = ({ children }) => (
    <motion.div
      key={active}
      initial={{ rotateY: -90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: 90, opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen flex items-center justify-center px-6"
      style={{ perspective: 2000 }}
    >
      {children}
    </motion.div>
  )

  return (
    <div className="bg-[#1a120b] text-[#f5e6d3] min-h-screen relative overflow-hidden font-serif">

      {/* Vintage Glow */}
      <div className="absolute w-[600px] h-[600px] bg-amber-900/20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-orange-800/20 blur-3xl rounded-full bottom-[-200px] right-[-200px]" />

      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#2c1d14]/80 backdrop-blur-md border border-amber-900 rounded-full px-10 py-4 z-50 shadow-xl">
        <div className="flex gap-8 text-sm uppercase tracking-widest">
          {sections.map(sec => (
            <button
              key={sec}
              onClick={() => setActive(sec)}
              className={`transition ${
                active === sec
                  ? "text-amber-400"
                  : "text-amber-200 hover:text-white"
              }`}
            >
              {sec}
            </button>
          ))}
        </div>
      </nav>

      <div className="pt-32">
        <AnimatePresence mode="wait">
          {active === "lobby" && (
            <DoorTransition>
              <LobbySection />
            </DoorTransition>
          )}
          {active === "about" && (
            <DoorTransition>
              <AboutSection />
            </DoorTransition>
          )}
          {active === "pengalaman" && (
            <DoorTransition>
              <PengalamanSection />
            </DoorTransition>
          )}
          {active === "projects" && (
            <DoorTransition>
              <ProjectsSection />
            </DoorTransition>
          )}
          {active === "skills" && (
            <DoorTransition>
              <SkillsSection />
            </DoorTransition>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ================= LOBBY ================= */

function LobbySection() {
  return (
    <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-6"
      >

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
         MUHAMMAD ABYAN <br /> LAKSONO
        </h1>

        <p className="text-xl">
          <TypingText />
        </p>

        <div className="flex gap-4 pt-6">
          <a
            href="https://www.instagram.com/aby.ael/"
            target="_blank"
            className="w-12 h-12 border border-amber-700 rounded-full flex items-center justify-center hover:border-amber-400 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/AbyanLaksono"
            target="_blank"
            className="w-12 h-12 border border-amber-700 rounded-full flex items-center justify-center hover:border-amber-400 transition"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >
        <motion.img
          src={myStanding}
          alt="Profile"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-[420px] h-[520px] object-cover sepia contrast-110 brightness-90 rounded-xl shadow-2xl"
        />
      </motion.div>
    </div>
  )
}

/* ================= ABOUT ================= */

function AboutSection() {
  const aboutData = [
    {
      title: "Who",
      subtitle: "Siapa",
      content: `Nama saya Muhammad Abyan Laksono. 
Saya adalah mahasiswa angkatan 2023 jurusan Ilmu Komputer di Universitas Pendidikan Indonesia (UPI). 
Saya merupakan lulusan pesantren dan memiliki kemampuan berbahasa Inggris, Arab, Sunda, Indonesia, serta Korea.`,
    },
    {
      title: "What",
      subtitle: "Apa",
      content: `Saya memiliki minat utama di bidang design dan creative development. 
Saya fokus pada Blender (3D modeling & modding), Adobe Photoshop (desain grafis), serta Web Development. 
Saya juga memiliki kemampuan Back-End development (masih berkembang 😄).`,
    },
    {
      title: "Where",
      subtitle: "Di mana",
      content: `Saat ini saya tinggal di Katumiri Grand Hills, Jl. Cihanjuang, Bandung Barat, Jawa Barat, Indonesia, 
dan menjalani perkuliahan di Kota Bandung.`,
    },
    {
      title: "When",
      subtitle: "Kapan",
      content: `Saya mulai berkuliah di UPI pada tahun 2023 dan saat ini aktif mengembangkan kemampuan akademik 
maupun non-akademik di bidang teknologi dan desain.`,
    },
    {
      title: "Why",
      subtitle: "Mengapa",
      content: `Saya memilih Ilmu Komputer karena tertarik dengan perkembangan teknologi digital. 
Saya ingin menggabungkan kreativitas desain dengan kemampuan teknis pemrograman untuk menciptakan 
solusi digital yang inovatif dan bermanfaat.`,
    },
    {
      title: "How",
      subtitle: "Bagaimana",
      content: `Saya belajar secara mandiri, mengerjakan berbagai proyek desain & modding, 
mengeksplorasi web development, serta berlatih Back-End coding. 
Di luar akademik, saya bermain game dan basket untuk menjaga keseimbangan kreativitas dan fisik.`,
    },
  ]

  return (
    <div className="max-w-6xl w-full space-y-16">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-amber-300"
      >
        About Me — 5W1H
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">

        {aboutData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              rotateX: -6,
              rotateY: 6,
              scale: 1.03,
            }}
            viewport={{ once: true }}
            className="relative p-8 rounded-2xl backdrop-blur-xl
                       bg-white/5 border border-amber-700/30
                       shadow-[0_0_40px_rgba(251,191,36,0.15)]
                       transition-all duration-300 cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >

            {/* Glow Background */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br
                            from-amber-500/10 via-orange-400/5 to-amber-600/10
                            blur-xl opacity-70" />

            <div className="relative z-10 space-y-4">

              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-amber-300">
                  {item.title}
                </h3>
                <span className="text-sm text-amber-500 tracking-widest">
                  {item.subtitle}
                </span>
              </div>

              <p className="text-amber-100 leading-relaxed whitespace-pre-line">
                {item.content}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  )
}

/* ================= PENGALAMAN ================= */

function PengalamanSection() {
  const experiences = [
    {
      title: "Asisten Dosen Algoritma dan Pemrograman",
      year: "2023",
      desc: "Membantu praktikum Dosen untuk mengajarkan Mahasiswa tentang pemrograman dasar menggunakan bahasa C/C++."
    },
    {
      title: "Asisten Dosen Sistem Basis Data",
      year: "2024",
      desc: "Membantu praktikum Dosen untuk mengajarkan Mahasiswa tentang konsep basis data, SQL, dan manajemen data menggunakan MySQL."
    },
    {
      title: "Organisasi - Anggota BEM KEMAKOM",
      year: "2024 - 2025",
      desc: "Aktif dalam organisasi kemahasiswaan BEM KEMAKOM UPI dibidang Pengembangan Organisasi, berkontribusi dalam berbagai kegiatan dan program kerja untuk meningkatkan kualitas kehidupan kampus."
    },
    {
      title: "Organisasi - Ketua Pelaksana PLASA (Pelantikan Anggota Biasa BEM KEMAKOM UPI)",
      year: "2024 - 2025",
      desc: "Mengelola pelaksanaan kegiatan PLASA (Pelantikan Anggota Biasa BEM KEMAKOM UPI) dengan memastikan semua proses berjalan lancar dan sesuai dengan rencana."
    },
    {
      title: "Magang - Pusat Data Universitas Pendidikan Indonesia",
      year: "2025 (Oktober - Maret)",
      desc: "Tim Evaluasi dan Revisi atas Enterprise Architecture (EA) dan Proses Bisnis Pangkalan Data Pendidikan Tinggi (PDDikti) di Universitas Pendidikan Indonesia."
    },
  ]

  return (
    <div className="max-w-5xl w-full">
      <h2 className="text-4xl font-bold mb-12 text-center text-amber-300">
        Pengalaman
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-[#2c1d14] border border-amber-900 p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-amber-400 text-sm">{exp.year}</p>
            <p className="text-amber-200 mt-2">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ================= PROJECTS ================= */

function ProjectsSection() {

  const projects = [
    {
      title: "Project Parkiran menggunakan Face Recognition",
      desc: "Project kecil yang berfungsi untuk mempermudah keluarnya jalur Antrian parkiran dengan menggunakan teknologi face recognition.",
      image: "/projects/propject.png",
      github: "https://drive.google.com/file/d/1yR3ONM684rsJQ_FduYiJTMj1Fu8pkJC4/view?usp=sharing"
    }
  ]

  return (
    <div className="max-w-6xl w-full space-y-16">

      <h2 className="text-4xl font-bold text-center text-amber-300">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-[#2c1d14] border border-amber-900 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition"
          >

            <img
              src={project.image}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-amber-200 text-sm">
                {project.desc}
              </p>

              <a
                href={project.github}
                target="_blank"
                className="text-amber-400 text-sm hover:underline"
              >
                View Project →
              </a>
            </div>

          </motion.div>
        ))}

      </div>

    </div>
  )
}

/* ================= SKILLS ================= */

function SkillsSection() {
  const skillGroups = [
    {
      title: "Bahasa Pemrograman",
      skills: [
        { name: "Python", level: 70 },
        { name: "C/C++", level: 90 },
        { name: "JavaScript", level: 70 },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML & CSS", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 70 },
        { name: "Authentication & Authorization", level: 72 },
      ],
    },
    {
      title: "Database & Data Management",
      skills: [
        { name: "MySQL / PostgreSQL", level: 60 },
        { name: "MongoDB / Redis", level: 60 },
        { name: "Normalisasi Database", level: 85 },
      ],
    },
    {
      title: "AI & Data Science",
      skills: [
        { name: "Machine Learning", level: 65 },
        { name: "Deep Learning", level: 60 },
        { name: "Data Analysis (Pandas, NumPy)", level: 75 },
      ],
    },
  ]

  return (
    <div className="max-w-6xl w-full space-y-16">

      <h2 className="text-4xl font-bold text-center text-amber-300">
        Skills & Expertise
      </h2>

      {skillGroups.map((group, index) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-semibold text-amber-200 border-b border-amber-800 pb-2">
            {group.title}
          </h3>

          <div className="space-y-6">
            {group.skills.map((skill, i) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm text-amber-100">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="w-full bg-[#2c1d14] rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: i * 0.2 }}
                    className="h-3 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.6)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

    </div>
  )
}