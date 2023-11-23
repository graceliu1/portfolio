import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'

const pageStyles = {
  backgroundColor: "#FBF7F4", // 
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const pageStylesWidth = {
  maxWidth: "850px"
}
const paragraphStyles = {
  marginBottom: 48,
  marginTop: 20,
}

const codeStyles = {
  padding: 4,
  color: "#A1683A",
  fontSize: "1rem",
  marginRight: 10,
  textDecoration:"underline",
}
/*
const codeStyles = {
  color: "#100A06", // "#281A0E", 
  padding: 4,
  backgroundColor: "#C18656", //"#A1683A", // old color "#426D4B" and bg  "#B5CAB2" is pale green
  fontSize: "0.75rem",
  marginRight: 10,
}*/
const headerNameStyles = {
  color: "#5F5555",
  padding: 4,
  backgroundColor: "#F5DDDD", //"#97ded0",
  fontSize: "2rem",
}
const subheaderNameStyles = {
  color: "#4D322E",
  marginTop: 20,
  padding: 4,
  backgroundColor: "#E8998D", // old color "#4C636D" and background "#99C3D5" is dark blue-ish
  fontSize: "1rem",
}
const subsectionNameStyles = {
  color: "#23332E",//"#524848",
  marginTop: 20,
  marginBottom: 40,
  padding: 4,
  backgroundColor: "#6C9A8B", //#DECACA",
  fontSize: "1rem",
}
const listItemStyles = {
  marginTop: 10,
}
const sublistItemStyles = {
  marginLeft: 15,
}
const emoticonStyles = {
  margin: 20,
  fontSize: "2rem",
}
const headshotStyles = {
  maxWidth: "100px"
}

const links = [
  {
    text: "linkedin",
    url: "https://www.linkedin.com/in/grace-l-2b1a9218a/",
  },
  {
    text: "github",
    url: "https://www.github.com/graceliu1",
  },
  {
    text: "email",
    url: "mailto:gl2969@princeton.edu",
  }
]
/*
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}
StaticImage
        alt="Grace Liu Headshot"
        src="../images/portfolioHeadshot.png"
        />*/
/*


const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}
const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}
const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

<h1 style={headingStyles}>
         
        <br />
        <span style={headingAccentStyles}>CS @ Princeton | Class of 2026 </span>
      </h1>


        <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time. 😎
      </p>

      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>


      <code style={codeStyles}>linkedin</code>
      <code style={codeStyles}>github</code>
      <code style={codeStyles}>email me</code>

       <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
      */
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div styles = {headshotStyles} >
      
      </div>
      <div style={pageStylesWidth}>
      <code style={headerNameStyles}>{'>'}{'>'} Grace Liu ٩(＾◡＾)۶</code> <span style = {emoticonStyles}></span>
      <br /> <br />
      <code style={subheaderNameStyles}>CS @ Princeton | Class of 2026 | gl2969@princeton.edu </code>
      
      <p style={paragraphStyles}>I'm a second-year computer science student interested in SWE, ML, and Quantitative roles.
      <br />Last summer, I worked at Cadence Design Systems as a Software Engineering Intern.
       <br />Aside from tech, my other interests include poetry, word games, dystopian fiction, and acapella!</p>
      

       {links.map(link => (
          <code key={link.url} style={codeStyles}>
            <span>
              <a href={`${link.url}`}>
                {link.text}
              </a>
            </span>
          </code>
        ))} <br /> <br/>

      <code style={subsectionNameStyles}>education / skills ✎ᝰ.</code>
      <p style ={paragraphStyles}>
        <ul>
          <li style ={listItemStyles}>{'>'}{'>'} <b>courses:</b>  Data Structures & Algorithms,  Intro. Machine Learning, Intro. Programming Systems, Probability and Stochastic Systems, Multivariable Calculus, Linear Algebra,
         Fundamentals of Statistics, Reasoning for Computer Science </li>
          <li style ={sublistItemStyles}>╺╺ <b>intended spring 2024:</b> <em>Distributed Systems</em>, <em>Economics and Computing</em>, <em>Natural Language Processing</em>, <em>Networks</em></li>
          <li style ={listItemStyles}>
          {'>'}{'>'} <b>skills:</b> 
          </li>
          <li style ={sublistItemStyles}>╺╺ <b>prog. languages:</b> Java, Python, C++ </li>
          <li style={sublistItemStyles}>╺╺  <b>frameworks:</b> Flask, React.js, RESTful APIs, SQL, LangChain, Node.js, Git, Unix
          </li>
        </ul>
      </p>
      <code style={subsectionNameStyles}>experience ࿐ ࿔*:･ﾟ</code>
      
      <p style ={paragraphStyles}>
        <ul>
          <li style ={listItemStyles}>{'>'}{'>'} <em>Incoming</em> Software Engineering Intern @ Bloomberg | Summer 2024</li>
          <li style ={listItemStyles}>{'>'}{'>'} Undergraduate Course Assistant / Data Structures Algo Grader @ Princeton Department of Computer Science | Spring, Fall 2023</li>
          <li style={listItemStyles}> {'>'}{'>'} Software Engineering Intern @ Cadence Design Systems | Summer 2023</li>
          <li style ={listItemStyles}>{'>'}{'>'} Student Researcher @ University of Connecticut | Summer 2021, Fall 2021</li>
        </ul>
      </p>
      <code style={subsectionNameStyles}>projects ⋆ ˚｡⋆୨୧˚</code>
      <p style ={paragraphStyles}>
        <ul>
          <li style ={listItemStyles}>{'>'}{'>'} <b>Product Safety from Text Recognition Application:</b></li>
          <li style ={sublistItemStyles}>╺╺ Developed responsive web application diagnosing safety of personal care products from labels with NLP text recognition using Google’s Tesseract OCR and hardware Raspberry PI component.</li>
          <li style ={sublistItemStyles}>╺╺ Built React.js front-end and back-end Flask app with Python and Java backend to recognize potential toxins in ingredients from web-scraped data.</li>
          <li style ={listItemStyles}>{'>'}{'>'} <b>Dublin Math Course Selection:</b></li>
          <li style ={sublistItemStyles}>╺╺ Built a widget and designed a responsive course planner web application to assist high school students in math progression with HTML/CSS, Bootstrap, JavaScript, PHP.</li>
          <li style ={sublistItemStyles}>╺╺ Implemented decision tree to  lter requirements and output possible options through PHP functions.</li>
        </ul>
      </p>

      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
