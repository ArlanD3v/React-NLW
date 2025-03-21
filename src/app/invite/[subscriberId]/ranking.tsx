import Image from "next/image";
import gold from '../../../assets/Medal_gold.svg'
import silver from '../../../assets/Medal_silver.svg'
import cooper from '../../../assets/Medal_cooper.svg'
import { getRanking } from "@/http/api";

export async function Ranking(){
	const { ranking }  = await getRanking()

	return(
		<div className='w-full max-w-[440px] space-y-5'>
			<h2 className='text-gray-200 text-xl font-heading font-semibold leading-none'>
				Referral ranking
			</h2>

			<div className='space-y-4'>

				{ranking.map( (item, index ) => {
					const rankingPosition = index + 1

					return (
							<div key={item.id} className='relative rounded-xl bg-gray-700 border broder-gray-600 p-6 flex flex-col justify-center gap-3'>
							<span className='text-sm text-gray-300 leading-none'>
							<span className='font-semibold'>{rankingPosition}°</span> | {' '}
							{item.name}
							</span>

							<span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>
								{item.score}
							</span>
							{ rankingPosition === 1 && (<Image src={gold} alt='' className='absolute top-0 right-6'/>)}
							{ rankingPosition === 2 && (<Image src={silver} alt='' className='absolute top-0 right-6'/>)}
							{ rankingPosition === 3 && (<Image src={cooper} alt='' className='absolute top-0 right-6'/>)}
						</div>
				)
				})}

			</div>
		</div>
	)
}//45