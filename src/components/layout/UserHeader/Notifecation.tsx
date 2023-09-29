import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
	Badge,
} from '@material-tailwind/react';
import { BiSolidBell } from 'react-icons/bi';

const Notification = () => {
	return (
		<Menu>
			<MenuHandler>
				<Badge content='5' className='cursor-pointer '>
					<BiSolidBell className='text-2xl text-gray-500' />
				</Badge>
			</MenuHandler>
			<MenuList>
				<MenuItem>Menu Item 1</MenuItem>
				<MenuItem>Menu Item 2</MenuItem>
				<MenuItem>Menu Item 3</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default Notification;
