import React from 'react'; 
import user from "../images/user.png"
const reviews = [
    {
        name: "Erin Mikail Staples",
        username: "@ERINMIKAIL",
        text: "I use clayearth and it's been doing wonders. Also incorporates email, calendar and even text messages and has notes built-in. For all those times that you're like 'I swear I know someone in that space'.",
    },
    {
        name: "Mert Alemdar",
        username: "@MERTALEMDARCOM",
        text: "As a dedicated Obsidian user in the past, my encounter with Clay eliminated the need for anything else. Clay offers an extremely simple, minimalist, and user-friendly interface. Now, I can activate my notes directly from any application on my computer, effortlessly translating my thoughts into writing.",
    },
    {
        name: "Steven",
        username: "@STEVENTHEMAKER",
        text: "The user experience, overall sentiment, and interface design in Clay are world-class. It has an excellent relationship manager that helps you consolidate contacts, and notes, and remember shared experiences. It has lots of useful features such as enriched notes, search, contact updates, and more.",
    },
    {
        name: "Tem Nugmanov",
        username: "@TEMNCO",
        text: "Clay is an incredibly thoughtfully and aesthetically built product. I've been on the hunt for a personal CRM for a long-time before finally finding Clay. It's just too good.",
    },
    {
        name: "Leila Blauner",
        username: "@LEILABLAUNER",
        text: "I love that Clay serves as a fast memory refresher. For any person in contacts in any communication system that I've had contact with before, Clay reminds me how I've met them, what links we share, what the last time we've interacted was, what formats, etc. and will show me their memories for the next follow-up.",
    },
    {
        name: "Jaclyn Siu",
        username: "@JACLYNSIU",
        text: "Low-key the most excited about @ClayHQ since I've long preached thoughtful networking. Relationship management is a delicate art and Clay seems to get it right. Contacts syncing as I tweet!",
    }
];

const ReviewSection = () => {
    return (
        <div className="review-section">
            <h2 className="review-title">What People Are Saying</h2>
            <div className="reviews">
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <p className="review-text">"{review.text}"</p>
                        <div className="review-author">
                            <div className='author-img'>
                            <img src={user} alt={review.name} className="w-full h-full" />

                            </div>
                            <div>
                                <strong>{review.name}</strong>
                                <span>{review.username}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
