import Image from 'next/image';
import logo from '../../assets/rankdev.svg';
import { Ranking } from './ranking';
import { Stats } from './stats';
import { InviteLinkInput } from './invite-link-input';

export default function InvitePage() {

	const inviteLink = 'rankdev.com/invite/us/0001'
	
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
				<InviteLinkInput inviteLink={inviteLink} />
				<Stats />
		  </div>
		</div>

		<Ranking />
	 </div>
  )
}
