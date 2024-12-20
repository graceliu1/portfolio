import * as React from "react"

const listItemStyles = {
  marginTop: 10,
  color: "#ff9da4", // terminal.ansiRed
}
const sublistItemStyles = {
  marginLeft: 15,
  marginBottom: 5,
  color: "#d1f1a9", // terminal.ansiGreen
}
const poemStyles = {
  fontFamily: "Cormorant Garamond",
  borderWidth: "3px",
  borderColor: "#404f7d", // editorGroup.border
  color: "#ffffff", // editor.foreground
  backgroundColor: "#001733", // activityBar.background
}
// Colors object to store all color values
const colors = {
  editorBackground: "#002451",
  editorForeground: "#b3d0f2",
  terminalAnsiRed: "#ff9da4",
  terminalAnsiGreen: "#d1f1a9",
  editorGroupBorder: "#404f7d",
  activityBarBackground: "#001733",
  titleBarActiveBackground: "#ffeead",
  terminalAnsiYellow: "#ffeead",
  terminalAnsiCyan: "#99ffff",
  terminalAnsiRedSpan: "#ff9da4",
  terminalAnsiGreenSpan: "#d1f1a9",
  navbarTextColor: "#d1f1a9",
  navbarHoverColor: "#e7a869",
  navbarHoverBgColor: "#001126",
  greenText: "#8fb56e",
  orangeText: "#e7a869",
}

// Page styles
const pageStyles = {
  padding: 96,
  fontFamily: "Source Code Pro, Open Sans, -apple-system, sans-serif, serif",
  backgroundColor: colors.editorBackground,
  color: colors.editorForeground,
}

//<li><code>{'>'}{'>'}</code> Summer 2025 | Incoming SWE Intern @ <b className={dynamicClasses.orangeText}>Hudson River Trading</b></li> 
// Dynamic Tailwind class templates for various elements
const dynamicClasses = {
  bgColor: `bg-[${colors.editorBackground}]`,
  textColor: `text-[${colors.editorForeground}]`,
  titleColor: `text-[${colors.titleBarActiveBackground}] bg-[${colors.activityBarBackground}] hover:bg-[${colors.editorBackground}] hover:text-[${colors.terminalAnsiYellow}]`,
  subtitleColor: `text-[${colors.terminalAnsiCyan}] bg-[${colors.activityBarBackground}] hover:bg-[${colors.editorBackground}] hover:text-[${colors.terminalAnsiGreen}]`,
  blockColor1: `bg-[${colors.terminalAnsiGreen}]`,
  spanColor1: `decoration-[${colors.terminalAnsiGreenSpan}]`,
  blockColor2: `bg-[${colors.terminalAnsiRed}]`,
  spanColor2: `decoration-[${colors.terminalAnsiRedSpan}]`,
  navbarText: `text-[${colors.navbarTextColor}] hover:text-[${colors.navbarHoverColor}]`,
  navbarHoverBg: `hover:bg-[${colors.navbarHoverBgColor}]`,
  greenText: `text-[${colors.greenText}]`,
  orangeText: `text-[${colors.orangeText}]`,
  listColor: `text-[${colors.terminalAnsiRed}]`,
  sublistColor: `text-[${colors.terminalAnsiGreen}]`,
}

