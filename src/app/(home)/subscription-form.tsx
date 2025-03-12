'use client'
import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { subscribeToEvent } from '@/http/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { AtSign, Mail, TicketCheck, UserRound } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionSchema = z.object({
  name: z.string().min(5, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
  socmedia: z.string().min(2, 'Digite sua rede social'),
})

type subscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
const router = useRouter()
const searchParams = useSearchParams()

  const {
	 register,
	 handleSubmit,
	 formState: { errors },
  } = useForm<subscriptionSchema>({
	 resolver: zodResolver(subscriptionSchema),
  })

  async function onSubscribe({name,email,socmedia}: subscriptionSchema) {
	const referrer = searchParams.get('referrer')


	 const{subscriberId} = await subscribeToEvent ({name, email, socmedia, referrer})

	 router.push(`/invite/${subscriberId}`)
  }

  return (
	 <form
		onSubmit={handleSubmit(onSubscribe)}
		className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
	 >
		<h2 className="font-heading font-semibold text-gray-200 text-xl">
		  Registration
		</h2>
		<div className="space-y-3">
		  <div className="space-y-2">
			 <InputRoot>
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
			 {errors?.name && (
				<p className="text-danger text-xs font-semibold">
				  {errors.name.message}
				</p>
			 )}
		  </div>

		  <div className="space-y-2">
			 <InputRoot>
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
			 {errors?.email && (
				<p className="text-danger text-xs font-semibold">
				  {errors.email.message}
				</p>
			 )}
		  </div>

		  <div className="space-y-2">
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
			 {errors?.socmedia && (
				<p className="text-danger text-xs font-semibold">
				  {errors.socmedia.message}
				</p>
			 )}
		  </div>
		</div>

		<Button type="submit">
		  Confirm
		  <TicketCheck />
		</Button>
	 </form>
  )
}

//33