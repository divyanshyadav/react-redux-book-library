const randomLightColor = () => {
    const letters = 'BCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
};

export default randomLightColor;