const IndexPage = () => {
  return (
    <main className={`flex justify-center items-center ${dynamicClasses.bgColor} ${dynamicClasses.textColor}`} style={pageStyles}>
      <div className="w-11/12">

        <div id="top" className="my-3 h-screen items-center ">

          <button className={`inline-block my-4 ${dynamicClasses.titleColor} duration-150 text-4xl py-2 px-4`}>
            <code> Grace Liu ٩(＾◡＾)۶</code>
          </button>

          <span className={`text-lg ml-5 inline-block float-right ${dynamicClasses.navbarText} duration-150`}>
            <code>
              <span className={`${dynamicClasses.navbarHoverBg} p-1`}>
                <a target="_blank" href="https://www.linkedin.com/in/grace-l-2b1a9218a/">{'{'}say hi{'}'}</a>
              </span>
            </code>
          </span>

          <span className={`text-lg ml-5 inline-block float-right ${dynamicClasses.navbarText} duration-150`}>
            <code>
              <span className={`${dynamicClasses.navbarHoverBg} p-1`}>
                <a target="_blank" href="mailto:gl2969@princeton.edu?subject=Request for Grace Liu's Resume">{'{'}email{'}'}</a>
              </span>
            </code>
          </span>

          <span className={`text-lg ml-5 inline-block float-right ${dynamicClasses.navbarText} duration-150`}>
            <code>
              <span className={`${dynamicClasses.navbarHoverBg} p-1`}>
                {'{'}<a target="_blank" href="https://www.github.com/graceliu1">github{'}'}</a>
              </span>
            </code>
          </span>

          <button className={`${dynamicClasses.subtitleColor} my-6 duration-150 pl-2 p-1`}>
            <code>{'>'}{'>'} Class of 2026 |{'>'} gl2969@princeton.edu </code>
          </button>

          <p className="my-4 w-4/6">Hello, I'm a third-year Computer Science student at Princeton!
            I grew up in the east Bay Area but am currently located in New Jersey.
            <br /><br />
            I love word games, fiction, poetry, and music. On campus, I'm involved with Old NasSoul a-capella, ACM, and Princeton Women in CS.
            I'm interested in <b>software engineering</b> and <b>machine learning</b> roles. Reach out through email for a chat!
          </p>

          <div className="my-12">
            <span className={`duration-150 underline underline-offset-8 ${dynamicClasses.spanColor1} text-[${colors.terminalAnsiGreen}] hover:bg-[${colors.activityBarBackground}] decoration-6 mt-3 text-4xl`}>
              (๑˘ᵕ˘)ﾟ &nbsp; &nbsp; &nbsp; ~( ˘▾˘~)
            </span>
            <span className={`duration-150 underline underline-offset-8 ${dynamicClasses.spanColor2} text-[${colors.terminalAnsiRed}] hover:bg-[${colors.activityBarBackground}] decoration-6 float-right text-4xl`}>
              ( ˘▽˘)っ &nbsp; &nbsp; &nbsp; (っ˘ڡ˘ς)
            </span>
          </div>


          <div>
            <span className={`align-left inline ${dynamicClasses.blockColor1} w-60 h-3 mt-4 text-4xl`}></span>
            <span className={`inline ${dynamicClasses.blockColor2} w-60 h-3 text-4xl`}></span>
          </div>
          <div className="grid place-items-center">
            <span className="hover:text-slate-500 text-3xl"> <a href="#education">&#8964;</a> </span>
          </div>
        </div>

        <div id="education" className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-7">
          <div className={`bg-[${colors.activityBarBackground}] hover:bg-[${colors.navbarHoverBgColor}] duration-150 overflow-hidden shadow-sm`}>
            <div className="px-12 py-10">
              <button className={`text-lg mb-2 px-1 py-0.5 ${dynamicClasses.greenText}`}>
                <code>{'{'}education{'}'}</code>
              </button>
              <p className="my-4">
                <ul className={`${dynamicClasses.listColor} space-y-1`}>
                  <li><code>{'>'}{'>'}</code> <b className={dynamicClasses.greenText}>major:</b> computer science</li>
                  <li><code>{'>'}{'>'}</code> <b className={dynamicClasses.greenText}>minors:</b> statistics & ML, finance</li>

                  <ul className={`${dynamicClasses.sublistColor} space-x-3 space-y-1`}>
                    <li><code>{'>'}{'>'}</code> <b className={dynamicClasses.greenText}>relevant coursework:</b></li>
                    <li><code>{'>'}</code>  Distributed Systems</li>
                    <li ><code>{'>'}</code> Probability & Stochastic Systems</li>
                    <li ><code>{'>'}</code> Economics & Computing (Game Theory)</li>
                    <li ><code>{'>'}</code> Computer Vision</li>
                    <li ><code>{'>'}</code> Machine Learning</li>
                    <li ><code>{'>'}</code> Functional Programming*</li>
                    <li ><code>{'>'}</code> Regression*</li>
                  </ul>

                </ul>
              </p>
            </div>
          </div>

          <div className={`bg-[${colors.activityBarBackground}] hover:bg-[${colors.navbarHoverBgColor}] duration-150 overflow-hidden shadow-sm`}>
            <div className="px-12 py-10">
              <button className={`text-lg mb-2 px-1 py-0.5 ${dynamicClasses.orangeText}`}>
                <code>{'{'}experience{'}'}</code>
              </button>
              <p className="my-4">
                <ul className={`${dynamicClasses.listColor} space-y-1`}>

                  <li><code>{'>'}{'>'}</code> Fall 2024 | Undergraduate Research Fellow @ <b className={dynamicClasses.orangeText}>Princeton Data-Driven Social Science</b></li>
                  <li><code>{'>'}{'>'}</code> Summer 2024 | SWE Intern @ <b className={dynamicClasses.orangeText}>Bloomberg L.P.</b></li>
                  <li><code>{'>'}{'>'}</code> Spring 2024 | Trading and Technology Winter Intern @ <b className={dynamicClasses.orangeText}>Hudson River Trading</b></li>
                  <li><code>{'>'}{'>'}</code> Spring 2023 ~ now | COS226 Grading Manager @ <b className={dynamicClasses.orangeText}>Princeton CS Department</b></li>
                  <li><code>{'>'}{'>'}</code> Summer 2023 | SWE Intern @ <b className={dynamicClasses.orangeText}>Cadence Design Systems</b></li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <section style={poemStyles} className="p-8 my-4">
          <div className="underline mb-4">the foreigner<br /></div>
          <b>I. <em>beginning:</em> </b> <br />
          i am the daughter of two tigers <br />
          my mother rubs bitter spice between her fingers, <br />
          her fortunes cradled in ginger embraces <br />
          she tells me of a Goddess’s flour-streaked hands <br />
          birthing <em>zong zi</em> children, fated to drown <br />
          in riverboats of dried bamboo leaves <br />
          i recall: a Monkey King dancing in peach nectar <br />
          sunflower seeds cracked between baby teeth <br />
          tiger balm staining my elbows forest-green <br />
          my mother searches for the world's secrets<br />
          within the Budda’s face, on her lonesome altar <br />
          i find them in the curve of her crescent smile <br />
          <br /><br />
          <b>II. <em>end:</em></b> <br />
          i am the lover of the half-melted mango sun <br />
          so on the fullest moon, i gulp down salted egg yolks <br />
          devour crushed sesame and lotus paste in the dark <br />
          my father hands over his remaining jade elephants <br />
          memories of here flicker like a damp mirage <br />
          i turn towards: the city of western luxuries <br />
          bloodstains of a hundred past conquerors, <br />
          one too-tight <em>qi pao</em> on the floor<br />
          my world beckons beyond terminal 50-65 <br />
          (i shed a skin from the past twenty-eight days) <br />
          two tigers and i fly into the horizon <br />
          <br /><br />
          <em className="text-sm">modified part of "origin" collection - awarded gold medal in the 2021 scholastic art and writing awards</em>
        </section>

        {/* <section style={poemStyles} className="p-8 my-4">
          <div className="underline mb-4">eight ph(r)ases of chang’e monologue<br /></div>
          inspired by the legend of chang'e, the scorned goddess of the moon in chinese mythology <br />
          I. My palace is cold. Far away<br />
          <em className="text-sm">part of "origin" collection - awarded gold medal in the 2021 scholastic art and writing awards, gold key in regional competition</em>
        </section> */}

      </div>
    </main >
  )
}

