class BreadcrumbTrail extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ul>
                    <li>
                        <span class="breadcrumb-trail_sections"><b> Sitely:</b>───╮</span>
                    </li>
                    <li><a href="https://nik0la1.nekoweb.org/">Homepage</a></li>
                    <li><a href="/learning_plan/index.html">Portfolio Sitemap</a></li>
                    <li><a href="/art/index.html">Art Gallery</a></li>
                    <li>
                        <span class="breadcrumb-trail_sections"><b> Learning Plan:</b>───╮</span>
                    </li>
                    <li><a href="/learning_plan/index.html"> Sitemap</a></li>
                    <li><a href="/learning_plan/vision.html"> Vision</a></li>
                    <li><a href="/learning_plan/goals/index.html"> Goals</a></li>
                    <li><a href="/learning_plan/projects/index.html"> Projects</a></li>
                    <li><a href="/learning_plan/lti/index.html"> LTI Tracker</a></li>
            </ul>
            <img src="/assets/deco/IMG_6243.png" style="display: block; width: 95%; margin-left: auto; margin-right: auto; margin-top: 5px;" alt="born to work world is a corporation">
            <a href="https://file.garden/Ze6P3FucmRDZDfxQ/Omniscient%20Reader's%20Viewpoint%20-%20Sing-shong%20(singsyong).epub"><img src="/assets/deco/orvpropaganda_pixeled.jpg" style="display: block; width: 95%; margin-left: auto; margin-right: auto; margin-top: 10px;"></a>
            <img src="/assets/deco/IMG_7077.jpg" style="display: block; width: 95%; margin-left: auto; margin-right: auto; margin-top: 10px;">
            <img style="position: fixed; bottom: 0px; right: 0px; height: 30%; cursor:grab;" src="/learning_plan/wandere_chibi_studying-pixeled.png" />
            `;
        ``
    }
}
customElements.define('breadcrumb-trail', BreadcrumbTrail);