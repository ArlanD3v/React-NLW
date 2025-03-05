'use client'
import { Button } from "@/components/button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { UserRound, Mail, AtSign, TicketCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const subscriptionSchema = z.object({
	name: z.string ().min(8,'Digite seu nome completo'),
	email: z.string().email('Digite um e-mail válido'),
	socmedia: z.string().min(5,'Digite sua rede social')
})


	export function SubscriptionForm(){

		const {register, handleSubmit, formState:{errors}} = useForm({
			resolver: zodResolver(subscriptionSchema)
		})

		function onSubscribe (data:any){
			console.log(data)	
		}
	
	return(
		<form 
		onSubmit={handleSubmit(onSubscribe)} 
		className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
			 <h2 className="font-heading font-semibold text-gray-200 text-xl">
				Registration
			 </h2>
			 <div className="space-y-3">
				<InputRoot >
				  <InputIcon>
					 <UserRound className="size-5 text-[#b6ffa0]" />
				  </InputIcon>
				  <InputField
					 className="cursor-none"
					 type="text"
					 placeholder="Full name"
						{...register('name')}
				  />
				</InputRoot>
				<InputRoot >
				  <InputIcon>
					 <Mail className="size-5 text-[#31a2ff]" />
				  </InputIcon>
				  <InputField
					 className="cursor-none"
					 type="email"
					 placeholder="E-mail"
					 {...register('email')}
				  />
				</InputRoot>

				<InputRoot className="focus-within:border-secondary">
				  <InputIcon>
					 <AtSign className="size-5 text-secondary" />
				  </InputIcon>
				  <InputField
					 className="cursor-none"
					 type="text"
					 placeholder="Social Media"
					 {...register('socmedia')}
				  />
				</InputRoot>
			 </div>

			 <Button type="submit">
				Confirm
				<TicketCheck />
			 </Button>
		  </form>

)
}
//53