export default IndexPage

export const Head = () => <title>Grace Liu</title>

// import * as React from "react"

// const pageStyles = {
//   padding: 96,
//   fontFamily: "Open Sans, -apple-system, Roboto, sans-serif, serif",
//   backgroundColor: "#002451", // editor.background
//   color: "#ffffff", // editor.foreground
// }

// // socialLinkStyles
// const socialLinkStyles = {
//   padding: 4,
//   color: "#ff9da4", // terminal.ansiRed
//   fontSize: "1rem",
//   marginRight: 20,
//   textDecoration: "underline",
// }
// const listItemStyles = {
//   marginTop: 10,
//   color: "#ff9da4", // terminal.ansiRed
// }
// const sublistItemStyles = {
//   marginLeft: 15,
//   marginBottom: 5,
//   color: "#d1f1a9", // terminal.ansiGreen
// }
// const poemStyles = {
//   fontFamily: "Cormorant Garamond",
//   borderWidth: "3px",
//   borderColor: "#404f7d", // editorGroup.border
//   color: "#ffffff", // editor.foreground
//   backgroundColor: "#001733", // activityBar.background
// }

// const links = [
//   {
//     text: "linkedin",
//     url: "https://www.linkedin.com/in/grace-l-2b1a9218a/",
//   },
//   {
//     text: "github",
//     url: "https://www.github.com/graceliu1",
//   },
//   {
//     text: "email",
//     url: "mailto:gl2969@princeton.edu",
//   }
// ]

