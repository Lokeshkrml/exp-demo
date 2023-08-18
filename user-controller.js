export const userController={
    login(request,response){
        response.json({message:'Login'});
    },
    register(request,response){
        response.json({message:'register'});
    },
    profile(request,response){
        response.json({message:'profile'});
    },
    changePassword(request,response){
        response.json({message:'password changed'});
    }
}