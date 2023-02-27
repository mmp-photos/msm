 /* PORTFOLIO DEFINITION START */
   //Items in the portfolio are stored in the PORTFOLIO array//

/* IMPORT PHOTOS FOR THE PORTFOLIO OBJECTS */   
import creatureFeature from '../../assets/images/portfolio/creaturefeature.jpg';
import gatsby from '../../assets/images/portfolio/gatsby_perfume.jpg';
import terms_and_conditions from '../../assets/images/portfolio/terms_and_conditions.png';


export const PORTFOLIO = [
    {
        id: 0,
        title: 'Gatsby',
        image: gatsby,
        type: 'Copywriting',
        description: 'catalog copy for the Gatsby cologne by Immortal Perfumes',
        content: 'placeholder copy'
    },
    {
        id: 1,
        title: 'Creature Double Feature',
        image: creatureFeature,
        type: 'Social Media',
        description: 'A social media campaign post for the 2021 IndyFringe Festival',
        content: 'placeholder copy'
    },
    {
        id: 2,
        title: 'Terms and Conditions',
        image: terms_and_conditions,
        type: 'Social Media',
        description: 'The Terms and Conditions',
        content: 'This artwork was created to promote the 10 minute play Terms and Conditions.  The play is about a man who purchases a robot to be his girlfriend. I wanted the artwork to convey a few messages.  Firstly the idea of the female robot as property, and also the ease with which people will accept terms without having made an effort to understand them. Sadly the main character agreed to them rather cavalierly, and that will be his undoing.'
    },
    {
        id: 3,
        title: 'Creature Double Feature',
        image: creatureFeature,
        type: 'Social Media',
        description: 'A social media campaign post for the 2021 IndyFringe Festival',
        content: 'placeholder copy'
    },
    {
        id: 5,
        title: 'Creature Double Feature',
        image: creatureFeature,
        type: 'Social Media',
        description: 'A social media campaign post for the 2021 IndyFringe Festival',
        content: 'placeholder copy'
    },
];

/* EXPORT PORTFOLIO ARRAY */
export default PORTFOLIO;