// const bgColor = "bg-[#002451]" // editor.background
// const textColor = "text-[#FFFFFF]" // editor.foreground
// const titleColor = "text-[#ffeead] hover:bg-[#001733] hover:text-[#bbdaff]" // titleBar.activeBackground and terminal.ansiYellow
// const subtitleColor = " text-[#99ffff] hover:bg-[#001733] hover:text-[#8acb88]" // activityBar.background and terminal.ansiCyan
// const blockColor1 = "bg-[#d1f1a9]" // terminal.ansiGreen
// const spanColor1 = "decoration-[#d1f1a9]"
// const blockColor2 = "bg-[#ff9da4]" // terminal.ansiRed
// const spanColor2 = "decoration-[#ff9da4]"
// // Navbar color variables
// const navbarTextColor = "#d1f1a9"; // Green text for navbar
// const navbarHoverColor = "#e7a869"; // Orange hover color for navbar
// const navbarHoverBgColor = "#001126"; // Darker background on hover

// const IndexPage = () => {
//   return (
//     <main class={`flex justify-center items-center ${bgColor} ${textColor}`} style={pageStyles}>
//       <div class="w-11/12">

//         <div id="top" class="my-3 h-screen items-center ">

//           <button class={`inline-block my-4 ${titleColor} duration-150 text-4xl p-2`}><code>{'>'}{'>'} Grace Liu ٩(＾◡＾)۶</code></button>

//           <span class={`text-lg ml-5 inline-block float-right text-[${navbarTextColor}] hover:text-[${navbarHoverColor}] duration-150 `}><code> <span class={`hover:bg-[${navbarHoverBgColor}] p-1`} ><a target="_blank" href="https://www.linkedin.com/in/grace-l-2b1a9218a/">{'{'}say hi{'}'}</a></span>  </code></span>

//           <span class={`text-lg ml-5 inline-block float-right text-[${navbarTextColor}] hover:text-[${navbarHoverColor}] duration-150 `}><code><span class={`hover:bg-[${navbarHoverBgColor}] p-1`}><a target="_blank" href="mailto:gl2969@princeton.edu?subject=Request for Grace Liu's Resume">{'{'}resume{'}'}</a></span></code></span>

//           <span class={`text-lg ml-5 inline-block float-right text-[${navbarTextColor}] hover:text-[${navbarHoverColor}] duration-150 `}><code><span class={`hover:bg-[${navbarHoverBgColor}] p-1`}>{'{'}<a target="_blank" href="https://www.github.com/graceliu1">github{'}'}</a> </span> </code></span>

