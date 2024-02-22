'use client';
import { useEffect, useState } from 'react';
import { Input, Card, List, ListItem } from '@material-tailwind/react';

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
		const input = event.target.value;
		setInputValue(input);
		setIsOptionsVisible(true);
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
		<div className="flex flex-col">
			{isOptionsVisible ? (
				<div className="flex flex-col">
					<Input
						variant="static"
						label={label}
						type="text"
						placeholder={placeholder}
						value={inputValue}
						onChange={handleInputChange} crossOrigin={undefined} />
					{isOptionsVisible && options.length > 0 && (
						<Card className="w-full" placeholder={undefined}>
							<List placeholder={undefined}>
								{options.map((option) => (
									<ListItem
										key={option.id}
										onClick={() => handleSelect(option)}
										className={option.id === selectedValue?.id ? 'bg-blue-200' : ''}
										placeholder={undefined}
									>
										{option.name}
									</ListItem>
								))}
							</List>
						</Card>
					)}
					{error && <p className="text-red-500">{error}</p>}
				</div>
			) : (
				<div>
					<p>{textSelect}: {selectedValue?.name}</p>
					<button onClick={handleShowInput}>Edit</button>
				</div>
			)}
		</div>
	);
};

export default InputSelectComponent;

