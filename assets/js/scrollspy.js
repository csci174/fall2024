(function () {
    "use strict";

    let sections = {};
    let scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
    const fixedMenuBuffer = 70;


    const initPositions = () => {
        sections = {};
        const selectors = [];
        const numHeadings = window.h_max ? Number(window.h_max) : 5;
        for (let i = 1; i <= numHeadings; i++) {
            selectors.push(`h${i}`);
        }
        const selectors_str = selectors.join(", ");
        // console.log(selectors_str);
        // const selectors_str = "h1, h2, h3, h4, h5";
        document.querySelectorAll(selectors_str).forEach((element) => {
            if (element.id.length > 0) {
                sections[element.id] = Math.abs(
                    element.offsetTop - element.clientTop
                );
            }
        });
    };

    initPositions();

    window.onscroll = () => {
        scrollPosition =
            document.documentElement.scrollTop || document.body.scrollTop;
        for (let key in sections) {
            if (sections[key] <= scrollPosition + fixedMenuBuffer + 10) {
                const currentLink = document.querySelector("aside .active");
                if (currentLink) {
                    currentLink.setAttribute("class", " ");
                }
                const link = document.querySelector(`a[href="#${key}"]`);
                if (link) {
                    link.setAttribute("class", "active");
                }
            }
        }
        initPositions();
    };
})();
