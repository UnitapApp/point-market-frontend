import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/shadcn/components/ui/select";
import { DropdownProps } from "react-day-picker";

export function CalendarDropdown(props: DropdownProps) {
  const { options, value, onChange } = props;

  const onValueChange = (newValue: string) => {
    onChange?.({ target: { value: newValue } } as React.ChangeEvent<HTMLSelectElement>);
  };

  return (
    <div className="w-[80px]">
      <Select value={value?.toString()} onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {options?.map((option) => (
              <SelectItem key={option.value} value={option.value.toString()} disabled={option.disabled}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
