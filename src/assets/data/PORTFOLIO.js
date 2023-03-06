 /* PORTFOLIO DEFINITION START */
   //Items in the portfolio are stored in the PORTFOLIO array//

/* IMPORT PHOTOS FOR THE PORTFOLIO OBJECTS */   

/* PRIMARY IMAGES */
import developer01 from '../images/portfolio/developer01.png';
import developer02 from '../images/portfolio/developer02.png';
import marketer02 from '../images/portfolio/marketing02.png';
//import marketer01 from '../images/portfolio/marketing01.png';
import content01 from '../images/portfolio/content01.png';
import content02 from '../images/portfolio/content02.png';
import smallGods01 from '../images/portfolio/smallGods01.jpg';
import smallGods02 from '../images/portfolio/smallGods02.jpg';
import smallGods03 from '../images/portfolio/smallGods03.png';
import Fringe01    from '../images/portfolio/sirilicous.svg';
import Fringe02    from '../images/portfolio/UnholyTrinity.png';
import Fringe03    from '../images/portfolio/UnholyPoster.png';


/* IMPORT ICONS FOR TECHNOLOGIES USED */
 import iconAdobePS    from '../images/logos/photoshop.svg';
 import iconAdobeFonts from '../images/logos/fonts.svg';
 import iconAdobeAI    from '../images/logos/illustrator.svg';
 import iconReact      from '../images/logos/react-2.svg';
 import iconHTML       from '../images/logos/html-1.svg';
 import iconCss3       from '../images/logos/css-3.svg';
 //import iconMongoDB    from '../images/logos/mongodb-icon-1.svg';
 //import iconMySQL      from '../images/logos/mysql-3.svg';
 import iconBoostrap   from '../images/logos/bootstrap-5-1.svg';
 import iconJavascript from '../images/logos/logo-javascript.svg';
 //import iconPhp        from '../images/logos/php-1.svg';
 //import iconNode       from '../images/logos/nodejs-icon.svg';
 import iconFacebook   from '../images/logos/facebook_logo.svg';
 //import iconInstagram  from '../images/logos/instagram_logo_new.svg';
 import iconYouTube    from '../images/logos/youtube.svg';
 //import iconTwitter    from '../images/logos/twitter.svg';
// import iconPinterest  from '../images/logos/pinterest.svg';
/*END ICON IMPORT*/

