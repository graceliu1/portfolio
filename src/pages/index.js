import * as React from "react";
import theme from "../styles/theme1"; // Adjust the path as needed

// Styles
const pageStyles = {
  padding: 96,
  fontFamily: "Open Sans, -apple-system, Roboto, sans-serif, serif",
  backgroundColor: theme.BACKGROUND_COLOR,
  color: theme.FOREGROUND_COLOR,
};

const listItemStyles = {
  marginTop: 10,
  color: theme.ACCENT_RED,
};

const sublistItemStyles = {
  marginLeft: 15,
  marginBottom: 5,
  color: theme.ACCENT_GREEN,
};

const poemStyles = {
  fontFamily: "Cormorant Garamond",
  borderWidth: "3px",
  borderColor: theme.POEM_BORDER_COLOR,
  color: theme.FOREGROUND_COLOR,
  backgroundColor: theme.POEM_BG_COLOR,
};

// Colors and styles for specific components
const bgColor = `bg-[${theme.BACKGROUND_COLOR}]`;
const textColor = `text-[${theme.FOREGROUND_COLOR}]`;
const titleColor = `text-[${theme.ACCENT_YELLOW}] hover:bg-[${theme.HOVER_BG_COLOR}] hover:text-[${theme.HOVER_TEXT_BLUE}]`;
const subtitleColor = `text-[${theme.ACCENT_CYAN}] hover:bg-[${theme.HOVER_BG_COLOR}] hover:text-[${theme.HOVER_TEXT_CYAN}]`;
const spanColor1 = `decoration-[${theme.ACCENT_GREEN}]`;
const spanColor2 = `decoration-[${theme.ACCENT_RED}]`;

// Navbar color variables
const navbarTextColor = theme.NAVBAR_TEXT_COLOR;
const navbarHoverColor = theme.NAVBAR_HOVER_COLOR;
const navbarHoverBgColor = theme.NAVBAR_HOVER_BG_COLOR;

const links = [
  { text: "linkedin", url: "https://www.linkedin.com/in/grace-l-2b1a9218a/" },
  { text: "github", url: "https://www.github.com/graceliu1" },
  { text: "email", url: "mailto:gl2969@princeton.edu" },
];

