class GitHub {
    constructor() {
        this.client_id = ''; //Purposely left this out 
        this.client_secret = ''; //Purposely left this out
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    /**
     * This function fetches data about the user using the GitHub API 
     * @param user - the current string in the search bar , e.g. 'rosart-dev'
     */
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);
        //?client_id=${this.client_id}&client_secret=${this.client_secret}

        const profileRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);
        //?client_id=${this.client_id}&client_secret=${this.client_secret}

        //profile data 
        const profile = await profileResponse.json();

        //Repository data for respective user 
        const repos = await profileRepos.json();

        //Using the object shorthand in return statement 
        return {
            profile,
            repos
        }
    }
}