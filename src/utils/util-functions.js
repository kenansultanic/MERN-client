const usernameRegex = /^[a-z0-9_.]+$/
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const util = {
    isValidUsername: username => {
        if (username.length < 8)
            return false
        
        if (!username.charAt(0).match('[a-z]'))
            return false
        
        return username.match(usernameRegex)
    },
    isValidEmail: email => {
        return String(email)
            .toLowerCase()
            .match(emailRegex)
    }
}


export default util