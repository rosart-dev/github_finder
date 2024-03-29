class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    /**
     * This function will display the User data on the UI 
     * @param {*} user - data about the user from GitHub API
     */
    showProfile = user => {
        this.profile.innerHTML =   `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html}" target="_blank" 
                                class="btn btn-primary btn-block mb-4">
                            View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    /**
     * This function will display the repository data of the respective user on the UI
     * 
     * @param repos - the repository data from the API
     */
    showRepos = repos => {
        let output = '';
        repos.forEach( repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                           <a href="" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        //Output repos
        document.getElementById('repos').innerHTML = output;
    }

    /**
     * This function will display alerts on the UI of any type
     * e.g. green for success or red for error
     * 
     * @param msg - the message to show to the user 
     * @param className - the class names that will specify the color of the alert banner 
     */
    showAlert = (msg, className) => {
        //Clear any remaining alerts
        this.clearAlert();
        //Create div 
        const div = document.createElement('div');
        //Add classes
        div.className = className;
        //Add text
        div.appendChild(document.createTextNode(msg));
        //Get parent
        const container = document.querySelector('.searchContainer');
        //Get search box
        const search = document.querySelector('.search');
        //Insert alert 
        container.insertBefore(div, search);

        //Timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    /**
     * This function will clear the alert from the UI 
     */
    clearAlert = () => {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    /**
     * This function will clear all of the data about the user and their repos 
     * from the UI 
     */ 
    clearProfile() {
        this.profile.innerHTML = '';
    }
}