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

import project1a from "./assets/projects/project1-a.png"
import project1b from "./assets/projects/project1-b.png"
import project1c from "./assets/projects/project1-c.png"
import project2a from "./assets/projects/project2-a.png"
import project2b from "./assets/projects/project2-b.png"

import project3a from "./assets/projects/project3-a.png"
import project3b from "./assets/projects/project3-b.png"
import project3c from "./assets/projects/project3-c.png"
import project3d from "./assets/projects/project3-d.png"

import cert1 from "./assets/certificates/1.png"
import cert2 from "./assets/certificates/2.png"
import certMagang from "./assets/certificates/magang.jpg"
import certPddikti from "./assets/certificates/Sertifikat PDDIKTI.png"

import logo from "./assets/bigaby-logo.png"

const sections = ["lobby", "about", "pengalaman", "projects", "skills", "certificates"]

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

    {/* LOGO WATERMARK */}
<div className="fixed top-6 left-6 z-50 opacity-60">
  <img
    src={logo}
    alt="BIGABY Logo"
    className="w-24 h-24 object-contain grayscale hover:opacity-90 transition duration-500"
  />
</div>

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
          {active === "certificates" && (
            <DoorTransition>
              <CertificatesSection />
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

  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)

  const projects = [

    {
      title: "Project Parkiran menggunakan Face Recognition",
      desc: "Project kecil yang berfungsi untuk mempermudah keluarnya jalur antrian parkiran menggunakan teknologi face recognition.",
      details: `
Project ini dibuat untuk mempercepat proses keluar kendaraan di area parkiran dengan menggunakan sistem Face Recognition.

Fitur utama:
• Sistem identifikasi wajah pengguna
• Verifikasi otomatis kendaraan
• Integrasi dengan database parkir
• Mengurangi antrian kendaraan

Teknologi yang digunakan:
• Python
• OpenCV
• Face Recognition Model
• Database System
      `,
      images: [project1a, project1b, project1c],
      github: "https://drive.google.com/file/d/1yR3ONM684rsJQ_FduYiJTMj1Fu8pkJC4/view?usp=sharing"
    },

    {
      title: "BIG - Quran (Murotal & Al-Quran Web)",
      desc: "Website Al-Quran digital dengan fitur membaca Al-Quran dan memutar murotal audio secara online.",
      details: `
BIG - Quran adalah website Al-Quran digital yang saya kembangkan menggunakan React.

Fitur utama:
• Membaca Al-Quran digital
• Audio murotal per ayat
• Navigasi antar surat
• Bookmark ayat
• UI modern dan responsif

Teknologi yang digunakan:
• React
• Vite
• API Al-Quran
• Audio Player System
      `,
      images: [project2a, project2b],
      github: "https://abyanlaksono.github.io/big-quran/#/"
    },

    {
      title: "FiveM Modding & Server Development",
      desc: "Pengembangan modding FiveM termasuk PED modding, server system development, dan store modding.",
      details: `
Project ini berfokus pada pengembangan modding dan sistem server untuk platform FiveM.

Fokus pengembangan:
• Modding Character PED
• Server Development
• Custom Script Server
• Asset Modding

Store yang dikembangkan:
BIGABY STORE

Statistik:
• 203 Members telah berlangganan
• FiveM Modding
• Server Development
• Custom Asset Store

Project ini digunakan oleh komunitas server roleplay untuk meningkatkan pengalaman bermain FiveM.
      `,
      images: [project3a, project3b, project3c, project3d],
      github: "https://bigaby-store.example.com"
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
            onClick={() => {
              setSelectedProject(project)
              setCurrentImage(0)
            }}
            className="bg-[#2c1d14] border border-amber-900 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition cursor-pointer"
          >

            <img
              src={project.images[0]}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 space-y-3">

              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-amber-200 text-sm">
                {project.desc}
              </p>

              <span className="text-amber-400 text-sm">
                Go to the page →
              </span>

            </div>

          </motion.div>

        ))}

      </div>



      {/* MODAL PROJECT DETAIL */}

      <AnimatePresence>
        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
          >

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-[#2c1d14] border border-amber-800 rounded-xl p-8 max-w-4xl w-full shadow-2xl"
            >

              {/* HEADER */}

              <div className="flex justify-between items-center mb-6">

                <h3 className="text-2xl font-bold text-amber-300">
                  {selectedProject.title}
                </h3>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-amber-400 hover:text-white"
                >
                  Close
                </button>

              </div>


              {/* IMAGE SLIDER */}

              <div className="relative mb-6">

                <img
                  src={selectedProject.images[currentImage]}
                  className="w-full h-80 object-cover rounded-lg"
                />

                {/* PREV */}

                <button
                  onClick={() =>
                    setCurrentImage(
                      (currentImage - 1 + selectedProject.images.length) %
                      selectedProject.images.length
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 px-4 py-2 rounded"
                >
                  ◀
                </button>

                {/* NEXT */}

                <button
                  onClick={() =>
                    setCurrentImage(
                      (currentImage + 1) % selectedProject.images.length
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 px-4 py-2 rounded"
                >
                  ▶
                </button>

              </div>


              {/* DESCRIPTION */}

              <p className="text-amber-200 whitespace-pre-line leading-relaxed">
                {selectedProject.details}
              </p>


              {/* LINK */}

              <div className="mt-6">

                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="text-amber-400 hover:underline"
                >
                  Open Project →
                </a>

              </div>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

    </div>
  )
}

/* ================= CERTIFICATES ================= */

function CertificatesSection() {

  const certificates = [
    {
      title: "Certificate 1",
      issuer: "Training / Course",
      year: "2026",
      image: cert1,
      link: cert1
    },
    {
      title: "Certificate 2",
      issuer: "Training / Course",
      year: "2026",
      image: cert2,
      link: cert2
    },
    {
      title: "Sertifikat Magang",
      issuer: "Universitas Pendidikan Indonesia",
      year: "2026",
      image: certMagang,
      link: certMagang
    },
    {
      title: "Sertifikat PDDIKTI",
      issuer: "Universitas Pendidikan Indonesia",
      year: "2025",
      image: certPddikti,
      link: certPddikti
    }
  ]

  return (
    <div className="max-w-6xl w-full space-y-16">

      <h2 className="text-4xl font-bold text-center text-amber-300">
        Certificates
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-[#2c1d14] border border-amber-900 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition"
          >

            <img
              src={cert.image}
              className="w-full h-64 object-cover"
            />

            <div className="p-6 space-y-3">

              <h3 className="text-xl font-semibold">
                {cert.title}
              </h3>

              <p className="text-amber-400 text-sm">
                {cert.issuer} • {cert.year}
              </p>

              <a
                href={cert.link}
                target="_blank"
                className="text-amber-400 text-sm hover:underline"
              >
                View Certificate →
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

  const [showAcademic, setShowAcademic] = useState(false)

  const skillGroups = [
    {
      title: "Bahasa Pemrograman",
      skills: [
        { name: "Python", level: 88 },
        { name: "C/C++", level: 92 },
        { name: "JavaScript", level: 85 },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML & CSS", level: 85 },
        { name: "React", level: 82 },
        { name: "Node.js", level: 80 },
        { name: "Authentication & Authorization", level: 80 },
      ],
    },
    {
      title: "Database & Data Management",
      skills: [
        { name: "MySQL / PostgreSQL", level: 88 },
        { name: "MongoDB / Redis", level: 82 },
        { name: "Normalisasi Database", level: 90 },
      ],
    },
    {
      title: "AI & Data Science",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 88 },
        { name: "Data Analysis (Pandas, NumPy)", level: 82 },
      ],
    },
  ]

  const academicSkills = [
    { code:"IK100", name:"Algoritma & Pemrograman 1", grade:"A" },
    { code:"IK160", name:"Algoritma & Pemrograman 2", grade:"A" },
    { code:"IK240", name:"Struktur Data", grade:"B+" },
    { code:"IK290", name:"Pemrograman Berorientasi Objek", grade:"A" },
    { code:"IK230", name:"Design & Pemrograman Web", grade:"B+" },
    { code:"IK170", name:"Sistem Basis Data", grade:"A" },
    { code:"IK380", name:"Database Non Relational", grade:"B+" },
    { code:"IK532", name:"Deep Learning", grade:"A" },
    { code:"IK542", name:"Computer Vision", grade:"A" },
    { code:"IK505", name:"Data Mining & Warehouse", grade:"A" },
  ]

  return (

    <div className="max-w-6xl w-full space-y-16">

      <h2 className="text-4xl font-bold text-center text-amber-300">
        Skills & Expertise
      </h2>

      {/* BUTTON OPEN WINDOW */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowAcademic(true)}
          className="px-6 py-3 bg-amber-700 hover:bg-amber-600 rounded-lg text-sm uppercase tracking-wider shadow-lg transition"
        >
          View Academic Skill Parameters
        </button>
      </div>

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

      {/* MODAL WINDOW */}
      <AnimatePresence>
        {showAcademic && (

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          >

            <motion.div
              initial={{ scale:0.8 }}
              animate={{ scale:1 }}
              exit={{ scale:0.8 }}
              className="bg-[#2c1d14] border border-amber-800 rounded-xl p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            >

              <div className="flex justify-between items-center mb-6">

                <h3 className="text-2xl font-bold text-amber-300">
                  Academic Skill Parameters
                </h3>

                <button
                  onClick={()=>setShowAcademic(false)}
                  className="text-amber-400 hover:text-white"
                >
                  Close
                </button>

              </div>

              <table className="w-full text-sm">

                <thead className="text-amber-400 border-b border-amber-700">
                  <tr>
                    <th className="py-2">Code</th>
                    <th>Course</th>
                    <th>Grade</th>
                  </tr>
                </thead>

                <tbody>

                  {academicSkills.map((course,i)=>(
                    <tr
                      key={i}
                      className="border-b border-amber-900 hover:bg-amber-900/20"
                    >
                      <td className="py-2">{course.code}</td>
                      <td>{course.name}</td>
                      <td>{course.grade}</td>
                    </tr>
                  ))}

                </tbody>

              </table>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

    </div>
  )
}
