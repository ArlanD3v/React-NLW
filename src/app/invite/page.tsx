import Image from 'next/image'
import logo from '../../assets/rankdev.svg'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Link, Copy, EyeIcon, Award, Trophy } from 'lucide-react'
import { IconButton } from '@/components/icon-button';

import gold from '../../assets/Medal_gold.svg'
import silver from '../../assets/Medal_silver.svg'
import cooper from '../../assets/Medal_cooper.svg'




export default function InvitePage() {
  return (
	 <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
		<div className="flex flex-col gap-10 w-full max-w-[550px]">
		  <Image src={logo} alt="RankDev" width={108.5} height={30} />

		  <div className="space-y-2">
			 <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
				Registration confirmed!
			 </h1>
			 <p className="text-gray-300">
				To enter the event, access the link sent to your email.
			 </p>
		  </div>

		  <div className="space-y-6">
			 <div className="space-y-3">
				<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
				  Indicate and Win
				</h2>
				<p className="text-gray-300">
				  Invite more people to the event and compete for exclusive
				  benefits! Just share the link below and follow the registrations:
				</p>
			 </div>

				<InputRoot>
					<InputIcon>
						<Link className='size-5 text-secondary'/>
					</InputIcon>
					<InputField readOnly  
							className="cursor-none"  
							defaultValue="rankdev.com/invite/us/0001"/>
						<IconButton className='-mr-2'>
							<Copy className='size-5 ' />
						</IconButton>
				</InputRoot>

				<div className='grid gap-3 md:grid-cols-3'>
					<div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
						<span className='font-heading text-2xl font-semibold text-gray-200 leading-none '>275</span>
						<span className='text-sm text-gray-300 leading-none text-center'>Accesses in link</span>

						<EyeIcon className='size-5 text-secondary absolute top-2 left-2' />
					</div>

					<div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
						<span className='font-heading text-2xl font-semibold text-gray-200 leading-none '>270</span>
						<span className='text-sm text-gray-300 leading-none text-center'>Registrations made</span>

						<Award className='size-5 text-secondary absolute top-2 left-2' />
					</div>

					<div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
						<span className='font-heading text-2xl font-semibold text-gray-200 leading-none '>2°</span>
						<span className='text-sm text-gray-300 leading-none text-center'>Position in the rank</span>

						<Trophy className='size-5 text-secondary absolute top-2 left-2' />
					</div>
				</div>

		  </div>
		</div>

		<div className='w-full max-w-[440px] space-y-5'>
			<h2 className='text-gray-200 text-xl font-heading font-semibold leading-none'>Referral ranking
			</h2>
			<div className='space-y-4'>
				<div className='rounded-xl bg-gray-700 border broder-gray-600 p-6 flex flex-col justify-center gap-3'>
					<span className='text-sm text-gray-300 leading-none'> Arlan Silva</span>
					<span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>269</span>
					<Image src={gold} alt=''/>
				</div>
			</div>
		</div>
	 </div>
  )
}
// Pause in 24
