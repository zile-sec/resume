"use client"

import { motion } from "framer-motion"
import { Award, Calendar, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CertificateModal } from "@/components/certificate-modal"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Cybersecurity Intern",
      company: "Wilsescybersecurity",
      period: "August - November 2024",
      description:
        "Gained hands-on experience in managing complex cybersecurity challenges through the Global Cybersecurity Remote Internship Initiative, focusing on threat analysis, ethical hacking, and network security.",
      certificate: {
        title: "Global Cybersecurity Remote Internship Certificate",
        imageUrl: "/images/wilses-cert.png",
        issuer: "Wilses Cybersecurity Solutions",
        issueDate: "November 22, 2024",
      },
    },
    {
      title: "Brand Ambassador",
      company: "Smart Zambia",
      period: "2025",
      description:
        "Championing technological innovations and empowering regional initiatives to foster a dynamic tech community.",
    },
  ]

  const education = [
    {
      degree: "Bachelor's Degree in Cybersecurity",
      institution: "ZCAS University",
      period: "2023 - Present",
      description:
        "Currently pursuing a comprehensive education in cybersecurity principles, network defense, ethical hacking, and security management.",
    },
    {
      degree: "Google Africa Developer Program",
      institution: "Google",
      period: "2022",
      description:
        "Completed the Google Africa Developer Program, earning a Cloud Engineering Certificate with focus on cloud infrastructure and security.",
    },
    {
      degree: "Cisco Networking Certification",
      institution: "Cisco Networking Academy",
      period: "July 2023",
      description:
        "Completed the Networking Basics course, gaining proficiency in network communication concepts, protocols, IP addressing, and secure network configuration.",
      certificate: {
        title: "Cisco Networking Basics Certificate",
        imageUrl: "/images/cisco-networking-cert.png",
        issuer: "Cisco Networking Academy",
        issueDate: "July 17, 2023",
      },
    },
    {
      degree: "Cisco Cybersecurity Certification",
      institution: "Cisco Networking Academy",
      period: "June 2023",
      description:
        "Completed the Introduction to Cybersecurity course, learning about online safety, common cyber threats, protection methods, and cybersecurity career paths.",
      certificate: {
        title: "Cisco Introduction to Cybersecurity Certificate",
        imageUrl: "/images/cisco-cybersec-cert.png",
        issuer: "Cisco Networking Academy",
        issueDate: "June 20, 2023",
      },
    },
    {
      degree: "Digital Communication Certification",
      institution: "Cisco Networking Academy",
      period: "2023",
      description:
        "Completed training in digital communication principles and practices, enhancing skills in secure information exchange and communication protocols.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section id="experience" className="py-16">
      <h2 className="text-4xl font-bold text-gradient-blue-green mb-2">Experience</h2>
      <div className="w-20 h-1 bg-gradient-blue-green mb-12"></div>

      <div className="space-y-16">
        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
              <Briefcase className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Work Experience</h3>
          </div>

          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-500 hidden md:block" />

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div key={index} className="relative flex gap-6" variants={itemVariants}>
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-white border-4 border-blue-500 items-center justify-center z-10">
                    <span className="text-sm font-bold text-blue-500">{index + 1}</span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 px-6 py-4 border-b border-slate-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-xl font-bold text-slate-800">{exp.title}</h4>
                        <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 bg-white px-3 py-1 rounded-full">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-blue-600 font-medium mt-1">{exp.company}</p>
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                      {exp.certificate && (
                        <CertificateModal
                          title={exp.certificate.title}
                          imageUrl={exp.certificate.imageUrl}
                          issuer={exp.certificate.issuer}
                          issueDate={exp.certificate.issueDate}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4 text-blue-600 border-blue-200 hover:border-blue-300 hover:bg-blue-50 bg-transparent"
                          >
                            <Award className="mr-2 h-4 w-4" />
                            View Certificate
                          </Button>
                        </CertificateModal>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education & Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Education & Certifications</h3>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 px-6 py-4 border-b border-slate-100">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-lg font-bold text-slate-800 leading-tight">{edu.degree}</h4>
                      {edu.certificate && <Award className="flex-shrink-0 text-green-500" size={20} />}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <p className="text-green-600 font-medium text-sm">{edu.institution}</p>
                      <span className="text-xs text-slate-500 bg-white px-2 py-0.5 rounded-full w-fit">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <p className="text-slate-600 text-sm leading-relaxed">{edu.description}</p>
                  {edu.certificate && (
                    <CertificateModal
                      title={edu.certificate.title}
                      imageUrl={edu.certificate.imageUrl}
                      issuer={edu.certificate.issuer}
                      issueDate={edu.certificate.issueDate}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 text-green-600 border-green-200 hover:border-green-300 hover:bg-green-50 bg-transparent"
                      >
                        <Award className="mr-2 h-4 w-4" />
                        View Certificate
                      </Button>
                    </CertificateModal>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