export const PORTFOLIO = [
    {
        id: 0,
        params: 'googlyPress',
        title: 'Googly Press',
        workType: 'Developer',
        url: 'http://www.google.com',
        images: [developer02],
        artCredit: null,
        tech: [ [iconHTML, "HTML 5"],
                [iconCss3, "CSS 3"],
                [iconBoostrap, "Bootstrap"],
                [iconJavascript, "Javascript"],
                [iconAdobeFonts, "Adobe Fonts"]
              ],
        role: 'Developer and Web Designer',
        status: 'Ongoing project: routinely updated.',
        description: `Website development to showcase the company's books and drive traffic to their products on Amazon`,
        content: `<p>Googly Press creates "Happy Little Books" and sells them through Amazon's Kindle Direct Publishing platform.</p><p>The company needs a central location to list their books and embed affilate links to help generate passive income.  My intention in creating the site was to keep the friendly feeling of the products and organize them in a way that makes them easy to find and purchase.</p>`
    },
    {
        id: 1,
        params: 'angerGenerator',
        title: 'Geek Anger Generator',
        workType: 'Developer',
        url: 'http://www.geekangergenerator.com',
        images: [developer01],
        artCredit: null,
        tech: [ [iconReact, "React Javascript Framework"],
                [iconHTML, "HTML 5"],
                [iconCss3, "CSS 3"],
              ],
        role: 'Developer, Evil Mastermind',
        status: 'In development',
        description: 'To use existing public APIs to sow chaos and create unexpected mashups.',
        content: `<p>The geek anger generator is an exercise that I devised mostly to explore and use existing public APIs.</p>  <p>The first project attributed random Simpson's quotes to random Game of Thrones characters.  I enjoyed styling it using publicly available fonts and appropriate colors.  The clouds were adapted from an animation I found on <a href="https://codepen.io/Mark_Bowley/pen/LYZEBq">CodePen</a>.</p>`
    },
    {
        id: 2,
        params: 'termsAndConditions',
        title: 'MK Productions Marketing',
        workType: 'Marketer',
        url: '',
        images: [marketer02, Fringe01, Fringe02, Fringe03],
        artCredit: null,
        tech: [ [iconAdobePS, "Adobe Photoshop",],
                [iconAdobeAI, "Adobe Illustrator"]
              ],
        role: 'Designer, Marketing Coordinator',
        status: 'Completed',
        description: 'Advertise and increase the audience for the productions of an Indianapolis theatre company',
        content: `<p>I have partnered with MK Productions to promote a few of their theatre endeavors.  MK is an Indianapolis based theatre company that specializes in new comedies told from a woman's point of view.</p><p>The first project I worked on was <span className="italic">Unholy Trinity</span>.  The play won a juried panel to be included in IndyFring's DivaFest 2018.  The story explores the relationship between a woman's dissocation of her Mind, Heart, and Body - each personified into her own character.</p><p>For marketing I chose to highlight the ensemble nature of the piece and underline the comedic tone by referencing the 1980s John Hughes movies that so clearly influenced the script.  That paired with a strong social media marketing campaign helped sell out all 3 performances.</p><p>MK's entry into the 10 Minute Play Festival was called <span className="italic">Terms and Conditions</span>.  It is about a man who purchases a robot to be his girlfriend. In addition to the iTunes-esque acceptance screen I had to create a logo for the robotics company, Sirilicous.</p><p>I wanted the artwork to convey a few messages.  Firstly the idea of the female robot as property, and also the ease with which people will accept terms without having made an effort to understand them. Sadly the main character agreed to them rather cavalierly, and that will be his undoing.</p>`
    },
    {
        id: 3,
        params: 'smallGods',
        title: 'IndyFringe 2021',
        workType: 'Marketer',
        url: '',
        images: [smallGods02, smallGods01, smallGods03],
        artCredit: null,
        tech: [ [iconAdobePS, "Adobe Photoshop"],
                [iconAdobeAI, "Adobe Illustrator"],
                [iconFacebook, "Facebook"],
                [iconYouTube, "YouTube"]
              ],
        role: 'Designer, Marketing Coordinator',
        status: 'Completed',
        description: 'Promote the shows in summer Theatre Festival',
        content: '<p>Working again with MK Productions as well as IndyFringe and the Indianapolis Arts Council I provided content and social media marketing for the 2021 Fringe Festival.</p><p>Primarily my efforts focused on the MK show <span className="italic">Small Gods - Big Problems</span>.  I did promote another show <span className="italic">Copyright Safe</span> by <a href="https://www.catalystrepertory.org/" target="new">Catalyst Repertory</a> using the Creature Double Feature content highlighting the similarities between the characters in the show and recommending it as a Friday Night double-bill.</p><p>The messaging video that I made to highlight the Covid-19 precautions that the festival was taking was shared across several official social media accounts.  When the local news came to promote the festival the organizers specifically requested that actors from our show be on camera to represent them.'
    },
    {
        id: 4,
        params: 'giantsOfMassAve',
        title: 'Indiana Literary Tourism',
        workType: 'Content',
        url: '',
        images: [content01],
        artCredit: null,
        tech: [
              ],
        role: 'Writer and Researcher',
        status: 'Completed',
        description: 'Sample website content for Indianapolis tourism',
        content: '<h2>Indianapolis Literary Tourism</h2><p>Indianapolis has a rich literary heritage.  From the classic origins of Little Orphan Annie to the bright horizons of Afrofuturism the options available to visitors are just as diverse as the genres that Indianapolis authors represent. The James Whitcomb Riley house offers formal tours.  The Vonnegut Memorial Library features interactive exhibits including “Kurt’s Typewriter,” and The Red Key Tavern serves expert cocktails while Dan Wakefield, author of “Going All The Way,” hosts his spoken word show.</p><h3>Giants of Mass Ave</h3><p>Massachusetts Avenue is one of Indianapolis’ destination dining and theatre districts.  This nightlife is overlooked by large, cardigan-clad murals of Indianapolis literary icons Kurt Vonnegut and Mari Evans.</p><p>Kurt Vonnegut was born in Indianapolis in 1922 and several of his books and characters reference the city. His novels, including “Slaughterhouse Five” and “Cat’s Cradle,” are recognized for their straightforward prose and post-modernist structure.</p><p>Mari Evans is a poet closely identified with the Black Arts Movement.  She served as the Writer in Residence at Indiana University – Purdue University at Indianapolis in 1970 when her most renowned book “I Am a Black Woman” was published.  She also wrote and directed the weekly show The Black Experience on Indianapolis station WTTV.</p><h3>The Present and Retro-Future</h3><p>Around Indianapolis are locations that readers will recognize from their favorite books.  The 100 Acres Central Meadow is the home of Funky Bones the skeleton sculpture featured in John Green’s “The Fault in Our Stars.”</p><p>The White River winds its way through Indianapolis and is a significant setting for both Green’s “Turtles All the Way Down” and Maurice Broaddus’ “Pimp My Airship,” which reimagines the city’s Victorian architecture in a steampunk style.</p><p>Events of interest can be found on the website for the Indiana Writer’s Center: <a href="https://www.indianawriters.org/iwc-events/" target="new">https://www.indianawriters.org/iwc-events/</a>.</p>'
    },
    {
        id: 5,
        params: 'gatsbyCologne',
        title: 'Gatsby Cologne - Immortal Perfumes',
        workType: 'Content',
        url: '',
        images: [content02],
        artCredit: 'Immortal Perfumes',
        tech: [ 
              ],
        role: 'Writer and Satisfied Customer',
        status: 'Completed',
        description: 'Trying to express the essence of a fine cologne and entice others to purchase it',
        content: `<h2>Immortal Perfumes Gatsby</h2><h3>from their Dead Writers collection</h3><p>Notes: Lime, tobacco, vegan ambergris, tonka bean, juniper, white patchouli, champagne, grapefruit</p><p>Bright sunshine and fruit is an unexpected start to something that should be synonymous with nightlife.  Instead it's freshly laundered linen shirts and polo jerseys drying in the breeze of a West Egg morning.  The jazz age equivalent of brunch in the Hamptons.</p>The tobacco is a familiar element that provides depth and the type of intimacy only found at large parties.  Then as it wears on and winds down it changes.  Just as I'm certain often happened at Gatsby's house, the gin takes over. In the end leaving a lingering sense of a gentleman, impecably dressed with a light, clovey cigarette in one hand and a cut crystal tumbler in the other.<p>I'm very satisfied with the cologne.  It did arrive in a sample so small as to make magazine insert cards seem generous but it is something that I will certainly buy a small bottle of.  This may not be an everyday scent but for those occasions when it would be right - it would actually be perfect.</p>`
    }
];

/* EXPORT PORTFOLIO ARRAY */
export default PORTFOLIO;