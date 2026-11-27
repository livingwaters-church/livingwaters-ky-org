document.addEventListener("DOMContentLoaded", () => {

    const ticker = document.getElementById("global-ticker");
    if (!ticker) return;

    const announcements = [
        '🚨 <strong>It is with heavy hearts and profound sorrow we announce the passing of our beloved Pastor, Vance Evans Sr. Please keep his family and our church community in your prayers during this time of mourning.</strong>',
        '🚓 <strong>Fill the Cruiser:</strong> Annual Toy & Coat Drive (plus non-perishable goods) at Cash Express on Ft. Campbell Blvd, Oak Grove, KY — Wednesday, December 9th @ 9:00 AM – 2:00 PM!',
        '🎄 <strong>Elisha\'s Closet Christmas Pantry:</strong> Friday, December 18th @ 10:00 AM – 12:00 PM — providing hats, gloves, toys, gently used clothes, and food baskets!',
        '💦 <strong>Ministry Event Scheduled:</strong> Womens Ministry, November 16th @ 5:30pm :)',
        '🧺 <strong>Food Crisis Assistance:</strong> Food baskets are available anytime for families facing a hunger crisis—reach out to A Mission of Hope or Elisha\'s Closet for support.',
        '📖 <strong>Awanas:</strong> Wednesday\'s @ 6pm!',
        '📦 <strong>Food Pantry:</strong> The Elisha\'s Closet and Food Pantry scheduled for Friday November 20th @ 9:00am - 12:00pm is cancelled this month!',
        '📦 <strong>Thanksgiving Food Distribution:</strong> A Mission of Hope Thanksgiving Food Giveaway, Viceroy Performing Arts Center, Oak Grove, KY, Saturday November 21st @ 11:00am - 2:00pm!',
        /*'👔 <strong>Childrens Ministry Qtr Meeting:</strong> Saturday, TBD @ 10:00 AM!',*/
        /*'🕊️ <strong>Baptism:</strong> Baptism Sunday August 23rd!',*/
        /*'👔 <strong>Singles Ministry:</strong> Saturday, October 24th @ 19:00 AM!',*/
        /*'🎉 <strong>Marriage Enrichment Night:</strong> Pinnacle Bowling Ally, Friday, 18th @ 6:00pm',*/
        '👔 <strong>Men\'s Ministry:</strong> Saturday, November 7th @ 08:30 AM!',
        '📱 <strong>RightNow Media:</strong> Free access to 25,000+ Bible study videos! Text LWKY to 49775 to join.'
    ];

    function buildTrack() {
        return announcements
            .map(item => `<div class="ticker-item">${item}</div>`)
            .join("");
    }

    ticker.innerHTML = `
        <div class="ticker-wrap">
            <div class="ticker-content">
                ${buildTrack()}
                ${buildTrack()}
            </div>
        </div>
    `;

});
