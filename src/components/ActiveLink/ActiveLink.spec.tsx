import { render, screen } from "@testing-library/react";
import React from "react";
import { ActiveLink } from "./index";

jest.mock('next/router', () => {
    return {
      useRouter() {
        return {
          asPath: '/'
        }
      }
    }
  });
  
describe('ActiveLink component', ()=>{

  it('renders correctly', () => {
      render(
          <ActiveLink href="/" activeClassName="active" >
            <a>Home</a>
          </ActiveLink>
        )
      
        expect(screen.getByText('Home')).toBeInTheDocument();
    })
  
  it('add active class if the link currently active', () => {
      render(
          <ActiveLink href="/" activeClassName="active" >
            <a>Home</a>
          </ActiveLink>
        )
      
        expect(screen.getByText('Home')).toHaveClass('active');
  })
})