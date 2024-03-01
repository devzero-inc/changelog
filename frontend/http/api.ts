const getChangeLogs = async () => {
    try {
        const response = await fetch('http://localhost:5000/change-log');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};
  
export default getChangeLogs;