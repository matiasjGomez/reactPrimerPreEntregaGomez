import jsonData from '../json/products.json';

export const products = jsonData;

export async function getItemById (id) {
    try {
        const item = jsonData.find(item => item.id === parseInt(id))

        await new Promise(resolve => setTimeout(resolve));

        return item;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default jsonData;