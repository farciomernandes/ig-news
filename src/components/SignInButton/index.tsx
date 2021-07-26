import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import { signIn, useSession, signOut } from 'next-auth/client';


import styles from './styles.module.scss';

export function SigninButton(){
    const [session] = useSession();

        return session ? (
            <button 
                className={styles.signInButton} 
                type="button"
                onClick={() => signOut()}
                >
                <FaGithub color="#eba417" />
                {session.user.name}
                <FiX color="#737380" className={styles.closeIcon}/>
            </button>
        ) : (
            <button 
                className={styles.signInButton} 
                type="button"
                onClick={() => signIn('github')}
                >
                    <FaGithub color="#04d361" />
                    Sign in with Github
            </button>
        )
}