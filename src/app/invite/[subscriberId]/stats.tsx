import { getSubscriberInviteClicks, getSubscriberInviteCount, getSubscriberRankingPosition } from "@/http/api";
import { Award, Ban, EyeIcon, Trophy } from "lucide-react";

interface StatsProps{
	subscriberId:string
}

export async function Stats({subscriberId}:StatsProps){
const {count:acessCount} = await getSubscriberInviteClicks(subscriberId)
const {count:inviteCount} = await getSubscriberInviteCount(subscriberId)
const { position: rankingPosition } = await getSubscriberRankingPosition (subscriberId)


	return(
		<div className='grid gap-3 md:grid-cols-3'>
					<div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
						<span className='font-heading text-2xl font-semibold text-gray-200 leading-none '>{acessCount}</span>
						<span className='text-sm text-gray-300 leading-none text-center'>Accesses in link</span>

						<EyeIcon className='size-5 text-secondary absolute top-2 left-2' />
					</div>

					<div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
						<span className='font-heading text-2xl font-semibold text-gray-200 leading-none '>{inviteCount}</span>
						<span className='text-sm text-gray-300 leading-none text-center'>Registrations made</span>

						<Award className='size-5 text-secondary absolute top-2 left-2' />
					</div>

					<div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
						<span className='font-heading text-2xl font-semibold text-gray-200 leading-none '>{rankingPosition ? `${rankingPosition}°` : <Ban /> }</span>
						<span className='text-sm text-gray-300 leading-none text-center'>Position in the rank</span>

						<Trophy className='size-5 text-secondary absolute top-2 left-2' />
					</div>
				</div>
	)
}

