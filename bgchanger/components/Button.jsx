const colorClasses = {
    red: 'border-red-500 text-red-500',
    blue: 'border-blue-500 text-blue-500',
    green: 'border-green-500 text-green-500',
    yellow: 'border-yellow-500 text-yellow-500',
};

function Button({ color }) {

    function handleClick(){
        document.body.style.background = `${color}`;
    }

    return (
        <div className={`border-2 rounded-md px-4 ${colorClasses[color] || ''} cursor-pointer`} onClick={handleClick}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
        </div>
    );
}

export default Button;