import * as React from "react"

const pageStyles = {
  backgroundColor: "#FBF7F4", // 
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const pageStylesWidth = {
  maxHeight: 1200
}

// socialLinkStyles
const socialLinkStyles = {
  padding: 4,
  color: "#A1683A",
  fontSize: "1rem",
  marginRight: 20,
  textDecoration:"underline",
}
const listItemStyles = {
  marginTop: 10,
}
const sublistItemStyles = {
  marginLeft: 15,
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
/*ƪ(˘⌣˘)ʃ*/
      const IndexPage = () => {
  return (
    <main class = "border-4 border-blue flex justify-center items-center " style={pageStyles}>
      <div  class = "w-11/12">

      

      <button class="inline-block bg-rose-700/10 duration-150 hover:bg-rose-700/30 text-4xl p-2"><code>{'>'}{'>'} Grace Liu ٩(＾◡＾)۶</code></button>
      
      <span class="text-lg ml-5 inline-block float-right"><code>{'<'}{'<'}<span class="underline"> say hi </span>  </code></span>
      <span class="text-lg ml-5 inline-block float-right"><code>{'<'}{'<'} <span class="underline"> resume </span></code></span>
      <span class="text-lg ml-5 inline-block float-right"><code>{'<'}{'<'} <span class="underline"> <a href = "#projects">projects</a> </span> </code></span>
     
     
      
      
      <br /> <br />

     
      <button class="bg-[#e3a39b] my-3 duration-150 hover:bg-red-700/70  p-1"><code>CS @ Princeton | Class of 2026 | gl2969@princeton.edu </code></button>
      <br />
      <p class="my-4 w-5/6">Hello! I'm a curious and enthusiastic student interested in <b>Software Engineering</b> and <b>Quantitative Trading</b> roles.
      I'm studying Computer Science with intended minors in Statistics and Machine Learning and Quantitative Economics. 
      On campus, I'm involved with acapella, HackPrinceton, SWE, and Princeton Women in Computer Science.
      <br /> <br />
      I grew up in the Bay Area and worked on large language model chatbots last summer as a Software Engineering Intern at Cadence Design Systems.
       Some of my favorite things include: word games (puzzles of all sorts, really), video games, and music. I also dabble in poetry. 
       I'm always looking to find creative ways to solve new problems :).</p>
      <br/>
  



       <span class=" mt-3 text-4xl">(๑˘ᵕ˘)ﾟ ~( ˘▾˘~)  </span> <span class="float-right text-4xl"> ( ˘▽˘)っ  (っ˘ڡ˘ς)  </span> 
       

      
    <div class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-7">
      <div class="border-2 border-black bg-emerald-700/40 duration-150 hover:bg-emerald-700/60 overflow-hidden shadow-md">
        <div class="px-12 py-10">
      <button class="text-lg mb-2 px-1 py-0.5"><code>education / skills ✎ᝰ.</code></button>
        
        <p class="my-4">
          <ul>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> <b>courses:</b>  Data Structures & Algorithms,  Intro. Machine Learning, Intro. Programming Systems, Probability and Stochastic Systems, Multivariable Calculus, Linear Algebra,
          Fundamentals of Statistics, Reasoning for Computer Science </li>
            <li style ={sublistItemStyles}>╺╺ <b>intended spring 2024:</b> <em>Distributed Systems</em>, <em>Economics and Computing</em>, <em>Natural Language Processing</em>, <em>Networks</em></li>
            <li style ={listItemStyles}>
            <code>{'>'}{'>'}</code> <b>skills:</b> 
            </li>
            <li style ={sublistItemStyles}>╺╺ <b>prog. languages:</b> Java, Python, C++ </li>
            <li style={sublistItemStyles}>╺╺  <b>frameworks:</b> Flask, React.js, RESTful APIs, SQL, LangChain, Node.js, Git, Unix
            </li>
          </ul>
        </p>
        </div>
       </div>
       <div class="border-2 border-black duration-150 bg-[#a66f41]/70 hover:bg-[#a66f41]/90 overflow-hidden shadow-md">
        <div class="px-12 py-10">
       <button class=" text-lg mb-2 px-1 py-0.5"><code>experience ࿐ ࿔*:･ﾟ</code></button>

        <p class="my-4">
          <ul>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> <em>Incoming</em> Quantitative Trading and Technology Winter Intern @ <b>Hudson River Trading</b> | Spring 2024</li>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> <em>Incoming</em> Software Engineering Intern @ <b>Bloomberg</b> | Summer 2024</li>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> Undergraduate Course Assistant / Data Structures Algo Grader @ <b>Princeton Department of Computer Science</b>| Spring, Fall 2023 </li>
            <li style={listItemStyles}> <code>{'>'}{'>'}</code> Software Engineering Intern @ <b>Cadence Design Systems</b> | Summer 2023</li>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> Student Researcher @ University of Connecticut | Summer 2021, Fall 2021</li>
          </ul>
        </p>
        </div>
      </div>
     
    </div>

  
    <br />
    
    <section id = "projects" class="bg-[#e3a39b] duration-150 hover:bg-[#e3a39b]/100 border-2 border-black  overflow-hidden shadow-md">
        <div class="px-12 py-10">
        <button class="text-lg mt-2 mb-2 px-1 py-0.5"><code>projects ⋆ ˚｡⋆୨୧˚</code></button>
        <p class="my-4">
          <ul>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> <b>Product Safety from Text Recognition Application:</b></li>
            
            
           
          </ul>
        </p>
        </div>
    </section>
    
    <br />
    
    <div class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-7">
      <div class="border-2 border-black duration-150 bg-[#a66f41]/70 hover:bg-[#a66f41]/90 overflow-hidden shadow-md">
        <div class="px-12 py-10">
       <button class=" text-lg mb-2 px-1 py-0.5"><code>eluo - product safety</code></button>

        <p class="my-4">
          <ul>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> <b>Product Safety from Text Recognition Application:</b></li>
            <li style ={sublistItemStyles}>╺╺ Developed responsive web application diagnosing safety of personal care products from labels with NLP text recognition using Google’s Tesseract OCR and hardware Raspberry PI component.</li>
            <li style ={sublistItemStyles}>╺╺ Built React.js front-end and back-end Flask app with Python and Java backend to recognize potential toxins in ingredients from web-scraped data.</li>
          </ul>
        </p>
        </div>
      </div>

      <div class="border-2 border-black bg-emerald-700/40 duration-150 hover:bg-emerald-700/60 overflow-hidden shadow-md">
        <div class="px-12 py-10">
      <button class="text-lg mb-2 px-1 py-0.5"><code>dublin math course planner </code></button>
        
        <p class="my-4">
          <ul>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> <b>Dublin Math Course Selection:</b></li>
            <li style ={sublistItemStyles}>╺╺ Built a widget and designed a responsive course planner web application to assist high school students in math progression with HTML/CSS, Bootstrap, JavaScript, PHP.</li>
            <li style ={sublistItemStyles}>╺╺ Implemented decision tree to filter requirements and output possible options through PHP functions.</li>
          </ul>
        </p>
        </div>
      </div>
    </div>

    <br />

    <section id = "poetry" class="bg-[#e3a39b] duration-150 hover:bg-[#e3a39b]/100 border-2 border-black  overflow-hidden shadow-md">
        <div class="px-12 py-10">
        <button class="text-lg mt-2 mb-2 px-1 py-0.5"><code>poetry ⋆ ˚｡⋆୨୧˚</code></button>
        <p class="my-4">
          
familiar, not foreign<br></br>
<b>i. <em>chu sheng</em> / beginning: </b>
i am the daughter of two tigers.
my mother rubs bitter spice between her fingers,
her fortunes cradled in ginger embraces.
she tells me of a Goddess’s flour-streaked hands;
birthing <em>zong zi</em> children, fated to drown
in riverboats of dried bamboo leaves.
wistful, we recall forgotten stories from past summers: 
          a Monkey King frolicking in the nectar,
          cracked sunflower seeds sprouting new stalks,
          smears of tiger balm that stain elbows forest-green.
to my mother, the secrets of the world are 
hidden in the altar of the Budda’s face
and the smoke of the cloying incense.
to me, they peek out in the curve of her crescent smile.

<br /><b>ii. <em>jie ju</em> / end: </b>
i am the lover of the half-melted mango sun.
but on the fullest moon i gulp down salted egg yolks
devour crushed sesame and lotus paste in the dark.
wistful, my grandfather hands me his jade elephants.
curls of  cigar smoke bade me farewell. 
my memories of this town are    superimposed through
the mirage of six months of my childhood.
how can i recognize home?
longing and reluctant to leave, i turn towards:
          the modern city of infinite western luxuries,
          a (still) too-tight <em>qi pao</em> discarded on the floor,
          the bloodstains of a hundred past conquerors.
across, a modern skyline awaits me
(boarding terminal 50–65, i shed the skin
that i have worn for the past twenty-eight days).
two tigers and i fly into the horizon

        </p>
        </div>
    </section>



      <br />
      {links.map(link => (
          <code key={link.url} style={socialLinkStyles}>
            <span>
              <a href={`${link.url}`}>
                {link.text}
              </a>
            </span>
          </code>
        ))} <br /> <br/>
      </div>
    </main>
  )
}

/*


      <button class="bg-rose-700/20 duration-150 hover:bg-rose-700/30 mt-5 mb-10 p-1"><code>say hello (☆^ー^☆)</code></button>
      <br />

old headers:
 <br /><code style={headerNameStyles} >{'>'}{'>'} Grace Liu ٩(＾◡＾)۶</code> <span style = {emoticonStyles}></span>
 <code style={subsectionNameStyles}>education / skills ✎ᝰ.</code>
 <code style={subsectionNameStyles}>experience ࿐ ࿔*:･ﾟ</code>
 <code style={subsectionNameStyles}>projects ⋆ ˚｡⋆୨୧˚</code>
 <code style={subheaderNameStyles}>CS @ Princeton | Class of 2026 | gl2969@princeton.edu </code>
      


*/

export default IndexPage

export const Head = () => <title>Home Page</title>
