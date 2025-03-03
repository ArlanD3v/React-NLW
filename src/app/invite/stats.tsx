import { Award, EyeIcon, Trophy } from "lucide-react";

export function Stats(){
	return(
		<div className='grid gap-3 md:grid-cols-3'>
					<div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
						<span className='font-heading text-2xl font-semibold text-gray-200 leading-none '>283</span>
						<span className='text-sm text-gray-300 leading-none text-center'>Accesses in link</span>

						<EyeIcon className='size-5 text-secondary absolute top-2 left-2' />
					</div>

					<div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
						<span className='font-heading text-2xl font-semibold text-gray-200 leading-none '>269</span>
						<span className='text-sm text-gray-300 leading-none text-center'>Registrations made</span>

						<Award className='size-5 text-secondary absolute top-2 left-2' />
					</div>

					<div className='relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl'>
						<span className='font-heading text-2xl font-semibold text-gray-200 leading-none '>1°</span>
						<span className='text-sm text-gray-300 leading-none text-center'>Position in the rank</span>

						<Trophy className='size-5 text-secondary absolute top-2 left-2' />
					</div>
				</div>
	)
}