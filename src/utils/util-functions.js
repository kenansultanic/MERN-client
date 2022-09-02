const usernameRegex = /^[a-z0-9_.]+$/

const util = {
    isValidUsername: username => {
        if (username.length < 8)
            return false
        
        if (!username.charAt(0).match('[a-z]'))
            return false
        
        return username.match(usernameRegex)
    }
}


export default util