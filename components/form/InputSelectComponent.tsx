'use client';
import { useEffect, useState, useTransition } from 'react';
import { Card, List, ListItem } from '@material-tailwind/react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

interface InputSelectComponentProps {
	label: string;
	placeholder: string;
	fetchOptions: (query: string) => Promise<any[]>;
	onSelect: (value: any) => void;
	selectedValue: any;
	error: string | undefined;
	textSelect: string
}

const InputSelectComponent = ({
	label,
	placeholder,
	fetchOptions,
	onSelect,
	selectedValue,
	error,
	textSelect
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

	return (
		<div className="flex flex-col bg-gray mt-2 p-2">
			{isOptionsVisible ? (
				<div className="flex flex-col">
          <span className='text-orange text-xs'>{label}</span>
					<input
						className="h-10 block w-full rounded-t-md bg-gray border-b-2 border-orange text-md text-black placeholder:text-black outline-none"
						type="text"
						placeholder={placeholder}
						value={inputValue}
						onChange={handleInputChange}
					/>
					{isOptionsVisible && options.length > 0 && (
						<Card className="w-full" placeholder={undefined}>
							<List placeholder={undefined} className='bg-gray'>
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
                  {isPending && (
          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )}
                  </div>
									
                  
								))}
							</List>
						</Card>
					)}
					{error && <p className="text-red-500">{error}</p>}
				</div>
			) : (
				<div className="flex flex-row justify-between items-center">
          <div className='flex flex-col'>
            <span className='text-orange text-xs'>{label}</span>
					  <p>{textSelect}: {selectedValue?.name}</p>
          </div>
          <IoMdCloseCircleOutline
              className="mr-3 h-4 w-4 text-orange"
              aria-hidden="true"
              onClick={() => handleShowInput()}
            />
				</div>
			)}
		</div>
	);
};

export default InputSelectComponent;

