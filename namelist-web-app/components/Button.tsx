interface ButtonProps {
    onClick: () => void;
    type: "add" | "delete";
}

export default function Button({ onClick, type }: ButtonProps) {
    const buttonStyles = type === "add" 
        ? `bg-primary hover:opacity-70 text-black`
        : `bg-danger hover:opacity-70 text-white`;

    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded w-24 transition duration-200 text-black font-sans text-[12px] font-normal ${buttonStyles}`}
        >
            {type === "add" ? "Add" : "Delete"}
        </button>
    );
}
