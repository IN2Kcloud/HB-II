window.onload = (function() {

    var filename = 'https://tympanus.net/codrops/adpacks/cda_sponsor.css?' + new Date().getTime();
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    document.getElementsByTagName("head")[0].appendChild(fileref);

    let cdaSpots = ['ad4'];
    let cdaSpot = cdaSpots[Math.floor(Math.random() * cdaSpots.length)];

    switch (cdaSpot) {
        case "ad1":
            var cdaLink = "https://bit.ly/ionoscodrops";
            var cdaSponsorName = "Leverage AI for dynamic, custom website builds with ease.";
            break;
        case "ad2":
            var cdaLink = "https://bit.ly/codrops-chromatic";
            var cdaSponsorName = "From broken layouts to incorrect colors—Chromatic's visual tests catch what functional tests miss.";
            break;
        case "ad3":
            var cdaLink = "https://bit.ly/codrops-dora-3d";
            var cdaSponsorName = "Dora — Build sites with professional-grade animations and 3D interactions, zero code.";
            break;
        case "ad4":
            var cdaLink = "https://bit.ly/codrops-diviai";
            var cdaSponsorName = "Divi AI: On demand content creation, code writing & image generation.";
            break;
        default:
            var cdaLink = "https://bit.ly/codrops-diviai";
            var cdaSponsorName = "Divi AI: On demand content creation, code writing & image generation.";
    }

    var cda = document.createElement('div');
    cda.id = 'cdawrap';
    cda.className = 'cdawrap';
    cda.innerHTML = '<a href="' + cdaLink + '" class="cda-sponsor-link" target="_blank" rel="nofollow noopener">'+ cdaSponsorName +'</a>';
    //document.getElementsByClassName('frame')[0].appendChild(cda);
    //console.log("CDA inserted");

    const frameElement = document.getElementsByClassName('frame')[0];
    if (frameElement) {
        frameElement.appendChild(cda);
    }

})();