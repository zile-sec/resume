"use client"

import { motion } from "framer-motion"
import { Award, Calendar } from "lucide-react"
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
      period: "2025 - Present",
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
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="experience" className="py-16">
      <h2 className="text-4xl font-bold text-gradient-blue-green mb-2">Experience</h2>
      <div className="w-20 h-1 bg-gradient-blue-green mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
            <Calendar className="text-primary-500 dark:text-primary-400" size={24} />
            Work Experience
          </h3>
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-l-4 border-gradient-blue-green group hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <h4 className="text-xl font-bold text-gradient-blue-green">{exp.title}</h4>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-slate-600 dark:text-slate-300 font-medium">{exp.company}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{exp.period}</p>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4">{exp.description}</p>

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
                      className="mt-2 text-primary-600 border-primary-200 hover:border-primary-300 hover:bg-primary-50 group-hover:border-primary-300 transition-all"
                    >
                      <Award className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                  </CertificateModal>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Award className="text-primary-500" size={24} />
            Education & Certifications
          </h3>
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gradient-blue-green group hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <h4 className="text-xl font-bold text-gradient-blue-green">{edu.degree}</h4>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-slate-600 font-medium">{edu.institution}</p>
                  <p className="text-sm text-slate-500">{edu.period}</p>
                </div>
                <p className="text-slate-700 mb-4">{edu.description}</p>

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
                      className="mt-2 text-primary-600 border-primary-200 hover:border-primary-300 hover:bg-primary-50 group-hover:border-primary-300 transition-all"
                    >
                      <Award className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                  </CertificateModal>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
