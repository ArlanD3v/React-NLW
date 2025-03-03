'use client'
import { IconButton } from "@/components/icon-button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { Link, Copy } from "lucide-react";

export function InviteLinkInput(){
	function copyInviteLink(){
		console.log('teste')
	}

	return (
		
		<InputRoot>
		<InputIcon>
			<Link className='size-5 text-secondary'/>
		</InputIcon>
		<InputField readOnly  
				className="cursor-none"  
				defaultValue="rankdev.com/invite/us/0001"/>

			<IconButton className='-mr-2' onClick={copyInviteLink} >
				<Copy className='size-5 ' />
			</IconButton>
	</InputRoot>
	)
}

