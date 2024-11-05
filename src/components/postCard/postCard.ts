
import Comments, {CommentsAttribute} from "../comments/comments";
import { appState } from "../../store/store";
import '../hashtags/hashtags'
export enum AttributePostCard  { 
    'imguser' = 'imguser',
    'name' = 'name',
    'username' = 'username',
    'category' = 'category',
    'description' = 'description',
    'image' = 'image',
    'timeposted' = 'timeposted',
    'hashtags' = 'hashtags',
    'state' = 'state',
    'likes' =  'likes',
    'comments' = 'comments',
    'favorites' = 'favorites',
    'send' = 'send'
}

class PostCard extends HTMLElement  {
    imguser?: string;
    name?: string;
    username?: string;
    category?: string;
    description?: string;
    image?: string;
    timeposted?: string;
    hashtags?: string ;
    state?: string;
    likes? : number;
    comments?: number;
    favorites?: number;
    send?: number;
    showComent?: boolean;
    
    constructor()  {
        super();
        this.attachShadow( {mode: 'open'})
        this.showComent = false;
    }

    static get observedAttributes() {
        return Object.values(AttributePostCard);
    }

    attributeChangedCallback(propName : AttributePostCard, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            case AttributePostCard.state:
                this.state = newValue;  
            break;
            case AttributePostCard.likes:
                this.likes = newValue ? Number(newValue) : undefined;
                break;
            case AttributePostCard.comments:
                this.comments = newValue ? Number(newValue) : undefined;
                break;
            case AttributePostCard.favorites:
                this.favorites = newValue ? Number(newValue) : undefined;
                break;
            case AttributePostCard.send:
            this.send = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    connectedCallback() { 
        
        this.render();

        // Cambiar state de follow a following, de following a follow
        const state = this.shadowRoot?.querySelector('.state') as HTMLElement;
        if (state) {
            state.addEventListener('click', () => {
                if (state.textContent === 'Follow') {
                    state.textContent = 'Following';
                } else {
                    state.textContent = 'Follow';  
                }
            });
        };

        const status = this.shadowRoot?.querySelector('.status2') as HTMLElement;
        if (status) {
            status.addEventListener('click', () => {
                if (status.textContent === 'Follow') {
                    status.textContent = 'Following';
                } else {
                    status.textContent = 'Follow';  
                }
            });
        }

        let counterLikes = [0];
        const likesButton = this.shadowRoot?.querySelector('#like') as HTMLElement;
        const p = this.shadowRoot?.querySelector('#likeCount') as HTMLElement;
        const svg = this.shadowRoot?.querySelector('.icon') as HTMLElement;
        
        likesButton.addEventListener('click', () => { 
            if(appState.user){
                if (counterLikes[0] === 0) {
                    counterLikes[0] = 1;
                    svg.style.color = '#FFFFFF';
                } else {
                    counterLikes[0] = 0;
                    svg.style.color = ''; 
                }
                p.textContent = `${counterLikes[0]}`;
            }else{
                alert('No puedes dar like si no tienes una cuenta')
            }
        });

        let counterComments = [0];
        const commentsButton = this.shadowRoot?.querySelector('#comment') as HTMLElement;
        const pComments = this.shadowRoot?.querySelector('#commentCount')as HTMLElement;
        commentsButton.addEventListener('click', () => { 
            counterComments[0] += 1;
            pComments.textContent = `${counterComments[0]}`;
        });
        let counterFavorites = [0];
        const favoritesButton = this.shadowRoot?.querySelector('#favorite') as HTMLElement;
        const pFavorites = this.shadowRoot?.querySelector('#favoriteCount') as HTMLElement;
        const svgFavorites = this.shadowRoot?.querySelector('.icon3') as HTMLElement;
        
        favoritesButton.addEventListener('click', () => { 
            if(appState.user){
                if (counterFavorites[0] === 0) {
                    counterFavorites[0] = 1;
                    svgFavorites.style.color = '#FFFFFF';
                } else {
                    counterFavorites[0] = 0;
                    svgFavorites.style.color = ''; 
                }
                pFavorites.textContent = `${counterFavorites[0]}`;
            }else {
                alert('No puedes dar like si no tienes una cuenta')
            }
        });

    }
    formatTimeAgo(dateadded:any) {
        if (!dateadded) return "Fecha no disponible";
    
        const now = new Date();
        const date = new Date(dateadded); 
    
        const secondsElapsed = Math.floor((now.getTime() - date.getTime()) / 1000);
    
        if (secondsElapsed < 60) return `hace ${secondsElapsed}   s`;
        if (secondsElapsed < 3600) return `hace ${Math.floor(secondsElapsed / 60)}  m`;
        if (secondsElapsed < 86400) return `hace ${Math.floor(secondsElapsed / 3600)}   h`;
        const daysElapsed = Math.floor(secondsElapsed / 86400);
        return `hace ${daysElapsed}d`;
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/postCard/postCard.css">
           
                <div class= "card">
                    <div class="part-user">
                        <div  circle-img>
                            <img id="img-user" src="${this.imguser ? this.imguser : 'Not found'}">
                        </div>
                        
                        <div class="nacate">
                            <h4 class="name">${this.name ? this.name : 'Not found'}</h4>
                            <p class="category">${this.category ? this.category : 'Not found'}</p>
                        </div>
                        <div class="nacate1">
                            <div class="nacate2">
                                <h4 class="name">${this.name ? this.name : 'Not found'}</h4>
                                <h4 class="username2">${this.username ? this.username : 'Not found'}</h4>
                            </div>
                            <div class="nacate3">
                                  <p class="status2">${this.state ? this.state : 'Follow'}</p>
                            </div>
                        </div>
                        <div class="stateUser">
                            <h4 class="username">${this.username ? this.username : 'Not found'}</h4>
                            <p class="state">${this.state ? this.state : 'Follow'}</p>
                            <p class="time-post"> ${this.formatTimeAgo(this.timeposted)} </p>
                        </div>
                    </div>
                    <p class="description">${this.description ? this.description : 'Not found'}</p>
                    <hashtags-component hashtags='${this.hashtags ? this.hashtags : '[]'}'></hashtags-component>
                    <img class="img-post" src="${this.image ? this.image : 'Not found'}">
                    <div class="post-icons">
                        <div class="counter" id="like">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                            </svg>
                            <p id="likeCount">${this.likes || this.likes==0 ? this.likes : 0}</p>
                        </div>
                        <div class="counter" id="comment">
                            <svg class="icon2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chat-square-fill" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                            </svg>
                            <p id="commentCount">${this.comments || this.comments==0 ? this.comments : 0}</p>
                        </div>
                        <div class="counter" id="favorite">
                            <svg class="icon3" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
                            </svg>
                            <p id="favoriteCount">${this.favorites || this.favorites==0 ? this.favorites : 0}</p>
                        </div>
                    </div>
                    <div id="comment-post" class"hide">
                        
                    </div>
                </div>
               
            `;
            const commentpost = this.shadowRoot?.querySelector('#comment-post') as HTMLElement
            commentpost.className = "hide"
            const comments = this.ownerDocument.createElement("comment-component") as Comments;
            comments.setAttribute(CommentsAttribute.imgprofile, '');
            comments.setAttribute(CommentsAttribute.username, 'user');
            comments.setAttribute(CommentsAttribute.timeaddcomment, 'h');
            comments.setAttribute(CommentsAttribute.description, '');
            comments.setAttribute(CommentsAttribute.showinput, 'true');
            commentpost.appendChild(comments)
            const comment = this.shadowRoot?.querySelector('#comment') as HTMLElement
    
            comment.addEventListener('click', ()=>{
                if (!this.showComent) {
                    commentpost.className = "show"
                    this.showComent = true
                    
                } else {
                    comments.setAttribute(CommentsAttribute.showinput, 'false');
                    comments.render()
                }
                    
            })

            
        }


    }
};

customElements.define('card-post',PostCard);
export default PostCard;