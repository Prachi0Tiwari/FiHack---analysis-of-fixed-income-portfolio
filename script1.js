document.addEventListener('DOMContentLoaded', function () {
    const articles = [
        {
            title: "Understanding Bond Markets",
            description: "An in-depth look at how bond markets operate.",
            imgSrc: "https://example.com/image1.jpg",
            link: "https://example.com/understanding-bond-markets"
        },
        {
            title: "The Future of Fixed Income",
            description: "Exploring trends and predictions in fixed income investments.",
            imgSrc: "https://example.com/image2.jpg",
            link: "https://example.com/future-of-fixed-income"
        },
        {
            title: "Investing in Municipal Bonds",
            description: "Learn the benefits of municipal bonds and how to invest in them.",
            imgSrc: "https://example.com/image3.jpg",
            link: "https://example.com/investing-in-municipal-bonds"
        },
        {
            title: "Corporate Bonds: Risks and Rewards",
            description: "A guide to understanding the risks and rewards of corporate bonds.",
            imgSrc: "https://example.com/image4.jpg",
            link: "https://example.com/corporate-bonds-risks-rewards"
        },
        {
            title: "Treasury Securities Explained",
            description: "Understanding the different types of Treasury securities.",
            imgSrc: "https://example.com/image5.jpg",
            link: "https://example.com/treasury-securities-explained"
        },
        {
            title: "How to Diversify Your Bond Portfolio",
            description: "Tips and strategies for diversifying your bond investments.",
            imgSrc: "https://example.com/image6.jpg",
            link: "https://example.com/diversifying-bond-portfolio"
        },
        {
            title: "The Impact of Interest Rates on Bonds",
            description: "Explore how changing interest rates affect bond prices.",
            imgSrc: "https://example.com/image7.jpg",
            link: "https://example.com/impact-of-interest-rates"
        },
        {
            title: "Bond Market Trends for 2024",
            description: "Insights into what to expect in the bond market this year.",
            imgSrc: "https://example.com/image8.jpg",
            link: "https://example.com/bond-market-trends-2024"
        }
    ];

    const articleContainer = document.getElementById('article-container');

    articles.forEach(article => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${article.imgSrc}" alt="${article.title}">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.link}" class="button">Read More</a>
        `;

        articleContainer.appendChild(card);
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Your message has been sent!');
        contactForm.reset();
    });

    // Subscribe Form Submission
    const subscribeForm = document.getElementById('subscribe-form');
    subscribeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for subscribing!');
        subscribeForm.reset();
    });
});
