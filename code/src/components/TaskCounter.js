import React from 'react'

import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CheckMark from '../assets/check.svg'

const CounterTask = styled.p`
	font-family: 'Imprima';
	font-weight: 300;
	font-size: 14px;
	border: 1px solid var(--clr-gray);
	align-self: flex-start;
	padding: 0.2em 0.4em;
	color: var(--clr-accent);
	max-width: 41ch;
	margin: 0.5em;
`

const TaskCounter = () => {
	const items = useSelector((store) => store.todo.items)

	const tasksDone = items.filter((item) => (item = item.isCompleted))

	const showTasksDone = (items) => {
		if (items.length > 0) {
			if (items.length === tasksDone.length) {
				if (items.length > 1) {
					return `Well done! ${tasksDone.length} of ${items.length} tasks are checked. Take a well deserved break or add some new tasks.`
				} else {
					return `Well done! ${tasksDone.length} of ${items.length} task are checked. Take a well deserved break or add a new task.`
				}
			} else {
				return `TODO: ${tasksDone.length} OF ${items.length} DONE `
			}
		} else {
			return `Let's get started by adding some tasks! ☝️`
		}
	}

	if (items.length === tasksDone.length) {
		return <CounterTask>{showTasksDone(items)}</CounterTask>
	} else {
		return (
			<CounterTask>
				{showTasksDone(items)}
				<img src={CheckMark} alt='done' />
			</CounterTask>
		)
	}
}

export default TaskCounter
