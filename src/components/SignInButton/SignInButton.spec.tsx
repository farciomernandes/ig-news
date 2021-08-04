import { render, screen } from "@testing-library/react";
import { useSession } from 'next-auth/client';
import { mocked } from 'ts-jest/utils';
import { SigninButton } from "./index";



jest.mock('next-auth/client');

describe('SignInButton component', ()=>{

  it('render correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession);

    //Daqui pra baixo todos os retornos dessa função deve ser isso
    useSessionMocked.mockReturnValue([null, false]);

      render(
          <SigninButton />
        )
      
        expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  })

  it('render correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession);

    //O próximo retorno dessa função deve ser isso
    useSessionMocked.mockReturnValueOnce([{ 
        user: {name: 'Jhon Doe', email: 'jhondoe@email.com'}}, true]);

    render(
        <SigninButton />
      )
    
      expect(screen.getByText('Jhon Doe')).toBeInTheDocument();
})

})