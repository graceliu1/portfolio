import * as React from "react"

const pageStyles = {
  // backgroundColor: "#FBF6F5"
  color: "#2d2d34", //"black",
  padding: 96,
  fontFamily: "Open Sans, -apple-system, Roboto, sans-serif, serif",
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

// const bgColor = "bg-[#eacdc2]"
// const titleColor = "bg-[#b75d69]"
// const subtitleColor = "bg-[#774c60]"
const blockColor1 = "bg-[#b97375]"
const spanColor1 = "decoration-[#98b07d]"
const blockColor2 = "bg-[#f1e4e8]"
const spanColor2 = "decoration-[#a66f41]"
/* old theme */
const bgColor = "bg-[#FBF6F5]"
const titleColor = "bg-rose-600/10 hover:bg-rose-700/30"
const subtitleColor = "bg-[#edbcb2] hover:bg-[#edb2a6]"
// const blockColor1 = ""
// const blockColor2 = ""

const IndexPage = () => {
  return (
    <main class = {`flex justify-center items-center ${bgColor}`} style={pageStyles}>
      <div  class = "w-11/12">

      
      <div class ="my-5 h-screen items-center ">
      
        <button class={`inline-block my-4 ${titleColor} duration-150 text-4xl p-2`}><code>{'>'}{'>'} Grace Liu ٩(＾◡＾)۶</code></button>
        
        <span class="text-lg ml-5 inline-block float-right"><code>{'<'}{'<'} <span class="hover:text-slate-500" > <a target="_blank" href="https://www.linkedin.com/in/grace-l-2b1a9218a/">say hi</a> </span>  </code></span>
        <span class="text-lg ml-5 inline-block float-right"><code>{'<'}{'<'} <span class="hover:text-slate-500">
          <a target="_blank" href = "mailto:gl2969@princeton.edu?subject=Request for Grace Liu's Resume"> resume </a>
          </span></code></span>
        <span class="text-lg ml-5 inline-block float-right"><code>{'<'}{'<'} <span class="hover:text-slate-500"> <a  target="_blank" href = "https://www.github.com/graceliu1">projects</a> </span> </code></span>
      
      
      
      
        <button class={`${subtitleColor} my-6 duration-150   p-1`}><code>Class of 2026 | gl2969@princeton.edu </code></button>
        <br />
        <p class="my-4 w-4/6" >Hello! I'm a third-year student studying <b>Computer Science</b> at Princeton!
        I grew up in the east Bay Area but I've been working in NYC for the past few seasons.
         Some of my interests are word games, 
        crosswords, video games, poetry, and music. 
        <br/>  
        <br />
        On campus, I'm involved with Old NasSoul a-capella, HackPrinceton, and Princeton Women in Computer Science. I'm interested in <b>software engineering</b> and <b>quantitative trading</b> roles for Summer 2025. 
          {' '}Reach out for a chat :).</p>
        <br/>
    
        
        <span class={`underline underline-offset-8 ${spanColor1} decoration-8 mt-3 text-4xl`}>(๑˘ᵕ˘)ﾟ &nbsp; &nbsp; &nbsp; ~( ˘▾˘~)  </span> <span class={`underline underline-offset-8 ${spanColor2} decoration-8 float-right text-4xl`}> ( ˘▽˘)っ  &nbsp; &nbsp; &nbsp; (っ˘ڡ˘ς)  </span> 
        <br/>

        <span class={`underline underline-offset-1 ${spanColor1} decoration-8`}>‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
        ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
        ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </span>
        
        
         <span class={`float-right underline underline-offset-1 ${spanColor2} decoration-8`}>‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
        ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
        ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </span> 
       
       <div>
       <span class ={`align-left inline ${blockColor1} w-60 h-3  mt-4 text-4xl`}> </span><span class = {`inline ${blockColor2} w-60 h-3 text-4xl`}> </span>
        
        </div>
       <div class = "grid place-items-center">
       <span class="hover:text-slate-500 text-3xl" > <a href="#education">&#8964;</a> </span>
       </div>
       </div>

    <div id="education" class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-7">
      <div class="bg-[#a2b88a] hover:bg-[#98b07d] duration-150 overflow-hidden shadow-sm">
        <div class="px-12 py-10">
      <button class="text-lg mb-2 px-1 py-0.5"><code>education ✎ᝰ.</code></button>
        
        <p class="my-4">
          <ul>
           <li style ={listItemStyles}><code>{'>'}{'>'}</code> <b>major:</b> computer science</li>
            <li style ={listItemStyles}> <code>{'>'}{'>'}</code> <b>minors:</b> statistics & ML, quantitative economics</li>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> <b>relevant coursework:</b> </li>
            <li style ={sublistItemStyles}><code>{'>'}</code> Probability & Stochastic Systems</li>
            <li style ={sublistItemStyles}><code>{'>'}</code> Distributed Systems</li>
            <li style ={sublistItemStyles}><code>{'>'}</code> Economics & Computing (Game Theory) </li>  
            <li style ={sublistItemStyles}><code>{'>'}</code> Algorithms & Data Structures</li>
            <li style ={sublistItemStyles}><code>{'>'}</code> Computer Vision</li>
            <li style ={sublistItemStyles}><code>{'>'}</code> Mathematical Microeconomics</li>
            <li style ={sublistItemStyles}><code>{'>'}</code> Machine Learning</li>
          </ul>
        </p>
        </div>
       </div>
       <div class="duration-150 bg-[#bf977e] hover:bg-[#a66f41]/90 overflow-hidden shadow-sm">
        <div class="px-12 py-10">
       <button class=" text-lg mb-2 px-1 py-0.5"><code>experience ࿐ ࿔*:･ﾟ</code></button>

        <p class="my-4">
          <ul>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> Fall 2024 | Undergraduate Research Fellow @ <b>Princeton Data-Driven Social Science</b></li>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> Summer 2024 | Software Engineer Intern @ <b>Bloomberg L.P.</b></li>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> Spring 2024 | Trading and Technology Winter Intern @ <b>Hudson River Trading</b></li>
            <li style ={listItemStyles}><code>{'>'}{'>'}</code> Spring 2023 ~ present | COS226 Grading Manager <b> @ Princeton Computer Science</b> </li>
            <li style={listItemStyles}> <code>{'>'}{'>'}</code> Summer 2023 | Software Engineer Intern @ <b>Cadence Design Systems</b></li>
          </ul>
        </p>
        </div>
      </div>
     
    </div>

  
    <br />

    <section style = {poemStyles} class="bg-white  p-8 my-4">
          
        <div class = "underline mb-4">the foreigner<br /></div>
          <b>i. <em>chu-sheng</em> / beginning: </b>
          i am the daughter of two tigers.
          my mother rubs bitter spice between her fingers,
          her fortunes cradled in ginger embraces.
          she tells me of a Goddess’s flour-streaked hands
          birthing <em>zong zi</em> children, fated to drown
          in riverboats of dried bamboo leaves.
          i recall forgotten summer stories: 
                    a Monkey King dancing in peach nectar,
                    cracked sunflower seeds sprouting shoots,
                   tiger balm stains that turn elbows forest-green.
          my mother thinks the world's secrets hide in the altar 
          of the Budda’s face, the smoke of the cloying incense.
          i see them beyond the curve of her crescent smile.
          <br />
          <br /><b>ii. <em>jie-ju</em> / end: </b>
          i am the lover of the half-melted mango sun.
          so on the fullest moon, i gulp down salted egg yolks, 
          devour crushed sesame and lotus paste in the dark.
          reluctantly, my grandfather hands me his precious jade elephants.
          my memories of this town move like a damp mirage.
          
           i turn towards:
                    the city overrun with a thousand western luxuries,
                    
                    bloodstains of a hundred past conquerors,
                    one too-tight <em>qi-pao</em>.
          a towering skyline awaits me
          (then in terminal 50–65, i shed my skin from the past twenty-eight days).
          two tigers and i fly into the horizon.

<br /><br /><em class = "text-sm">modified part of "origin" collection - awarded gold medal in the 2021 scholastic art and writing awards</em>
        </section>

      

        <section style = {poemStyles} class="bg-white p-8 my-4">
          
        <div class = "underline mb-4">eight ph(r)ases of chang’e monologue <br /></div>


        inspired by the legend of chang'e, the scorned goddess of the moon in chinese mythology <br />
        I. My palace is cold. Far away<br />
        II. from your arrows and fire, I<br />
        III. welcome your glare. But to tell <br />
        IV. the truth, I did not drink that<br />
        V.   elixir out of greed. Did you  <br />
        VI. find out why I waned?  <br />
        VII. I escape, a round-faced youth.  <br />
        VIII. Yet you always chase. 
          
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
