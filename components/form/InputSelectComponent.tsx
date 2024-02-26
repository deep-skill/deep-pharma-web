'use client';
import { useEffect, useState, useTransition } from 'react';
import { Card, List, ListItem } from '@material-tailwind/react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import LoadingIcon from './LoadingIcon';

interface InputSelectComponentProps {
  label: string;
  placeholder: string;
  fetchOptions: (query: string) => Promise<any[]>;
  onSelect: (value: any) => void;
  selectedValue: any;
  error: string | undefined;
  textSelect: string;
}

const InputSelectComponent = ({
  label,
  placeholder,
  fetchOptions,
  onSelect,
  selectedValue,
  error,
  textSelect,
}: InputSelectComponentProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<any[]>([]);
  const [isOptionsVisible, setIsOptionsVisible] = useState<boolean>(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const optionData = await fetchOptions(inputValue);
        setOptions(optionData);
      } catch (error) {
        console.log(error);
      }
    };

    if (inputValue && isOptionsVisible) {
      fetchData();
    } else {
      setOptions([]);
    }
  }, [inputValue, fetchOptions, isOptionsVisible]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      const input = event.target.value;
      setInputValue(input);
      setIsOptionsVisible(true);
    });
  };

  const handleSelect = (value: any) => {
    onSelect(value);
    setInputValue('');
    setIsOptionsVisible(false);
  };

  const handleShowInput = () => {
    setIsOptionsVisible(true);
  };
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="flex flex-col bg-light_grey mb-7 p-2 rounded-t-md">
      {isOptionsVisible ? (
        <div className="flex flex-col">
          <span className="text-orange text-xs">{label}</span>
          <input
            className={`h-10 block w-full rounded-t-md bg-light_grey ${
              isClicked && 'border-b-2 border-orange animate-expand-border'
            } text-md text-black placeholder:text-black outline-none`}
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleClick}
          />
          {isPending && <LoadingIcon />}
          {isOptionsVisible && options.length > 0 && (
            <Card className="w-full" placeholder={undefined}>
              <List placeholder={undefined} className="bg-light_grey">
                {options.map((option) => (
                  <div key={option.id}>
                    <ListItem
                      key={option.id}
                      onClick={() => handleSelect(option)}
                      className="hover:bg-orange_list_items hover:text-black"
                      placeholder={undefined}
                    >
                      {option.name}
                    </ListItem>
                  </div>
                ))}
              </List>
            </Card>
          )}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      ) : (
        <div className="flex flex-row justify-between items-center relative">
          <div className="flex flex-col">
            <span className="text-orange text-xs">{label}</span>
            <p className="text-sm text-grey_title">{selectedValue?.name}</p>
          </div>
          <IoMdCloseCircleOutline
            className=" text-orange absolute right-1 bottom-2"
            aria-hidden="true"
            size={25}
            onClick={() => handleShowInput()}
          />
        </div>
      )}
    </div>
  );
};

export default InputSelectComponent;
