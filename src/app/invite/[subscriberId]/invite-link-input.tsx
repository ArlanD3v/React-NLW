'use client'

import { IconButton } from "@/components/icon-button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { Link, Copy } from "lucide-react";
import { useState } from "react";


interface InviteLinkInputProps{
	inviteLink: string
}

export function InviteLinkInput({inviteLink}: InviteLinkInputProps){
	const [copied, setCopied] = useState(false)

	function copyInviteLink(){
		navigator.clipboard.writeText(inviteLink)
		setCopied(true)

		setTimeout(() => setCopied(false),2000);
	}

	return (
		<div className="relative">
		<InputRoot>
		<InputIcon>
			<Link className='size-5 text-secondary'/>
		</InputIcon>

		<InputField readOnly  
				className="cursor-none"  
				defaultValue={inviteLink}/>

			<IconButton className='-mr-2' onClick={copyInviteLink} >
				<Copy className='size-5 ' />
			</IconButton>
	</InputRoot>

{copied && (
	<span className="absolute top-full mt-2 text-lg text-[#45df45] bg-gray-800 px-2 py-1 rounded-md shadow-lg z-50">Copy!</span>
)}
	</div>
	)
}

