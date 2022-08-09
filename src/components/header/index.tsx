import { useTheme } from 'styled-components'
import { PlusCircle } from 'phosphor-react'

import LogoIcon from '../../assets/logo.svg'
import { Basis, Button } from './styles'

export function Header() {
  const theme = useTheme()

  return (
	  <Basis>
		  <nav>
		  <img src={LogoIcon} alt="An arrow like icon with the words dt money." />
		  <Button>
			  <PlusCircle
				  className="svg"
					color={theme.white}
					size={24}
				/>
				<span>New transaction</span>
			</Button>
			</nav>
		</Basis>
	)
}
