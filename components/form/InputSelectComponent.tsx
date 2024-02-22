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
}

const InputSelectComponent: React.FC<InputSelectComponentProps> = ({
	label,
	placeholder,
	fetchOptions,
	onSelect,
	selectedValue,
	error,
}) => {
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

	return (
		<div className="flex flex-col">
			<label htmlFor={label}>{label}</label>
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
								key={option.id} // Adjust this based on your option structure
								onClick={() => handleSelect(option)}
								className={option.id === selectedValue?.id ? 'bg-blue-200' : ''}
								placeholder={undefined}
							>
								{option.name} {/* Adjust this based on your option structure */}
							</ListItem>
						))}
					</List>
				</Card>
			)}
			{error && <p className="text-red-500">{error}</p>}
		</div>
	);
};

export default InputSelectComponent;
