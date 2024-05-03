export const generateSocialLink = (strLink)=>{
    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^\+?[0-9]{7,}$/;
    
    if(emailRegex.test(strLink)){
        return `mailto:${strLink}`
    }else if(phoneRegex.test(strLink)){
        return `tel:${strLink}`
    }

    return strLink;
};