//           <button class={`${subtitleColor} my-6 duration-150  pl-2 p-1`}><code>{'>'}{'>'} Class of 2026 |{'>'} gl2969@princeton.edu </code></button>
//           <br />
//           <p class="my-4 w-4/6" >Hello, I'm a third-year Computer Science student!
//             I grew up in the east Bay Area but am currently located in New Jersey.
//             <br />
//             <br />

//             I love word games, fiction, poetry, and music.
//             On campus, I'm involved with Old NasSoul a-capella, ACM, and Princeton Women in CS. I'm interested in <b>software engineering</b> and <b>machine learning</b> roles.
//             {' '}Reach out through email for a chat!</p>
//           <br />
//           <br />

//           <span class={`duration-150 underline underline-offset-8 ${spanColor1} text-[#d1f1a9] hover:bg-[#001733] decoration-6 mt-3 text-4xl`}>(๑˘ᵕ˘)ﾟ &nbsp; &nbsp; &nbsp; ~( ˘▾˘~)  </span>
//           <span class={`duration-150  underline underline-offset-8 ${spanColor2} text-[#ff9da4] hover:bg-[#001733]  decoration-6 float-right text-4xl`}> ( ˘▽˘)っ  &nbsp; &nbsp; &nbsp; (っ˘ڡ˘ς)  </span>
//           <br />


//           <div>
//             <span class={`align-left inline ${blockColor1} w-60 h-3  mt-4 text-4xl`}> </span>
//             <span class={`inline ${blockColor2} w-60 h-3 text-4xl`}> </span>
//           </div>
//           <div class="grid place-items-center">
//             <span class="hover:text-slate-500 text-3xl" > <a href="#education">&#8964;</a> </span>
//           </div>
//         </div>

//         <div id="education" class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-7">
//           <div class="bg-[#001733] hover:bg-[#001126] duration-150 overflow-hidden shadow-sm"> {/* Dark blue/black background */}
//             <div class="px-12 py-10">
//               <button class="text-lg mb-2 px-1 py-0.5 text-[#8fb56e]"><code>{'{'}education{'}'}</code></button> {/* Green text */}
//               <p class="my-4">
//                 <ul>
//                   <li style={listItemStyles}><code>{'>'}{'>'}</code> <b class="text-[#8fb56e]">major:</b> computer science</li> {/* Green text */}
//                   <li style={listItemStyles}><code>{'>'}{'>'}</code> <b class="text-[#8fb56e]">minors:</b> statistics & ML, finance</li>
//                   <li style={listItemStyles}><code>{'>'}{'>'}</code> <b class="text-[#8fb56e]">relevant coursework:</b></li>
//                   <li class="my-3" style={sublistItemStyles}><code>{'>'}</code> Distributed Systems</li>
//                   <li style={sublistItemStyles}><code>{'>'}</code> Probability & Stochastic Systems</li>
//                   <li style={sublistItemStyles}><code>{'>'}</code> Economics & Computing (Game Theory)</li>
//                   <li style={sublistItemStyles}><code>{'>'}</code> Computer Vision</li>
//                   <li style={sublistItemStyles}><code>{'>'}</code> Machine Learning</li>
//                   <li style={sublistItemStyles}><code>{'>'}</code> Functional Programming*</li>
//                   <li style={sublistItemStyles}><code>{'>'}</code> Regression*</li>
//                 </ul>
//               </p>
//             </div>
//           </div>

