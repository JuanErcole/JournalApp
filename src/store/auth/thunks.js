// Los thunks son acciones, que puedo hacer dispatch (que puedo despachar). Pero estas acciones, internamente tienen una tarea asincrona
// Si son sincronas las puedo hacer directamente con el reducer

import { async } from "@firebase/util"
import { loginWithEmailPassword, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/provider"
import { chekingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) =>{
  return async( dispatch ) =>{


    dispatch(chekingCredentials())

  }
}

export const startGoogleSingIn = () =>{
  return async( dispatch ) =>{

    dispatch(chekingCredentials());
    
    const result = await singInWithGoogle();
    if ( !result.ok ) return dispatch( logout(result.errorMessage) );
    dispatch(login( result ))

  }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName })=>{
  return async ( dispatch ) =>{

    dispatch( chekingCredentials() );

    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
    
    if ( !ok ) return dispatch( logout( {errorMessage} ) );

    dispatch( login({ uid, displayName, email, photoURL }) ); 

  }
}

export const startLoginWithEmailPassword = ({ email, password}) =>{
  return async( dispatch ) =>{

    dispatch(chekingCredentials());
    
    const resp = await loginWithEmailPassword( {email, password} );

    // if ( !result.ok ) return dispatch( logout(result.errorMessage) );

    dispatch(login( resp   ))

  }
}




