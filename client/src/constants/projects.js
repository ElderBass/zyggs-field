import shwordle from "../assets/shwordle/shwordle.png";
import shwordleGameEnd from "../assets/shwordle/game-end.png";
import shwordleStats from "../assets/shwordle/shwordle-stats.png";
import flip from "../assets/flip/flip.png";
import flipHome from "../assets/flip/home.png";
import flipEditDeck from "../assets/flip/edit-deck.png";
import flipStudyDeck from "../assets/flip/study-deck.png";
import flipChat from "../assets/flip/chat.png";
// bros and prose images
import pastBookDetail from "../assets/bros-and-prose/book-detail.png";
import currentBookDetail from "../assets/bros-and-prose/present.png";
import futureBookList from "../assets/bros-and-prose/future.png";
import palaverFeed from "../assets/bros-and-prose/palaver-feed-top.png";
import palaverFeedDetail from "../assets/bros-and-prose/palaver-feed-detail.png";
import palaverBookRec from "../assets/bros-and-prose/palaver-book-rec-noti.png";
import palaverLike from "../assets/bros-and-prose/palaver-like-noti.png";
import profile from "../assets/bros-and-prose/profile.png";

export const PROJECT_CAROUSEL_INTERVAL = 2500;

const brosAndProseImages = [
    {
        src: pastBookDetail,
        alt: "Bros and Prose image - past book detail",
    },
    {
        src: currentBookDetail,
        alt: "Bros and Prose image - current book detail",
    },
    {
        src: futureBookList,
        alt: "Bros and Prose image - future book list",
    },
    {
        src: palaverFeed,
        alt: "Bros and Prose image - palaver feed",
    },
    {
        src: palaverFeedDetail,
        alt: "Bros and Prose image - palaver feed detail",
    },
    {
        src: palaverBookRec,
        alt: "Bros and Prose image - palaver book rec notification",
    },
    {
        src: palaverLike,
        alt: "Bros and Prose image - palaver like notification",
    },
    {
        src: profile,
        alt: "Bros and Prose image - profile page",
    },
];

export const projects = [
    {
        name: "bros and prose",
        description: "A cute and fun website for me and my friends' book club",
        images: brosAndProseImages,
        links: {
            github: "https://github.com/ElderBass/bros-and-prose",
            live: "https://bros-and-prose.vercel.app/",
        },
    },
    {
        name: "shworlde",
        description: "Definitely NOT a Wordle clone...",
        images: [
            {
                src: shwordle,
                alt: "Shwordle image",
            },
            {
                src: shwordleGameEnd,
                alt: "Shwordle game end image",
            },
            {
                src: shwordleStats,
                alt: "Shwordle stats image",
            },
        ],
        links: {
            github: "https://github.com/ElderBass/shwordle",
            live: "https://elderbass.github.io/shwordle/",
        },
    },
    {
        name: "flip",
        description: "A social flash-card app with live chat",
        images: [
            {
                src: flip,
                alt: "Flip landing page",
            },
            {
                src: flipHome,
                alt: "Flip home page",
            },
            {
                src: flipEditDeck,
                alt: "Flip edit deck page",
            },
            {
                src: flipStudyDeck,
                alt: "Flip study deck page",
            },
            {
                src: flipChat,
                alt: "Flip chat page",
            },
        ],
        links: {
            github: "",
            live: "",
        },
    },
];