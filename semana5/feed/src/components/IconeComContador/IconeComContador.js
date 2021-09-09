import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
	margin-right: 5px;
`

export function IconeComContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone}
		onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}

// Os valores são para cada post na página Post.js, assim fica ágil a função para os posts. Representa os ícones e números de curtidas e comentários.