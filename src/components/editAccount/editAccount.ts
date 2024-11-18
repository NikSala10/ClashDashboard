import "../button/button";
import { uploadFileProfileByUser } from "../../utils/firebase";
import { dispatch } from "../../store/store";
import { setOpenCloseScreen } from "../../store/actions";
import { addObserver, appState } from '../../store/store';
import { EditUserInformation } from "../../types/editPost";

const edit: EditUserInformation = {
    username: '',
	category: '',
	imgUser: '',
    placeresidence: '',
	currenttraining: '',
	currentjob: '',
	academy: '',
}
export enum AttributeEditPost  { 
    'imguser' = 'imguser',
    'name' = 'name',
    'gmail' = 'gmail'
}
class EditAccount extends HTMLElement  {
    imguser?: string;
    name?: string;
    gmail?: string;
   
    constructor()  {
        super();
        this.attachShadow( {mode: 'open'})
        addObserver(this)
    }

    async connectedCallback() { 
        
        this.render();
    }
    changeUserName(e: any) {
		edit.username = e.target.value;
	}
    changeCategory(e: any) {
		edit.category = e.target.value;
	}
    changeImgUser(e: any) {
		edit.imgUser = e.target.value;
	}
    changePlaceResidence(e: any) {
		edit.placeresidence = e.target.value;
	}
    changeCurrentTraining(e: any) {
		edit.currenttraining = e.target.value;
	}
    changeCurrentJob(e: any) {
		edit.currentjob = e.target.value;
	}
    changeAcademy(e: any) {
		edit.academy = e.target.value;
	}
    async submitForm() {
        const img = this.shadowRoot?.querySelector('#imgs-Post') as HTMLInputElement;
        const file = img?.files?.[0]; 
   
    
        alert('Post creado');
        this.clearInputs();
    }
    
    clearInputs() {
        const descriptionInput = this.shadowRoot?.querySelector('#description') as HTMLInputElement;
        const hashtagsInput = this.shadowRoot?.querySelector('#hashtags') as HTMLInputElement;
        const imgInput = this.shadowRoot?.querySelector('#imgs-Post') as HTMLInputElement;

        if (descriptionInput) descriptionInput.value = ''; 
        if (hashtagsInput) hashtagsInput.value = ''; 
        if (imgInput) imgInput.value = ''; 
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/editAccount/editAccount.css">
            
             <div class="container-modal">
                  <btn-close color="#9A81C2" label="X" id="close-modal"></btn-close>
                 <div class="user-profile">
                    <div class="circle-img">
                        <img id="img-user" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                        <div class="icon">
                            <input type="file" id="fileInput">
                            <label for="fileInput">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                                    <path fill="#8258BD" d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3"/>
                                </svg>
                            </label>
                        </div>
                    </div>
                    
                    <div id="user">
                        <p id="name">${this.name}</p>
                        <input id="usernamechange" type="text" placeholder="Add Username">
                        <div id="create">
                            <p id="creative">Creative</p>
                            <input id="categorychange" type="text" placeholder="Write your creative category">
                        </div>
                    </div>
                </div>
                <div class="info">
                    <h3>Contact Information</h3>
                    <p id="email">${this.gmail}</p>
                     <div class="icons-profesional">
                        <div class="profesional-work">
                            <input id="place" type="text" placeholder="Place Residence">
                            <input id="job" type="text" placeholder="Current Job">
                        </div>
                        <div class="profesional-work">
                            <input id="training" type="text" placeholder="Current Training">
                            <input id="acadmy" type="text" placeholder="Academy">
                        </div>
                    </div>
                    <p id="Works">More Works</p>
                    <input id="work-Inpt" type="url" placeholder="Ex: https://www.behance.net">
                    <div class="btn-edi" ><btn-component id="save" color="#361656" label="Save"></btn-component></div>
                </div>
            
             </div>
            	
            `;
            
        }
        const btn = this.shadowRoot?.querySelector('#close-modal')
        btn?.addEventListener('click', ()=>{
            dispatch(setOpenCloseScreen(1))
        })

        const userName = this.shadowRoot?.querySelector('#usernamechange') as HTMLInputElement;
        userName?.addEventListener('change', this.changeUserName);

        const userCategory = this.shadowRoot?.querySelector('#categorychange') as HTMLInputElement;
        userCategory?.addEventListener('change', this.changeCategory);

        const userPlaceResidence = this.shadowRoot?.querySelector('#place') as HTMLInputElement;
        userPlaceResidence?.addEventListener('change', this.changePlaceResidence);

        const userCurrentTraining = this.shadowRoot?.querySelector('#training') as HTMLInputElement;
        userCurrentTraining?.addEventListener('change', this.changeCurrentTraining);

        const userCurrentJob = this.shadowRoot?.querySelector('#job') as HTMLInputElement;
        userCurrentJob?.addEventListener('change', this.changeCurrentJob);

        const userAcademy = this.shadowRoot?.querySelector('#acadmy') as HTMLInputElement;
        userAcademy?.addEventListener('change', this.changeAcademy);

        const imageInput = this.shadowRoot?.querySelector('#fileInput') as HTMLInputElement;
        imageInput?.addEventListener('change', () => { 
            const file = imageInput.files?.[0];
				// if (file) uploadFileCloudinary(file, appState.user);
        })
        const save = this.shadowRoot?.querySelector('#save');
        save?.addEventListener('click', this.submitForm);
    }
};

customElements.define('editaccount-component',EditAccount);
export default EditAccount;