const IndexPage = () => (
  <div className={`min-h-screen ${bgColor}`}>
    <main className={`flex justify-center items-center ${bgColor} ${textColor}`} style={pageStyles}>
      <div className="w-11/12">
        <div className="my-3 items-center">
          <button className={`inline-block my-4 ${titleColor} duration-150 text-4xl p-2`}>
            <code>{'>'}{'>'} Grace Liu ٩(＾◡＾)۶</code>
          </button>

          {links.map((link, index) => (
            <span
              key={index}
              className={`text-lg ml-5 inline-block float-right text-[${navbarTextColor}] hover:text-[${navbarHoverColor}] duration-150`}
            >
              <code>
                <span className={`hover:bg-[${navbarHoverBgColor}] p-1`}>
                  <a target="_blank" href={link.url}>{'{'}{link.text}{'}'}</a>
                </span>
              </code>
            </span>
          ))}

          <button className={`${subtitleColor} my-6 duration-150 pl-2 p-1`}>
            <code>{'>'}{'>'} Class of 2026 |{'>'} gl2969@princeton.edu </code>
          </button>

          <p className="my-4 w-4/6">
            Hello, I'm a third-year Computer Science student! I grew up in the east Bay Area but am
            currently located in New Jersey.
            <br /><br />
            I love word games, fiction, poetry, and music. On campus, I'm involved with Old NasSoul
            a-capella, ACM, and Princeton Women in CS. I'm interested in <b>software engineering</b> and
            <b>machine learning</b> roles. Reach out through email for a chat!
          </p>

          <div className="lg:my-12 md:my-8 sm:my-6">
            <span className={`duration-150 underline underline-offset-8 ${spanColor1} text-[${theme.ACCENT_GREEN}] hover:bg-[${theme.HOVER_BG_COLOR}] decoration-6 mt-3 text-4xl`}>
              (๑˘ᵕ˘)ﾟ &nbsp; &nbsp; &nbsp; ~( ˘▾˘~)
            </span>
            <span className={`duration-150 underline underline-offset-8 ${spanColor2} text-[${theme.ACCENT_RED}] hover:bg-[${theme.HOVER_BG_COLOR}] decoration-6 float-right text-4xl`}>
              ( ˘▽˘)っ &nbsp; &nbsp; &nbsp; (っ˘ڡ˘ς)
            </span>
          </div>

          <div className="grid place-items-center">
            <span className="hover:text-slate-500 text-3xl">
              <a href="#education">&#8964;</a>
            </span>
          </div>
          <br></br>

          <div id="education" className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-7">
            {/* EducationSection */}
            <div className={`bg-[${theme.POEM_BG_COLOR}] hover:bg-[${theme.NAVBAR_HOVER_BG_COLOR}] duration-150 overflow-hidden shadow-sm px-12 py-10`}>
              <button className="text-lg mb-2 px-1 py-0.5 text-[#8fb56e]">
                <code>{'{'}education{'}'}</code>
              </button>
              <ul className="my-4">
                <li style={listItemStyles}><code>{'>'}{'>'}</code> <b className="text-[#8fb56e]">major:</b> computer science</li>
                <li style={listItemStyles}><code>{'>'}{'>'}</code> <b className="text-[#8fb56e]">minors:</b> statistics & ML, finance</li>
                <li style={listItemStyles}><code>{'>'}{'>'}</code> <b className="text-[#8fb56e]">relevant coursework:</b></li>
                <li style={sublistItemStyles}><code>{'>'}</code> Distributed Systems</li>
                <li style={sublistItemStyles}><code>{'>'}</code> Probability & Stochastic Systems</li>
                <li style={sublistItemStyles}><code>{'>'}</code> Economics & Computing (Game Theory)</li>
                <li style={sublistItemStyles}><code>{'>'}</code> Computer Vision</li>
                <li style={sublistItemStyles}><code>{'>'}</code> Machine Learning</li>
                <li style={sublistItemStyles}><code>{'>'}</code> Functional Programming*</li>
                <li style={sublistItemStyles}><code>{'>'}</code> Regression*</li>
              </ul>
            </div>
            {/* ExperienceSection */}
            <div className={`bg-[${theme.POEM_BG_COLOR}] hover:bg-[${theme.NAVBAR_HOVER_BG_COLOR}] duration-150 overflow-hidden shadow-sm px-12 py-10`}>
              <button className="text-lg mb-2 px-1 py-0.5 text-[#e7a869]">
                <code>{'{'}experience{'}'}</code>
              </button>
              <ul className="my-4">
                <li style={listItemStyles}><code>{'>'}{'>'}</code> Summer 2025 | Incoming SWE Intern @ Hudson River Trading</li>
                <li style={listItemStyles}><code>{'>'}{'>'}</code> Fall 2024 | Undergraduate Research Fellow @ <b className="text-[#e7a869]">Princeton Data-Driven Social Science</b></li>
                <li style={listItemStyles}><code>{'>'}{'>'}</code> Summer 2024 | SWE Intern @ <b className="text-[#e7a869]">Bloomberg L.P.</b></li>
                <li style={listItemStyles}><code>{'>'}{'>'}</code> Spring 2024 | Trading and Technology Winter Intern @ <b className="text-[#e7a869]">Hudson River Trading</b></li>
                <li style={listItemStyles}><code>{'>'}{'>'}</code> Spring 2023 ~ now | COS226 Grading Manager @ <b className="text-[#e7a869]">Princeton CS Department</b></li>
                <li style={listItemStyles}><code>{'>'}{'>'}</code> Summer 2023 | SWE Intern @ <b className="text-[#e7a869]">Cadence Design Systems</b></li>
              </ul>
            </div>
          </div>

          <section style={poemStyles} className="p-8 my-4">
            <div className="underline mb-4">the foreigner<br /></div>
            <b>I. <em>beginning:</em> </b> <br />
            i am the daughter of two tigers... <br />
            my mother rubs bitter spice between her fingers, <br />
            her fortunes cradled in ginger embraces... (truncated for brevity)
            <br /><br />
            <b>II. <em>end:</em></b> <br />
            i am the lover of the half-melted mango sun... <br />
            my world beckons beyond terminal 50-65... (truncated for brevity)
            <br /><br />
            <em className="text-sm">modified part of "origin" collection - awarded gold medal in the 2021 scholastic art and writing awards</em>
          </section>

        </div>
      </div>
    </main >
  </div >
);

export default IndexPage;

export const Head = () => <title>Grace Liu</title>;
