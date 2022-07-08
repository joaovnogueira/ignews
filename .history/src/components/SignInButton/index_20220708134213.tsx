import { FaGithub } from 'react-icons/fa'

export function SignInButton() {
    return(
        <button 
            type="button"
            classNamer
        >
            <FaGithub/>
            Sign in with Github
        </button>
    );
}