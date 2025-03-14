import Image from 'next/image';
import logo from '../../../assets/rankdev.svg';
import { Ranking } from './ranking';
import { Stats } from './stats';
import { InviteLinkInput } from './invite-link-input';

interface InvitePagesProps{
	params : Promise<{
		subscriberId:string
	}>
}

export default async function InvitePage(props:InvitePagesProps) {

	const{ subscriberId}  = await props.params

	const inviteLink = `http://localhost:3333/invites/rankdev/${subscriberId}` // Inclusão do /rankdev para personalização
	
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

		  <div className="space-y-12">
			 <div className="space-y-">
				<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
				  Indicate and Win
				</h2>
				<p className="text-gray-300">
				  Invite more people to the event and compete for exclusive
				  benefits! Just share the link below and follow the registrations:
				</p>
			 </div>
				<InviteLinkInput inviteLink={inviteLink} />
				<Stats subscriberId={subscriberId} />
		  </div>
		</div>

		<Ranking />
	 </div>
  )
}
