import * as React from "react"

const pageStyles = {
  
  backgroundColor: "#FBF6F5", /*"#F9F6EF",*/
  color: "black",
  padding: 96,
  fontFamily: "Open Sans, -apple-system, Roboto, sans-serif, serif",
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
  marginBottom: 5
}
const poemStyles = {
  fontFamily: "Cormorant Garamond",
  borderWidth: "3px",
  borderColor: "black"
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

/* <span class=" underline underline-offset-8 decoration-[#AFBE8F] decoration-8">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span> <span class="underline underline-offset-8 decoration-[#93B7BE] decoration-8 float-right "> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  </span> */
/*ƪ(˘⌣˘)ʃ*/
      const IndexPage = () => {
  return (
    <main class = " flex justify-center items-center " style={pageStyles}>
      <div  class = "w-11/12">

      
      <div class ="my-5 h-screen items-center ">
      
        <button class="inline-block my-4 bg-rose-600/10 duration-150 hover:bg-rose-700/30 text-4xl p-2"><code>{'>'}{'>'} Grace Liu ٩(＾◡＾)۶</code></button>
        
        <span class="text-lg ml-5 inline-block float-right"><code>{'<'}{'<'} <span class="hover:text-slate-500" > <a target="_blank" href="https://www.linkedin.com/in/grace-l-2b1a9218a/">say hi</a> </span>  </code></span>
        <span class="text-lg ml-5 inline-block float-right"><code>{'<'}{'<'} <span class="hover:text-slate-500">
          <a target="_blank" href = "https://www.overleaf.com/read/mrzdgbjnmvgj#0841f4"> resume </a>
          </span></code></span>
        <span class="text-lg ml-5 inline-block float-right"><code>{'<'}{'<'} <span class="hover:text-slate-500"> <a  target="_blank" href = "https://www.github.com/graceliu1">projects</a> </span> </code></span>
      
      
      
      
        <button class="bg-[#E5B5AB] my-6 duration-150 hover:bg-red-700/70  p-1"><code>Class of 2026 | gl2969@princeton.edu </code></button>
        <br />
        <p class="my-4 w-4/6" >Hello! I'm a (rising) third-year student studying <b>Computer Science</b> at <b>Princeton</b>!
        I grew up in the eastern part of the Bay Area. Some of my interests include word games, crosswords, video games, poetry, and music. 
        <br/>  
        <br />
        I'm interested in <b>software engineering</b> and <b>trading</b> roles for Summer 2025. On campus, I'm involved with Old NasSoul a-capella, HackPrinceton, 
        Society of Women Engineers, <br />and Princeton Women in Computer Science.
          Reach out for a chat :).</p>
        <br/>
    
        
        <span class=" underline underline-offset-8 decoration-[#AFBE8F] decoration-8 mt-3 text-4xl">(๑˘ᵕ˘)ﾟ &nbsp; &nbsp; &nbsp; ~( ˘▾˘~)  </span> <span class="underline underline-offset-8 decoration-[#a66f41] decoration-8 float-right text-4xl"> ( ˘▽˘)っ  &nbsp; &nbsp; &nbsp; (っ˘ڡ˘ς)  </span> 
        <br/>

        <span class=" underline underline-offset-1 decoration-[#AFBE8F] decoration-8">‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
        ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
        ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </span>
        
        
         <span class=" float-right underline underline-offset-1 decoration-[#a66f41] decoration-8">‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
        ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
        ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </span> 
       
       <div>
       <span class = "align-left inline bg-[#AFBE8F] w-60 h-3  mt-4 text-4xl"> </span><span class = "inline bg-[#BEE7B8] w-60 h-3 text-4xl"> </span>
        
        </div>
       <div class = "grid place-items-center">
       <span class="hover:text-slate-500 text-3xl" > <a href="#education">&#8964;</a> </span>
       </div>
       </div>

    <div id="education" class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-7">
      <div class="bg-[#AFBE8F]  duration-150 overflow-hidden shadow-sm">
        <div class="px-12 py-10">
      <button class="text-lg mb-2 px-1 py-0.5"><code>education ✎ᝰ.</code></button>
        
        <p class="my-4">
          <ul>
           <li style ={listItemStyles}><code>{'>'}{'>'}</code> <b>course of study:</b> computer science</li>
            <li style ={listItemStyles}> <code>{'>'}{'>'}</code><b>minors:</b> statistics & ML, quantitative economics</li>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> <b>notable courses:</b> </li>
            <li style ={sublistItemStyles}><code>{'>'}</code> Probability & Stochastic Systems</li>
            <li style ={sublistItemStyles}><code>{'>'}</code> Distributed Systems</li>
            <li style ={sublistItemStyles}><code>{'>'}</code> Economics & Computing (Game Theory) </li>  
            <li style ={sublistItemStyles}><code>{'>'}</code> Algorithms & Data Structures</li>
            <li style ={sublistItemStyles}><code>{'>'}</code> Computer Vision</li>
            <li style ={sublistItemStyles}><code>{'>'}</code> Mathematical Microeconomics</li>
          </ul>
        </p>
        </div>
       </div>
       <div class="duration-150 bg-[#a66f41]/80 hover:bg-[#a66f41]/90 overflow-hidden shadow-sm">
        <div class="px-12 py-10">
       <button class=" text-lg mb-2 px-1 py-0.5"><code>experience ࿐ ࿔*:･ﾟ</code></button>

        <p class="my-4">
          <ul>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> Software Engineering Intern - Market Feeds Platform @ <b>Bloomberg L.P.</b> | Summer 2024</li>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> Trading and Technology Winter Intern @ <b>Hudson River Trading</b> | Spring 2024</li>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> Grading Manager (Undergraduate Course Assistant) <b> @ Princeton Department of Computer Science</b>| Spring, Fall 2023 </li>
            <li style={listItemStyles}> <code>{'>'}{'>'}</code> Software Engineering Intern @ <b>Cadence Design Systems</b> | Summer 2023</li>
          </ul>
        </p>
        </div>
      </div>
     
    </div>

  
    <br />

    <section style = {poemStyles} class="bg-white  p-8 my-4">
          
        <div class = "underline mb-4">the foreigner<br /></div>
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
          to me, they peek out from the curve of her crescent smile.
          <br />
          <br /><b>ii. <em>jie ju</em> / end: </b>
          i am the lover of the half-melted mango sun.
          but on the fullest moon i gulp down salted egg yolks
          devour crushed sesame and lotus paste in the dark.
          wistful, my grandfather hands me his jade elephants.
          my memories of this town are    superimposed through
          the mirage of six months of my childhood.
          
          longing and reluctant to leave, i turn towards:
                    the city of a thousand western luxuries,
                    
                    the bloodstains of a hundred past conquerors.
                    one too-tight <em>qi pao</em> discarded on the floor,
          a modern skyline awaits me
          (boarding terminal 50–65, i shed the skin
          that i have worn for the past twenty-eight days).
          two tigers and i fly into the horizon.

<br /><br /><em class = "text-sm">part of "origin" collection - awarded gold medal in the 2021 scholastic art and writing awards</em>
        </section>

      

        <section style = {poemStyles} class="bg-white p-8 my-4">
          
        <div class = "underline mb-4">eight ph(r)ases of chang’e monologue <br /></div>


        inspired by the legend of chang'e, the scorned goddess of the moon in chinese mythology <br />
        I. My palace is cold.  <br />
        II. Far away from your arrows and fire, <br />
        III. I welcome your accusing glare. <br />
        IV. But to tell you the truth,  <br />
        V. I never drank that elixir out of greed.  <br />
        VI. Did you consider why I left?  <br />
        VII. I escaped with my youth.  <br />
        VIII. Yet you continue to chase. 
          
          <br /><br /><em class = "text-sm">part of "origin" collection - awarded gold medal in the 2021 scholastic art and writing awards, gold key in regional competition</em>
          </section>
        

      <br />
      <div class= "flex justify-center items-center" id = "socials">
      {links.map(link => (
          <code key={link.url} style={socialLinkStyles}>
            <span>
              <a target="_blank" href={`${link.url}`}>
                {link.text}
              </a>
            </span>
          </code>
        ))} <br /> <br/>
      </div>
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
