import { addObserver, appState } from '../../store/store';
import { addComment, addPost, getPosts, getUserData } from '../../utils/firebase';
import { Comment } from '../../types/comment';


const comment: Comment = { 
    imgprofile: '',
    username: '',
    timeaddcomment: '',
    description: '', 
    postid: ''
}

export enum CommentsAttribute  {
    'imgprofile' = 'imgprofile',
    'username' = 'username',
    'timeaddcomment' = 'timeaddcomment',
    'description' = 'description',
    'showinput' = 'showinput',
    'postid' = 'postid'
 
}

class Comments extends HTMLElement  {
    postid?: string;
    imgprofile?: string;
    username?: string;
    timeaddcomment?: string;
    description?: string
    showinput?: boolean


    constructor()  {
        super();
        this.attachShadow( {mode: 'open'})
        addObserver(this)
    }
    static get observedAttributes() {
        return Object.values(CommentsAttribute);
    }
    attributeChangedCallback(propName : CommentsAttribute, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            case CommentsAttribute.showinput:
                this.showinput = newValue ? Boolean(newValue) : true;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    changeDescription(e: any)  {
        comment.description = e.target.value
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
    async connectedCallback() {
        const userId = appState.user; 
        const userData = await getUserData(userId);
        if (userData) {
            this.username = userData.name;
            this.imgprofile = userData.img;         
        }
        // this.postid = appState.currentPostId; 
        this.render();
    }
    
    async submitForm() {
        if (!this.postid) {
            console.error("ID del post no definido.");
            return;
        }
    
        // Asignamos los valores del comentario
        comment.postid = String(this.postid); 
        comment.username = String(this.username || 'Anónimo');
        comment.imgprofile = this.imgprofile || '';
        comment.timeaddcomment = new Date().toISOString();  // Agregar tiempo actual
    
        // Enviar comentario como parte de un arreglo
        console.log("Comentario a enviar: ", [comment]);  // Convertido en array
        await addComment(this.postid, String([comment]));  // Pasando el comentario como un array
        this.clearInputs();
    }



    clearInputs() {
        const descriptionInput = this.shadowRoot?.querySelector('#comment-input') as HTMLInputElement;
        if (descriptionInput) descriptionInput.value = ''; 
    }
    render() {
        if (this.shadowRoot) {
            let texthtml = "" 
            if (this.username) {
                texthtml = `
                <div class="user">
                    <img src="${this.imgprofile}" alt="">
                    <p id="username">${this.username}</p>
                    <p id="timeadd">${this.formatTimeAgo(this.timeaddcomment)}</p>
                    <p id="description">${this.description}</p>
                </div>`
                
            }
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/comments/comments.css">
            <div class="all"> 
                ${texthtml}
                <hr>
                <div class="add-comment">
                    <input id="comment-input" type="text">
                    <div class="save-comment">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3.291 3.309a.75.75 0 0 0-.976.996l3.093 6.945H13a.75.75 0 0 1 0 1.5H5.408l-3.093 6.945a.75.75 0 0 0 .976.996l19-8a.75.75 0 0 0 0-1.382z" clip-rule="evenodd"/></svg>
                    </div>
                   
                </div>
            </div> 
            `;

            const saveComment = this.shadowRoot.querySelector('.save-comment') as HTMLElement
            const addComentHTML = this.shadowRoot.querySelector('.add-comment') as HTMLElement
            const usernameHTML = this.shadowRoot.querySelector('#description') as HTMLElement
            const timeadd = this.shadowRoot.querySelector('#timeadd') as HTMLElement
            const descriptionhtml = this.shadowRoot.querySelector('#description') as HTMLElement
            const descriptionInputValue = this.shadowRoot.querySelector('#comment-input') as HTMLInputElement
            descriptionInputValue?.addEventListener('change', this.changeDescription);
            saveComment.addEventListener('click', this.submitForm)
                // if (appState.user) {
                //     addComentHTML.className = 'add-comment hide'
                //     usernameHTML.innerHTML = "username"
                //     timeadd.innerHTML = "now"
                //     descriptionhtml.innerHTML = descriptionInputValue.value
                //     this.submitForm()
                // }else{
                //     alert('No puedes crear un comentario porque no tienes una cuenta de usuario')
                //     dispatch(navigate(Screens.LOGIN))
                // }
            // })
            
            if(!this.showinput){
                addComentHTML.className = 'add-comment hide'
            }
        }
    }

};

customElements.define('comment-component',Comments);
export default Comments;