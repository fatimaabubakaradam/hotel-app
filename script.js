document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu && closeMenu) {
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active'); 
            menuToggle.classList.toggle('active'); 
        });

        
        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active'); // Hide the menu
            menuToggle.classList.remove('active'); // Revert the size of the hamburger
        });
    }
});



const sections = [
    {
        title: "Why choose us",
        text: "The main reason is because our competitors have disgusting sites, but we can't write that here, so the text here will be different",
        image1: "asset/Ellipse 2.svg",
        image2: "asset/payment.svg",
        alt1: "Ellipse",
        alt2: "Payment"
    },
    {
        title: "Payment Method",
        text: "We have a lot of them, from cryptocurrencies to barter for potatoes",
        image1: "asset/Ellipse 2.svg",
        image2: "asset/searching 2.svg",
        alt1: "Ellipse",
        alt2: "Search"
    },
    {
        title: "Simple Search Process",
        text: "We checked it out, even the kids did it, but it is my mom's friend's son",
        image1: "asset/Ellipse 2.svg",
        image2: "asset/support.svg",
        alt1: "Ellipse",
        alt2: "Support"
    },
    {
        title: "24/7 Support",
        text: "Is there something you don't understand? Feel free to call us. Phone number is in the footer.",
        image1: "asset/Ellipse 2.svg",
        image2: "asset/nice.svg",
        alt1: "Ellipse",
        alt2: "Nice"
    },
    {
        title: "We are Nice",
        text: "Fantasy is over, there will be something, really convincing here",
        image1: "asset/Ellipse 2.svg",
        image2: "asset/nice.svg",
        alt1: "Ellipse",
        alt2: "Nice"
    }
];

const renderSections = sections => {
    const container = document.getElementById('sectionContainer');
    sections.forEach(section => {
        container.innerHTML += `
        <div class="section-content">
            <h1>${section.title}</h1>
            <p>${section.text}</p>
            <div class="container1">
                <img src="${section.image1}" class="Ellipse" alt="${section.alt1}">
                <img src="${section.image2}" class="Support2" alt="${section.alt2}">
            </div>
        </div>
        `;
    });
}

renderSections(sections);
const specialOffers = [
    {
        roomImage: "asset/room1.svg",
        roomAlt: "Room Image 1",
        ratingImage: "asset/rating.svg",
        favoriteImage: "asset/heart.svg",
        roomName: "Wilderness Club at Big Cedder",
        dateRange: "24 October - 1 November",
        price: "$2016",
        nights: "6 nights"
    },
    {
        roomImage: "asset/room2.svg",
        roomAlt: "Room Image 2",
        ratingImage: "asset/rating.svg",
        favoriteImage: "asset/heart.svg",
        roomName: "Wilderness Club at Big Cedder",
        dateRange: "24 October - 1 November",
        price: "$2016",
        nights: "6 nights"
    },
    {
        roomImage: "asset/room3.svg",
        roomAlt: "Room Image 3",
        ratingImage: "asset/rating.svg",
        favoriteImage: "asset/heart.svg",
        roomName: "Wilderness Club at Big Cedder",
        dateRange: "24 October - 1 November",
        price: "$2016",
        nights: "6 nights"
    }
];

const renderSpecialOffers = offers => {
    const container = document.getElementById('specialContainer');
    offers.forEach(offer => {
        container.innerHTML += `
            <div class="card">
                <div class="room1">
                    <img src="${offer.roomImage}" alt="${offer.roomAlt}">
                </div>
                <div class="rate">
                    <img src="${offer.ratingImage}" class="num" alt="Rating">
                    <img src="${offer.favoriteImage}" class="heart" alt="Favorite">
                </div>
                <div class="room-details1">
                    <h3>${offer.roomName}</h3>
                    <h4>${offer.dateRange}</h4>
                    <h5><span>${offer.price}</span> / ${offer.nights}</h5>
                </div>
            </div>
        `;
    });
}

renderSpecialOffers(specialOffers);
const reviews = [
    {
        image: "asset/Ellipse 6.svg",
        altText: "Reviewer Image 1",
        reviewText: "I quickly found the right tour for me, but I had a few questions about the hotel. I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
        reviewer: "Jonnike Borg",
        profession: "Publisher"
    },
    {
        image: "asset/human2.svg",
        altText: "Reviewer Image 2",
        reviewText: "I quickly found the right tour for me, but I had a few questions about the hotel. I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
        reviewer: "Jonnike Borg",
        profession: "Publisher"
    },
    {
        image: "asset/human3.svg",
        altText: "Reviewer Image 3",
        reviewText: "I quickly found the right tour for me, but I had a few questions about the hotel. I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
        reviewer: "Jonnike Borg",
        profession: "Publisher"
    }
];

const renderReviews = reviews => {
    const container = document.getElementById('reviewContainer');
    reviews.forEach(review => {
        container.innerHTML += `
        <div class="review">
            <div class="container">
                <img src="${review.image}" alt="${review.altText}">
            </div>
            <div class="p">
                <p>
                    ${review.reviewText}<br>
                    <span class="fabs">${review.reviewer}</span> ${review.profession}
                </p>
            </div>
        </div>
        `;
    });
}

renderReviews(reviews);
const recentTrips = [
    {
        image: "asset/Rectangle 17.svg",
        altText: "Recent Image 1",
        date: "May 23, 2022",
        time: "5 minutes",
        title: "My trip to Athens",
        description: "It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already..."
    },
    {
        image: "asset/recent2.svg",
        altText: "Recent Image 2",
        date: "May 23, 2022",
        time: "5 minutes",
        title: "Vilnius resorts",
        description: "I have not seen any resort in Vilnius, but there are wonderful people and pubs."
    },
    {
        image: "asset/recent3.svg",
        altText: "Recent Image 3",
        date: "May 23, 2022",
        time: "5 minutes",
        title: "Tips for flying on a plane",
        description: "If you have the fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while they steer the plane for you."
    }
];

const renderRecentTrips = trips => {
    const container = document.getElementById('recentContainer');
    trips.forEach(trip => {
        container.innerHTML += `
        <div class="recentt">
            <img src="${trip.image}" class="pic-recent" alt="${trip.altText}">
        </div>
        <div class="conn">
            <div class="top-content">
                <h4 class="date">${trip.date}</h4>
                <div class="right-content">
                    <div class="clock">
                        <div class="vector-container">
                            <img src="asset/Vector (1).svg" class="vec1" alt="Clock Icon">
                            <img src="asset/Vector.svg" class="round-image" alt="Round Image">
                        </div>
                        <h4><span class="time">${trip.time}</span></h4>
                    </div>
                </div>
            </div>
            <div class="tripp">
                <h1>${trip.title}</h1>
            </div>
            <div class="cityy">
                <p>${trip.description}</p>
            </div>
        </div>
        `;
    });
}

renderRecentTrips(recentTrips);