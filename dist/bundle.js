(()=>{"use strict";const n=[{id:1,img:"/src/assets/poster de serantia con el logo.jpg"},{id:2,img:"/src/assets/ilustracion cuervo cafe.jpg"},{id:3,img:"/src/assets/fondo 3 TERMINADO.jpg"},{id:4,img:"/src/assets/expreciones thulcarian.jpg"},{id:5,img:"/src/assets/niñas.png"},{id:6,img:"/src/assets/el fauno.jpg"},{id:7,img:"/src/assets/expreciones de serantia.jpg"},{id:8,img:"/src/assets/fondo 2 teo.jpg"},{id:9,img:"/src/assets/tridi.png"}];class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["section"]}attributeChangedCallback(n,i,e){"section"===n&&this.render()}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n            <link rel="stylesheet" href="../src/components/post1/index.css">\n             \n            <section class="post">\n                <div class="social-post">\n                 <div class="user-icon">\n                    <div class="circle">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>\n                        </svg>\n                    </div>\n                    </div>\n                    </div>\n                    <div class="part2">\n                        <h2 id=>What\'s happening?</h2>\n                        <input type="text" placeholder="Write your new post" </input>\n                        <div class="icon">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image-fill" viewBox="0 0 16 16">\n                        <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>\n                        </svg>\n                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">\n                        <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>\n                        <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>\n                        </svg>\n                    </div>\n                 \n                    <div class="button">\n                    <button type="submit">Post</button>\n                    </div>\n                    <hr>\n                   </div>\n                   </div>\n            </section>\n        ')}}customElements.define("post-1",i);class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["section"]}attributeChangedCallback(n,i,e){"section"===n&&this.render()}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n            <link rel="stylesheet" href="../src/components/footer/index.css">\n             \n        <footer class="footer">\n            <div class="container">\n                <div class="logo-section">\n                    <svg width="173" height="139" viewBox="0 0 173 139" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <g clip-path="url(#clip0_126_1084)">\n                    <path d="M54.8522 127.66L60.269 129.695C59.0978 132.348 57.1817 134.605 54.7523 136.193C52.3023 137.839 49.4099 138.704 46.4571 138.674H45.3111C41.3052 138.674 37.4633 137.086 34.6306 134.258C31.798 131.431 30.2066 127.595 30.2066 123.597V119.5C30.1996 117.515 30.5851 115.549 31.3411 113.713C32.097 111.878 33.2085 110.209 34.6118 108.804C36.015 107.398 37.6825 106.283 39.5186 105.522C41.3546 104.761 43.3231 104.369 45.3111 104.369H46.4771C49.1126 104.344 51.7054 105.034 53.9794 106.364C56.228 107.669 58.1079 109.523 59.4428 111.751L54.1793 114.179C53.292 112.93 52.1265 111.903 50.7746 111.179C49.4119 110.437 47.8828 110.053 46.3306 110.062H45.4844C44.2302 110.058 42.9876 110.301 41.828 110.778C40.6684 111.255 39.6149 111.956 38.728 112.842C37.8412 113.727 37.1385 114.779 36.6606 115.936C36.1827 117.094 35.9389 118.334 35.9433 119.586V123.45C35.9371 124.703 36.1797 125.944 36.657 127.102C37.1343 128.261 37.8368 129.313 38.724 130.199C39.6112 131.084 40.6655 131.786 41.8259 132.262C42.9862 132.738 44.2297 132.981 45.4844 132.974H46.3306C48.1195 132.994 49.8743 132.485 51.3742 131.511C52.8533 130.556 54.0531 129.227 54.8522 127.66Z" fill="white"/>\n                    <path d="M68.7174 137.83H63.0007V104.748H68.7174V137.83Z" fill="white"/>\n                    <path d="M90.3779 113.827H96.0945V137.83H90.4512V137.039C92.1702 135.582 93.0364 134.278 93.0364 133.121V132.137C92.9333 132.366 92.8153 132.588 92.6832 132.802C92.3467 133.327 91.982 133.833 91.5905 134.318C91.0525 135.02 90.4454 135.666 89.7783 136.247C88.9991 136.892 88.1189 137.404 87.1731 137.763C86.0838 138.207 84.9182 138.433 83.7418 138.429C80.7123 138.422 77.809 137.217 75.6674 135.078C73.5258 132.939 72.3205 130.04 72.3152 127.016V124.734C72.3222 121.711 73.5284 118.814 75.6697 116.677C77.8111 114.539 80.7135 113.335 83.7418 113.328C84.9586 113.272 86.1744 113.459 87.3183 113.877C88.4622 114.295 89.5113 114.936 90.4046 115.762L90.3779 113.827ZM90.3779 126.869V124.874C90.3921 124.105 90.25 123.342 89.9603 122.63C89.6705 121.918 89.2392 121.272 88.6922 120.73C88.1594 120.178 87.5181 119.741 86.8085 119.447C86.0989 119.153 85.3362 119.008 84.568 119.021H83.8684C83.0982 119.02 82.3354 119.171 81.6236 119.465C80.9119 119.759 80.2651 120.19 79.7205 120.733C79.1759 121.277 78.744 121.923 78.4497 122.633C78.1553 123.344 78.0043 124.105 78.0051 124.874V126.869C78.0043 127.638 78.1553 128.4 78.4497 129.11C78.744 129.821 79.1759 130.466 79.7205 131.01C80.2651 131.553 80.9119 131.985 81.6236 132.278C82.3354 132.572 83.0982 132.723 83.8684 132.722H84.568C85.3362 132.735 86.0989 132.59 86.8085 132.296C87.5181 132.002 88.1594 131.565 88.6922 131.013C89.2392 130.472 89.6705 129.826 89.9603 129.113C90.25 128.401 90.3921 127.638 90.3779 126.869Z" fill="white"/>\n                    <path d="M109.507 123.697C112.727 124.69 114.915 125.566 116.069 126.324C118.122 127.681 119.148 129.454 119.148 131.645C119.148 133.527 118.188 135.11 116.269 136.38C114.225 137.689 111.834 138.354 109.407 138.289C105.92 138.38 102.524 137.178 99.8723 134.917L101.958 129.596C103.178 130.719 104.616 131.582 106.182 132.13C107.733 132.75 109.383 133.085 111.052 133.121C112.738 133.121 113.851 132.676 114.384 131.791C114.53 131.564 114.615 131.304 114.633 131.036C114.65 130.767 114.599 130.498 114.484 130.255C114.007 129.548 113.333 128.998 112.545 128.672C111.129 127.97 109.65 127.404 108.128 126.982C101.865 125.133 99.1305 122.289 99.9256 118.449C100.098 117.674 100.433 116.945 100.908 116.308C101.384 115.672 101.989 115.144 102.684 114.758C104.374 113.714 106.334 113.187 108.321 113.242C110.038 113.233 111.75 113.434 113.418 113.84C114.628 114.095 115.802 114.494 116.916 115.031L117.962 115.623L115.963 120.943L115.417 120.697C115.017 120.498 114.544 120.285 113.997 120.032C113.451 119.779 112.858 119.567 112.212 119.367C111.536 119.125 110.846 118.926 110.146 118.769C109.513 118.615 108.865 118.532 108.214 118.522C107.048 118.522 106.255 118.868 105.822 119.56C105.563 119.915 105.452 120.358 105.513 120.793C105.574 121.229 105.802 121.624 106.149 121.894C107.123 122.733 108.269 123.348 109.507 123.697Z" fill="white"/>\n                    <path d="M134.599 113.228C137.482 113.228 139.569 114.039 140.862 115.662C142.171 117.328 142.856 119.398 142.801 121.515V137.83H137.091V123.697C137.124 123.136 137.027 122.576 136.807 122.059C136.588 121.542 136.251 121.083 135.825 120.717C134.979 120.025 133.913 119.657 132.82 119.679C131.661 119.655 130.529 120.031 129.615 120.743C129.174 121.094 128.822 121.545 128.591 122.059C128.359 122.572 128.253 123.134 128.283 123.697V137.83H122.566V104.748H128.283V114.571L126.837 116.407C126.302 117.123 126.009 117.989 125.997 118.881V119.726L126.27 119.061C126.904 117.743 127.761 116.544 128.802 115.516C129.536 114.857 130.376 114.329 131.288 113.953C132.328 113.481 133.456 113.234 134.599 113.228Z" fill="white"/>\n                    </g>\n                    <g clip-path="url(#clip1_126_1084)">\n                    <path d="M84.2686 30.6602C88.7467 33.8039 93.0459 38.5042 97.1665 44.7612C98.913 47.3659 101.011 49.7157 103.402 51.7435C105.414 53.2355 107.872 53.9994 110.374 53.91C114.419 53.9924 118.335 52.4824 121.281 49.7043C122.73 48.4215 123.886 46.8412 124.67 45.0708C125.454 43.3004 125.848 41.3816 125.826 39.4449C125.826 35.4819 124.49 31.2155 121.817 26.6457C118.777 21.6593 114.842 17.2797 110.21 13.7281C104.637 9.41153 98.3776 6.06628 91.6947 3.83277C83.9629 1.20839 75.8436 -0.0874038 67.6803 0.000261836C53.6098 0.000261836 41.5116 2.90727 31.3859 8.72124C21.346 14.4229 13.2486 23.0147 8.1442 33.3821C3.88249 42.0479 1.3009 51.4448 0.536314 61.0744C0.200003 64.8158 -0.445381 69.067 0.390851 72.7721C1.76336 78.8986 7.3352 83.5231 13.3343 84.8249C21.642 86.6455 31.4314 81.8026 33.5947 73.2546C34.4491 69.8954 33.9583 66.4635 34.231 63.0589C35.0854 52.6174 38.0123 44.124 43.0751 37.6515C49.1348 29.8591 57.1608 25.9629 67.1531 25.9629C74.0732 25.9629 79.7784 27.5287 84.2686 30.6602Z" fill="white"/>\n                    <path d="M168.928 43.186C167.682 41.6828 166.114 40.4794 164.341 39.6648C162.568 38.8502 160.635 38.4451 158.684 38.4796C155.457 38.3937 152.319 39.5466 149.913 41.7022C147.203 44.2695 144.95 47.2802 143.25 50.6052C139.542 57.0321 135.282 61.8114 130.47 64.9429C125.659 68.0744 119.878 69.6402 113.128 69.6402C108.363 69.6962 103.644 68.705 99.3027 66.7362C94.9147 64.6539 91.1015 61.5287 88.1952 57.6329C86.7198 55.6792 85.4354 53.5879 84.3595 51.3881C83.2869 49.1942 82.6144 47.2916 80.542 45.8168C77.9487 44.1149 74.9335 43.1693 71.8342 43.0858C68.4683 42.9228 65.1257 43.7221 62.1965 45.3905C59.2672 47.0588 56.8723 49.5273 55.2914 52.5078C53.3553 56.2128 52.2283 61.0284 54.4279 64.8063C56.8534 69.0404 59.7735 72.9704 63.1265 76.5132L63.6265 77.0048C75.2792 88.833 91.3675 94.7471 111.892 94.7471C120.856 94.8736 129.78 93.5361 138.315 90.7872C145.391 88.5555 151.986 85.0137 157.757 80.3457C162.426 76.5768 166.324 71.9402 169.237 66.6907C171.746 61.9145 173 57.4236 173 53.2178C172.931 49.484 171.48 45.9089 168.928 43.186Z" fill="white"/>\n                    </g>\n                    <defs>\n                    <clipPath id="clip0_126_1084">\n                    <rect width="112.587" height="34.3254" fill="white" transform="translate(30.2065 104.349)"/>\n                    </clipPath>\n                    <clipPath id="clip1_126_1084">\n                    <rect width="173" height="94.7381" fill="white"/>\n                    </clipPath>\n                    </defs>\n                    </svg>\n                \n            </div>\n\n                     <div class=" Built-for-Creatives">\n                        <h3> Built for Creatives</h3>\n                        <ul>\n                            <li><a href="#">Custom Design</a></li>\n                            <li><a href="#">Daily Inspiration</a></li>\n                            <li><a href="#">Creative Community</a></li>\n                            <li><a href="#">Dynamic Portfolio</a></li>\n                            <li><a href="#">Creative Blog</a></li>\n                        </ul>\n                    </div>\n\n\n                <div class="find-talent-section">\n                    <h3>Find Talent</h3>\n                    <ul>\n                        <li><a href="#">Explore Portfolios</a></li>\n                        <li><a href="#">Connect with Experts</a></li>\n                        <li><a href="#">Custom Projects</a></li>\n                    </ul>\n                </div>\n                    <div class="clash-section">\n                        <h3>Clash</h3>\n                        <ul>\n                            <li><a href="#">Download the App</a></li>\n                            <li><a href="#">Blog</a></li>\n                            <li><a href="#">Careers</a></li>\n                        </ul>\n                    </div>\n                        <div class="social-section">\n                            <h3>Social</h3>\n                            <div class="icono">\n                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">\n                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>\n                                </svg>\n                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">\n                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>\n                                </svg>\n                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">\n                                <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"/>\n                                </svg>\n                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">\n                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>\n                                </svg>\n                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">\n                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>\n                                </svg>\n\n\n                            </div>\n                            <ul >\n                                <li> <a href="#">Instagram</a></li>\n                                <li> <a href="#">X</a></li>\n                                <li> <a href="#">pinterest</a></li>\n                                <li> <a href="#">facebook</a></li>\n                                <li> <a href="#">linkedin</a></li>\n                            </ul>\n                        </div>\n            </div>\n            <hr>\n                <div class="copyright">\n                    © 2014 Clash. Co reserved.\n                </div>\n\n         </footer>\n        ')}}var t;customElements.define("foo-ter",e),function(n){n.image="image",n.uid="uid"}(t||(t={}));class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.values(t)}attributeChangedCallback(n,i,e){n===t.image&&(this.image=e),this.render()}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="../src/components/banner1/index.css">\n      \n                    <div class= "cardWorker">\n                        <div id="image">\n                            <img id="img" src="${this.image?this.image:"Not found"}">\n                        </div>\n                    \n                    </div>\n               \n            `)}}customElements.define("component-container",s);class a extends HTMLElement{constructor(){super(),this.imagesBanner=[],this.attachShadow({mode:"open"}),n.forEach((n=>{const i=this.ownerDocument.createElement("component-container");i.setAttribute(t.image,n.img),this.imagesBanner.push(i)}))}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML='\n            <link rel="stylesheet" href="../src/Components/index.css">\n            <link rel="stylesheet" href="../src/Components/banner1/index.css">\n\n                <post-1></post-1>\n                <div class="container"></div>\n                <foo-ter></foo-ter>\n            ');const i=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector(".container");this.imagesBanner.forEach((n=>{null==i||i.appendChild(n)}))}}customElements.define("app-container",a)})();