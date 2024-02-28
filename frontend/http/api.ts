const getChangeLogs = async () => {
    try {
        // will call the backend to get the data in later commits
        const data ={data: [
            {
                path: '../../content/employee-app.md',
                date: "January 19, 2024",
                version: "v 1.0.3"
            },
            {
                path: '../../content/photo-app.md',
                date: "January 29, 2024",
                version: "v 1.0.2"
            },
            {
                path: '../../content/roadmap-app.md',
                date: "February 02, 2024",
                version: "v 1.2.1"
            },
            {
                path: '../../content/photo-app.md',
                date: "Februrary 08, 2024",
                version: "v 1.6.0"
            }
        ]};
        return data;
    } catch (error) {
        console.error(error);
    }
};
  
export default getChangeLogs;