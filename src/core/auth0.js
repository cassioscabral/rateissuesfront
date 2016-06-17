import env from '../env'
import Auth0Lock from 'auth0-lock'

export const lock = new Auth0Lock(env.auth0.CLIENT_ID, env.auth0.CLIENT_DOMAIN)
