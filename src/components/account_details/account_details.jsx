import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import shortid from 'shortid'

import edit_icon from 'assets/svgs/edit_icon.svg'

const TITLE_CONATINER = styled.div`
	// background: aqua;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 4rem 0;
	// height: 8rem;
`

const TITLE = styled.h1`
	font-size: 3rem;
`

const EDIT_BUTTON = styled.img`
	height: 3rem;
	cursor: pointer;
	justify-self: end;
`

// this is gonna be all details

class Data_creator {
	constructor(title) {
		this.data = [title]
	}

	add_data(property, value) {
		let obj = {
			property,
			value,
		}
		this.data.push(obj)
	}
}

const personal_details = new Data_creator('personal')

personal_details.add_data('full name', 'Anjan Shomodder')
personal_details.add_data('age', '19')
personal_details.add_data('joined on', '2020')

console.log(personal_details)

const DETAILS_CONTAINER = styled.div`
	max-width: 100%;
	margin: 5%;
	display: grid;
	grid-template-columns: 1fr;
`

const DETAILS_ROW = styled.div`
	// background: violet;
	display: grid;
	max-width: 100%;
	grid-template-columns: 2fr 5fr 1fr;
	align-items: center;
	padding: ${({ theme }) => theme.small_screen.md};
`

const DETAILS_VALUES = styled.div`
	display: inline;
`

const DONE_BUTTON = styled.button`
	background: green;
	padding: ${({ theme }) => theme.small_screen.md};
	justify-self: center;
	width: 50%;
	max-width: 20rem;
`

const VALUE_CHANGE_INPUT = styled.input`
	display: none;
	grid-column: 2/3;
`

const ACCOUNT_DETAILS = () => {
	// state for group editing_mode
	const [editing_mode, set_editing_mode] = useState(false)

	// state for value editing_mode
	const [
		values_editing_mode,
		set_values_editing_mode,
	] = useState(false)

	// const [changed_value, set_changed_value] =

	// toggles the group editing mode
	const toggle_editing_mode = () => {
		if (editing_mode && values_editing_mode) {
			set_values_editing_mode(false)
		}
		set_editing_mode(!editing_mode)
	}

	// toggles the value editing mode
	const toggle_value_editing_mode = (e) => {
		try {
			e.target.parentElement.children[3].style.display =
				'block'
		} catch {
			console.log(1)
		}
		// console.log(e.target.parentElement.children[3])
		// set_values_editing_mode(!values_editing_mode)
	}

	const value_change_handeler = (e) => {
		console.log(e.target.value)
	}

	return (
		<DETAILS_CONTAINER>
			{personal_details.data.map((item, index) => {
				return (
					<>
						{index === 0 ? (
							<TITLE_CONATINER
								key={shortid.generate()}
							>
								<TITLE children="personal details" />

								{/*   shows only if
								editing_mode is off */}
								{!editing_mode && (
									<th>
										<EDIT_BUTTON
											src={edit_icon}
											onClick={
												toggle_editing_mode
											}
										/>
									</th>
								)}
							</TITLE_CONATINER>
						) : (
							<DETAILS_ROW key={shortid.generate()}>
								<DETAILS_VALUES>
									{item.property}
								</DETAILS_VALUES>
								<DETAILS_VALUES>
									{item.value}
								</DETAILS_VALUES>

								{/*   shows only if
								editing_mode is on */}
								{editing_mode && (
									<EDIT_BUTTON
										src={edit_icon}
										onClick={
											toggle_value_editing_mode
										}
									/>
								)}

								<VALUE_CHANGE_INPUT
									onChange={value_change_handeler}
								/>
							</DETAILS_ROW>
						)}
					</>
				)
			})}

			{editing_mode && (
				<DONE_BUTTON
					children="done"
					onClick={toggle_editing_mode}
				/>
			)}
		</DETAILS_CONTAINER>
	)
}

export default ACCOUNT_DETAILS
