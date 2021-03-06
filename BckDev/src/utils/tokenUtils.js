import jwt from 'jsonwebtoken'

const generateToken = (payload) => {
    return jwt.sign(payload, "secret", {expiresIn: "24h"});
};


const validateToken = (token) => {
    if (token ) {
        const verificacion = jwt.verify(token, "secret", (err, data)=>{
          
            if(data){
                return {
                    data: data,
                };
            }
            if(err){
                return {
                    error: err,
                };
            }
    });
    return verificacion
    }
}



export {generateToken, validateToken}