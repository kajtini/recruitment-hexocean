interface ValidationErrorsProps {
    errorMessages: string[];
}

const ValidationErrors = ({ errorMessages }: ValidationErrorsProps) => {
    return (
        <ul className="flex flex-col gap-1">
            {errorMessages.map((message) => (
                <li key={message} className="text-red-400">
                    {message}
                </li>
            ))}
        </ul>
    );
};

export default ValidationErrors;
