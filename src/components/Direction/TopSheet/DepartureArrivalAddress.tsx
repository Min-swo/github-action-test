import { Separator } from '@/components/ui/separator';
import { BRANCH_MOCK } from '@/mock/branch_mock';
import { branchIdAtom, currentStartAddressAtom } from '@/stores';
import { useAtomValue } from 'jotai';

export default function DepartureArrivalAddress() {
  const currentStartAddress = useAtomValue(currentStartAddressAtom);
  const branchId = useAtomValue(branchIdAtom);
  const branchIdx = BRANCH_MOCK.findIndex(({ id }) => id === branchId);

  return (
    <div className='flex flex-col justify-between gap-1 text-left'>
      <div className='flex flex-col'>
        <div className='text-xs text-gray-400'>출발지</div>
        <div className='font-bold'>{currentStartAddress || ''}</div>
      </div>

      <Separator />
      <div className='flex flex-col'>
        <div className='text-xs text-gray-400'>도착지</div>
        <div className='font-bold'>
          {branchIdx === -1 ? '' : BRANCH_MOCK[branchIdx].name}
        </div>
      </div>
    </div>
  );
}