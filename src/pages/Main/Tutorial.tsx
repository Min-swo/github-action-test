import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Tutorial() {
  return (
    <>
      <Button>버튼</Button>
      <Button variant='outline'>버튼</Button>
      <Label>Input</Label>
      <Input placeholder='예시입니다' />
      <Calendar />
      <Checkbox />
      <Select>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Select an option' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
          <SelectItem value='option2'>Option 2</SelectItem>
          <SelectItem value='option3'>Option 3</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
