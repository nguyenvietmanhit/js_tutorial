const tabs = document.querySelector(".tabs");
const content = document.querySelector(".tabs > .content");

const hashes = new Map([
    ['#react', 'tab1'],
    ['#vue', 'tab2'],
    ['#angular', 'tab3'],
])

const data = new Map([
    [
        "tab1",
        {
            url: "index.html#react",
            content:
                "React is a JavaScript library for building user interfaces.",
        },
    ],
    [
        "tab2",
        {
            url: "index.html#vue",
            content: "Vue is the Progressive JavaScript Framework.",
        },
    ],
    [
        "tab3",
        {
            url: "index.html#angular",
            content:
                "Angular is a platform for building mobile and desktop web applications.",
        },
    ],
]);

tabs.addEventListener('click', (event) => {
    if (!event.target.id) return;
    update(event.target.id);
})

const update = (tabId) => {
    const currentTab = tabs.querySelector(".active");

    if (currentTab.id != tabId) {
        currentTab.classList.remove('active');
    }

    const selectedTab = document.getElementById(tabId)
    selectedTab.classList.add('active');

    const entry = data.get(tabId);
    if (entry) {
        history.pushState(null, 'dsadsa', entry.url)
        // document.title = 'dsadsad'
        content.innerHTML = entry.content
    }
}

(() => {
    const tabId = hashes.get(window.location.hash);
    if (tabId) update(tabId)
})();
