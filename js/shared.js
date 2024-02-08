function loadHtmlContent(url, containerId) {
    fetch(url)
        .then(function(response) {
            return response.text();
        })
        .then(function(html) {
            const container = document.querySelector(containerId);
            container.innerHTML = html;
        })
        .catch(function(error) {
            console.error(`Error fetching ${url}:`, error);
        });
}

loadHtmlContent('footer.html', '#footer-container');
loadHtmlContent('header.html', '#header-container');