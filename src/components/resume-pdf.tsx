import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from '@react-pdf/renderer'
import PAST_ROLES from '@/data/experience'

const colors = {
  primary: '#1a1a1a',
  accent: '#c1121f',
  secondary: '#555555',
  light: '#888888',
  background: '#ffffff',
  border: '#e0e0e0',
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background,
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 50,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
    color: colors.primary,
  },
  header: {
    marginTop: 0,
    marginBottom: 20,
    paddingBottom: 15,
    borderBottom: `2px solid ${colors.accent}`,
  },
  name: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    letterSpacing: 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    color: colors.accent,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: 9,
    color: colors.secondary,
    marginTop: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactSeparator: {
    marginHorizontal: 8,
    color: colors.light,
  },
  contactLink: {
    color: colors.accent,
    textDecoration: 'none',
  },
  contactLabel: {
    color: colors.light,
    marginRight: 4,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 10,
    borderBottom: `1px solid ${colors.border}`,
    paddingBottom: 4,
  },
  summaryText: {
    fontSize: 10,
    color: colors.secondary,
    lineHeight: 1.6,
  },
  experienceItem: {
    marginBottom: 14,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  companyRole: {
    flex: 1,
  },
  companyName: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
  },
  roleName: {
    fontSize: 10,
    color: colors.accent,
    fontFamily: 'Helvetica-Bold',
    marginTop: 2,
  },
  dateRange: {
    fontSize: 9,
    color: colors.light,
    textAlign: 'right',
  },
  experienceDescription: {
    fontSize: 9,
    color: colors.secondary,
    marginTop: 4,
    marginBottom: 6,
  },
  accomplishmentsList: {
    paddingLeft: 12,
  },
  accomplishment: {
    fontSize: 9,
    color: colors.primary,
    marginBottom: 3,
    lineHeight: 1.5,
  },
  bullet: {
    color: colors.accent,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 6,
  },
  techTag: {
    fontSize: 8,
    backgroundColor: '#f5f5f5',
    color: colors.secondary,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 2,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillCategory: {
    width: '33%',
    marginBottom: 10,
    paddingRight: 10,
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
    marginBottom: 4,
  },
  skillList: {
    fontSize: 9,
    color: colors.secondary,
    lineHeight: 1.6,
  },
  twoColumn: {
    flexDirection: 'row',
    gap: 20,
  },
  column: {
    flex: 1,
  },
  educationItem: {
    marginBottom: 8,
  },
  educationTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
  },
  educationDetails: {
    fontSize: 9,
    color: colors.secondary,
    marginTop: 2,
  },
  footer: {
    position: 'absolute',
    bottom: 25,
    left: 50,
    right: 50,
    textAlign: 'center',
    fontSize: 8,
    color: colors.light,
    borderTop: `1px solid ${colors.border}`,
    paddingTop: 10,
  },
})

const skills = {
  'Languages & Frameworks':
    'TypeScript, JavaScript, Go, React, Next.js, Node.js, Express, Fastify',
  'Databases & Storage': 'PostgreSQL, MongoDB, MySQL, Redis, InfluxDB',
  'Cloud & DevOps': 'AWS, GCP, Docker, Nginx, Turborepo, Git, CI/CD',
  Specialized: 'MQTT, Keycloak, Grafana, Real-time Systems, IoT',
}

export function ResumePDF() {
  return (
    <Document
      title="Shane Williams - Senior Full-Stack Software Engineer"
      author="Shane Williams"
      subject="Resume / CV"
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>SHANE WILLIAMS</Text>
          <Text style={styles.title}>Senior Full-Stack Software Engineer</Text>
          <View style={styles.contactRow}>
            <Text>Ireland (Remote Worldwide)</Text>
            <Text style={styles.contactSeparator}>•</Text>
            <Link src="mailto:shane@shawilly.dev" style={styles.contactLink}>
              shane@shawilly.dev
            </Link>
            <Text style={styles.contactSeparator}>•</Text>
            <Text>+353 83 362 6936</Text>
            <Text style={styles.contactSeparator}>•</Text>
            <Link
              src="https://linkedin.com/in/shanebarrywilliams"
              style={styles.contactLink}
            >
              LinkedIn
            </Link>
            <Text style={styles.contactSeparator}>•</Text>
            <Link
              src="https://github.com/shawilly"
              style={styles.contactLink}
            >
              GitHub
            </Link>
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>
            Senior Full-Stack Software Engineer with 5+ years of experience
            architecting and delivering enterprise-grade production systems. I
            bring a proven track record of building scalable IoT platforms,
            internal tooling, and microservices. Currently leading technical
            initiatives at ResourceKraft, processing real-time data from
            thousands of IoT devices. Previously contributed to BioRender&apos;s
            growth, building tools that support 4M+ scientists globally.
            Passionate about developer experience, clean architecture, and
            systems that scale.
          </Text>
        </View>

        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsGrid}>
            {Object.entries(skills).map(([category, skillList]) => (
              <View key={category} style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>{category}</Text>
                <Text style={styles.skillList}>{skillList}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Professional Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {PAST_ROLES.filter(
            (role) => role.company !== 'Open Source & Freelance',
          ).map((role, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <View style={styles.companyRole}>
                  <Text style={styles.companyName}>{role.company}</Text>
                  <Text style={styles.roleName}>{role.role}</Text>
                </View>
                <Text style={styles.dateRange}>
                  {role.startDate} – {role.endDate}
                </Text>
              </View>
              <Text style={styles.experienceDescription}>
                {role.description}
              </Text>
              <View style={styles.accomplishmentsList}>
                {role.accomplishments.map((accomplishment, i) => (
                  <Text key={i} style={styles.accomplishment}>
                    <Text style={styles.bullet}>• </Text>
                    {accomplishment}
                  </Text>
                ))}
              </View>
              {role.technologies && (
                <View style={styles.techStack}>
                  {role.technologies.map((tech, i) => (
                    <Text key={i} style={styles.techTag}>
                      {tech}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Open Source & Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Open Source & Side Projects</Text>
          <View style={styles.accomplishmentsList}>
            <Text style={styles.accomplishment}>
              <Text style={styles.bullet}>• </Text>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>
                react-simple-devicons
              </Text>{' '}
              – React library providing SVG icons for developer tools and
              technologies
            </Text>
            <Text style={styles.accomplishment}>
              <Text style={styles.bullet}>• </Text>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>ponokai</Text> –
              Vim/Neovim color scheme with 10+ GitHub stars
            </Text>
            <Text style={styles.accomplishment}>
              <Text style={styles.bullet}>• </Text>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>
                dev-portfolio
              </Text>{' '}
              – Full-stack portfolio template with Three.js, React-Redux, and
              TypeScript
            </Text>
            <Text style={styles.accomplishment}>
              <Text style={styles.bullet}>• </Text>
              Supported small businesses with cost-effective full-stack web
              solutions
            </Text>
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Education & Continuous Learning
          </Text>
          <View style={styles.educationItem}>
            <Text style={styles.educationDetails}>
              Self-directed learning through building production systems,
              open-source contributions, and staying current with modern
              development practices. Strong foundation in software architecture,
              system design, and full-stack development.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          References available upon request • Portfolio: shawilly.dev
        </Text>
      </Page>
    </Document>
  )
}

export default ResumePDF