//           <div class="bg-[#001733] hover:bg-[#001126] duration-150 overflow-hidden shadow-sm"> {/* Dark blue/black background */}
//             <div class="px-12 py-10">
//               <button class="text-lg mb-2 px-1 py-0.5 text-[#e7a869]"><code>{'{'}experience{'}'}</code></button> {/* Orange text */}
//               <p class="my-4">
//                 <ul>
//                   <li style={listItemStyles}><code>{'>'}{'>'}</code> Summer 2025 | Incoming SWE Intern @ <b class="text-[#e7a869]">Hudson River Trading</b></li> {/* Orange text */}
//                   <li style={listItemStyles}><code>{'>'}{'>'}</code> Fall 2024 | Undergraduate Research Fellow @ <b class="text-[#e7a869]">Princeton Data-Driven Social Science</b></li> {/* Orange text */}
//                   <li style={listItemStyles}><code>{'>'}{'>'}</code> Summer 2024 | SWE Intern @ <b class="text-[#e7a869]">Bloomberg L.P.</b></li>
//                   <li style={listItemStyles}><code>{'>'}{'>'}</code> Spring 2024 | Trading and Technology Winter Intern @ <b class="text-[#e7a869]">Hudson River Trading</b></li>
//                   <li style={listItemStyles}><code>{'>'}{'>'}</code> Spring 2023 ~ now | COS226 Grading Manager @ <b class="text-[#e7a869]">Princeton CS Department</b></li>
//                   <li style={listItemStyles}><code>{'>'}{'>'}</code> Summer 2023 | SWE Intern @ <b class="text-[#e7a869]">Cadence Design Systems</b></li>
//                 </ul>
//               </p>
//             </div>
//           </div>
//         </div>



//         <br />

//         <section style={poemStyles} class="p-8 my-4">

//           <div class="underline mb-4">the foreigner<br /></div>
//           <b>I. <em>beginning:</em> </b> <br />
//           i am the daughter of two tigers <br />
//           my mother rubs bitter spice between her fingers, <br />
//           her fortunes cradled in ginger embraces <br />
//           she tells me of a Goddess’s flour-streaked hands <br />
//           birthing <em>zong zi</em> children, fated to drown <br />
//           in riverboats of dried bamboo leaves <br />
//           i recall: a Monkey King dancing in peach nectar <br />
//           sunflower seeds cracked between baby teeth <br />
//           tiger balm staining my elbows forest-green <br />
//           my mother searches for the world's secrets<br />
//           within the Budda’s face, on her lonesome altar <br />
//           i find them in the curve of her crescent smile <br />
//           <br /><br />
//           <b>II. <em>end:</em></b> <br />
//           i am the lover of the half-melted mango sun <br />
//           so on the fullest moon, i gulp down salted egg yolks <br />
//           devour crushed sesame and lotus paste in the dark <br />
//           my father hands over his remaining jade elephants <br />
//           memories of here flicker like a damp mirage <br />
//           i turn towards: the city of western luxuries <br />
//           bloodstains of a hundred past conquerors, <br />
//           one too-tight <em>qi pao</em> on the floor<br />
//           my world beckons beyond terminal 50-65 <br />
//           (i shed a skin from the past twenty-eight days) <br />
//           two tigers and i fly into the horizon <br />
//           <br /><br /><em class="text-sm">modified part of "origin" collection - awarded gold medal in the 2021 scholastic art and writing awards</em>
//         </section>

//         <section style={poemStyles} class="p-8 my-4">
//           <div class="underline mb-4">eight ph(r)ases of chang’e monologue <br /></div>
//           inspired by the legend of chang'e, the scorned goddess of the moon in chinese mythology <br />
//           I. My palace is cold. Far away<br />
//           II. from your arrows and fire, I<br />
//           III. welcome your glare. But to tell <br />
//           IV. the truth, I did not drink that<br />
//           V.   elixir out of greed. Did you  <br />
//           VI. find out why I waned?  <br />
//           VII. I escape, a round-faced youth.  <br />
//           VIII. Yet you always chase.
//           <br /><br /><em class="text-sm">part of "origin" collection - awarded gold medal in the 2021 scholastic art and writing awards, gold key in regional competition</em>
//         </section>

//         <br />
//         <div class="flex justify-center items-center" id="socials">
//           {links.map(link => (
//             <code key={link.url} style={socialLinkStyles}>
//               <span>
//                 <a target="_blank" href={`${link.url}`}>
//                   {link.text}
//                 </a>
//               </span>
//             </code>
//           ))}
//           <br /> <br />
//         </div>
//       </div>
//     </main>
//   )
// }

// export default IndexPage

// export const Head = () => <title>Grace Liu</title>

